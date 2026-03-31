---
title: "Configuration du SwitchLv3"
description: "Configuration du SwitchLv3"
---

```
version 17.6
service timestamps debug datetime msec
service timestamps log datetime msec
! Call-home is enabled by Smart-Licensing.
service call-home
platform punt-keepalive disable-kernel-core
!
hostname SwitchL3EPOKA
!
!
vrf definition Mgmt-vrf
 !
 address-family ipv4
 exit-address-family
 !
 address-family ipv6
 exit-address-family
!
!
!         
!
!
no aaa new-model
switch 1 provision c9200l-24t-4g
!
!
!
!
!
!
!
!
!
ip routing
!
!
!
!
login on-success log
!
crypto pki trustpoint SLA-TrustPoint
 enrollment pkcs12
 revocation-check crl
!
crypto pki trustpoint TP-self-signed-3639644206
 enrollment selfsigned
 subject-name cn=IOS-Self-Signed-Certificate-3639644206
 revocation-check none
 rsakeypair TP-self-signed-3639644206
!
!
crypto pki certificate chain SLA-TrustPoint
 certificate ca 01 nvram:CiscoLicensi#1CA.cer
crypto pki certificate chain TP-self-signed-3639644206
 certificate self-signed 01 nvram:IOS-Self-Sig#20.cer
!
license boot level network-essentials addon dna-essentials
!
!
diagnostic bootup level minimal
!
spanning-tree mode rapid-pvst
spanning-tree extend system-id
memory free low-watermark processor 10626
!
!         
redundancy
 mode sso
!
!
transceiver type all
 monitoring
!
!
class-map match-any system-cpp-police-ewlc-control
  description EWLC Control 
class-map match-any system-cpp-police-topology-control
  description Topology control
class-map match-any system-cpp-police-sw-forward
  description Sw forwarding, L2 LVX data packets, LOGGING, Transit Traffic
class-map match-any system-cpp-default
  description EWLC data, Inter FED Traffic 
class-map match-any system-cpp-police-sys-data
  description Openflow, Exception, EGR Exception, NFL Sampled Data, RPF Failed
class-map match-any system-cpp-police-punt-webauth
  description Punt Webauth
class-map match-any system-cpp-police-l2lvx-control
  description L2 LVX control packets
class-map match-any system-cpp-police-forus
  description Forus Address resolution and Forus traffic
class-map match-any system-cpp-police-multicast-end-station
  description MCAST END STATION
class-map match-any system-cpp-police-high-rate-app
  description High Rate Applications 
class-map match-any system-cpp-police-multicast
  description MCAST Data
class-map match-any system-cpp-police-l2-control
  description L2 control
class-map match-any system-cpp-police-dot1x-auth
  description DOT1X Auth
class-map match-any system-cpp-police-data
  description ICMP redirect, ICMP_GEN and BROADCAST
class-map match-any system-cpp-police-stackwise-virt-control
  description Stackwise Virtual OOB
class-map match-any non-client-nrt-class
class-map match-any system-cpp-police-routing-control
  description Routing control and Low Latency
class-map match-any system-cpp-police-protocol-snooping
  description Protocol snooping
class-map match-any system-cpp-police-dhcp-snooping
  description DHCP snooping
class-map match-any system-cpp-police-ios-routing
  description L2 control, Topology control, Routing control, Low Latency
class-map match-any system-cpp-police-system-critical
  description System Critical and Gold Pkt
class-map match-any system-cpp-police-ios-feature
  description ICMPGEN,BROADCAST,ICMP,L2LVXCntrl,ProtoSnoop,PuntWebauth,MCASTData,Transit,DOT1XAuth,Swfwd,LOGGING,L2LVXData,ForusTraffic,ForusARP,McastEndStn,Openflow,Exception,EGRExcption,d
!
policy-map system-cpp-policy
!
! 
!
!
!
!
!
!
!
!
!
!
!
!         
interface GigabitEthernet0/0
 vrf forwarding Mgmt-vrf
 no ip address
 shutdown
!
interface GigabitEthernet1/0/1
 switchport access vlan 11
 switchport mode access
!
interface GigabitEthernet1/0/2
 switchport access vlan 21
 switchport mode access
!
interface GigabitEthernet1/0/3
 switchport access vlan 31
 switchport mode access
!
interface GigabitEthernet1/0/4
 switchport access vlan 41
 switchport mode access
!
interface GigabitEthernet1/0/5
 switchport access vlan 53
 switchport mode access
!
interface GigabitEthernet1/0/6
 switchport access vlan 61
 switchport mode access
!
interface GigabitEthernet1/0/7
 switchport access vlan 71
 switchport mode access
!
interface GigabitEthernet1/0/8
 switchport access vlan 54
 switchport mode access
!
interface GigabitEthernet1/0/9
!
interface GigabitEthernet1/0/10
!
interface GigabitEthernet1/0/11
!
interface GigabitEthernet1/0/12
!
interface GigabitEthernet1/0/13
!
interface GigabitEthernet1/0/14
!
interface GigabitEthernet1/0/15
!
interface GigabitEthernet1/0/16
!
interface GigabitEthernet1/0/17
!
interface GigabitEthernet1/0/18
!
interface GigabitEthernet1/0/19
!
interface GigabitEthernet1/0/20
!
interface GigabitEthernet1/0/21
!
interface GigabitEthernet1/0/22
!
interface GigabitEthernet1/0/23
!
interface GigabitEthernet1/0/24
 switchport trunk allowed vlan 11,21,31,41,53,61,71
 switchport mode trunk
!
interface GigabitEthernet1/1/1
!
interface GigabitEthernet1/1/2
!
interface GigabitEthernet1/1/3
!
interface GigabitEthernet1/1/4
!
interface Vlan1
 no ip address
 shutdown
!
interface Vlan11
 ip address 192.168.3.65 255.255.255.224
 ip helper-address 172.16.53.2
!
interface Vlan21
 ip address 192.168.3.161 255.255.255.224
 ip helper-address 172.16.53.2
!
interface Vlan31
 ip address 192.168.3.193 255.255.255.224
 ip helper-address 172.16.53.2
!
interface Vlan33
 no ip address
!
interface Vlan41
 ip address 192.168.3.225 255.255.255.240
 ip helper-address 172.16.53.2
!
interface Vlan53
 ip address 172.16.53.253 255.255.255.0
 ip helper-address 172.16.53.2
!
interface Vlan54
 ip address 192.168.33.253 255.255.255.240
!
interface Vlan61
 ip address 192.168.3.1 255.255.255.192
 ip helper-address 172.16.53.2
!
interface Vlan71
 ip address 192.168.3.129 255.255.255.224
 ip helper-address 172.16.53.2
!
ip forward-protocol nd
ip http server
ip http authentication local
ip http secure-server
ip route 0.0.0.0 0.0.0.0 192.168.33.254
!
!
!
snmp-server group ReadOnly v3 priv read ReadOnly-View 
snmp-server view ReadOnly-View iso included
snmp-server location Agence CL CUB
snmp-server contact postmaster@californie.cub.sioplc.fr
!
control-plane
 service-policy input system-cpp-policy
!
!
line con 0
 stopbits 1
line aux 0
line vty 0 4
 login
 transport input ssh
line vty 5 15
 login
 transport input ssh
!
call-home
 ! If contact email address in call-home is configured as sch-smart-licensing@cisco.com
 ! the email address configured in Cisco Smart License Portal will be used as contact email address to send SCH notifications.
 contact-email-addr sch-smart-licensing@cisco.com
 profile "CiscoTAC-1"
  active
  destination transport-method http
!
!
!
!
!
!
!
!
!
!
!PARTIE A SAUVEGARDER A LA BASCULE
!PARTIE A SAUVEGARDER A LA BASCULE
!PARTIE A SAUVEGARDER A LA BASCULE
!PARTIE A SAUVEGARDER A LA BASCULE
!PARTIE A SAUVEGARDER A LA BASCULE
!PARTIE A SAUVEGARDER A LA BASCULE
!PARTIE A SAUVEGARDER A LA BASCULE
!PARTIE A SAUVEGARDER A LA BASCULE
!PARTIE A SAUVEGARDER A LA BASCULE
!PARTIE A SAUVEGARDER A LA BASCULE
!
!
snmp-server user zabbix ReadOnly v3 auth sha etudiant_007 priv aes 128 azerty2QWERTY
!
!
do write
!
end
```