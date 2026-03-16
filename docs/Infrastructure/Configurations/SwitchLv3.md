# Configuration du SwitchLv3
```
version 17.6
service timestamps debug datetime msec
service timestamps log datetime msec
! Call-home is enabled by Smart-Licensing.
service call-home
platform punt-keepalive disable-kernel-core
!
hostname SwitchLv3CUB
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
crypto pki trustpoint TP-self-signed-3639644206
 enrollment selfsigned
 subject-name cn=IOS-Self-Signed-Certificate-3639644206
 revocation-check none
 rsakeypair TP-self-signed-3639644206
!
crypto pki trustpoint SLA-TrustPoint
 enrollment pkcs12
 revocation-check crl
!
!
crypto pki certificate chain TP-self-signed-3639644206
 certificate self-signed 01 nvram:IOS-Self-Sig#1D.cer
crypto pki certificate chain SLA-TrustPoint
 certificate ca 01 nvram:CiscoLicensi#1CA.cer
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
  description ICMPGEN,BROADCAST,ICMP,L2LVXCntrl,ProtoSnoop,PuntWebauth,MCASTData,Transit,DOTd
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
 switchport access vlan 53
 switchport trunk allowed vlan 53
 switchport mode access
!
interface GigabitEthernet1/0/2
 switchport access vlan 53
 switchport trunk allowed vlan 53
 switchport mode access
!
interface GigabitEthernet1/0/3
 switchport access vlan 53
 switchport trunk allowed vlan 53
 switchport mode access
!
interface GigabitEthernet1/0/4
 switchport access vlan 53
 switchport trunk allowed vlan 53
 switchport mode access
!
interface GigabitEthernet1/0/5
 switchport access vlan 53
 switchport trunk allowed vlan 53
 switchport mode access
!
interface GigabitEthernet1/0/6
 switchport access vlan 53
 switchport trunk allowed vlan 53
 switchport mode access
!
interface GigabitEthernet1/0/7
 switchport access vlan 53
 switchport trunk allowed vlan 53
 switchport mode access
!
interface GigabitEthernet1/0/8
 switchport access vlan 53
 switchport trunk allowed vlan 53
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
 switchport access vlan 54
 switchport mode access
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
 switchport access vlan 33
 switchport mode access
!
interface GigabitEthernet1/0/24
 switchport trunk allowed vlan 10,20,53
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
 ip address 172.16.1.23 255.255.255.0
 shutdown
!
interface Vlan10
 ip address 192.168.3.190 255.255.255.192
 ip helper-address 192.168.3.2
 ip helper-address 192.168.3.1
 ip helper-address 192.168.3.3
 ip access-group reseau-client in
!
interface Vlan20
 ip address 192.168.3.206 255.255.255.240
 ip helper-address 192.168.3.2
 ip helper-address 192.168.3.1
 ip helper-address 192.168.3.3
!
interface Vlan33
 ip address 192.168.33.253 255.255.255.240
 ip helper-address 192.168.3.2
!
interface Vlan53
 ip address 192.168.3.126 255.255.255.128
 ip helper-address 192.168.3.2
 ip access-group reseau-production in
!
interface Vlan54
 ip address 192.168.131.254 255.255.255.0
!
ip forward-protocol nd
ip http server
ip http authentication local
ip http secure-server
ip route 0.0.0.0 0.0.0.0 192.168.33.254
ip ssh version 2
!
!
ip access-list extended reseau-admin
 10 permit tcp any any established
 20 permit icmp 192.168.23.192 0.0.0.15 any echo
 30 deny   ip 192.168.3.192 0.0.0.15 192.168.3.128 0.0.0.63
 40 deny   tcp 192.168.3.192 0.0.0.15 192.168.3.0 0.0.0.127 eq 22
 50 deny   tcp 192.168.3.192 0.0.0.15 192.168.3.0 0.0.0.127 eq 3389
 60 permit ip 192.168.3.192 0.0.0.15 host 192.168.3.1
 70 permit ip 192.168.3.192 0.0.0.15 host 192.168.3.2
 80 permit ip 192.168.3.192 0.0.0.15 host 192.168.3.110
 90 permit ip 192.168.3.192 0.0.0.15 host 192.168.3.111
 100 permit udp 192.168.3.192 0.0.0.15 host 192.168.3.10 eq domain
 110 permit udp 192.168.3.192 0.0.0.15 host 192.168.3.11 eq domain
 120 permit tcp 192.168.3.192 0.0.0.15 host 192.168.3.125 eq 8080
 130 permit tcp 192.168.3.192 0.0.0.15 host 192.168.3.12 eq 443
 140 deny   ip 192.168.3.192 0.0.0.15 192.168.3.0 0.0.0.127
 150 permit ip 192.168.3.192 0.0.0.15 any
ip access-list extended reseau-client
 10 permit tcp any any established
 20 permit icmp 192.168.3.128 0.0.0.63 any echo-reply
 30 permit udp any eq bootpc any eq bootps
 40 permit udp 192.168.3.128 0.0.0.63 gt 1023 host 192.168.3.10 eq domain
 50 permit udp 192.168.3.128 0.0.0.63 gt 1023 host 192.168.3.11 eq domain
 60 deny   tcp 192.168.3.128 0.0.0.63 192.168.3.0 0.0.0.127 eq 22
 70 deny   tcp 192.168.3.128 0.0.0.63 192.168.3.0 0.0.0.127 eq 3389
 80 permit ip 192.168.3.128 0.0.0.63 host 192.168.3.1
 90 permit ip 192.168.3.128 0.0.0.63 host 192.168.3.2
 100 permit ip 192.168.3.128 0.0.0.63 host 192.168.3.110
 110 permit ip 192.168.3.128 0.0.0.63 host 192.168.3.111
 120 deny   ip 192.168.3.128 0.0.0.63 192.168.3.192 0.0.0.15
 130 deny   ip 192.168.3.128 0.0.0.63 192.168.3.0 0.0.0.127
 140 permit ip 192.168.3.128 0.0.0.63 any
ip access-list extended reseau-production
 10 permit udp any eq bootpc any eq bootps
 20 permit udp host 192.168.3.1 eq bootps host 192.168.3.190 eq bootps
 30 permit udp host 192.168.3.190 eq bootps host 192.168.3.1 eq bootps
 40 permit udp host 192.168.3.3 eq bootps host 192.168.3.190 eq bootps
 50 permit udp host 192.168.3.190 eq bootps host 192.168.3.3 eq bootps
 60 permit tcp any any established
 70 permit icmp 192.168.3.0 0.0.0.127 any echo-reply
 80 permit udp host 192.168.3.10 eq domain any
 90 permit udp host 192.168.3.11 eq domain any
 100 permit udp host 192.168.3.1 eq domain any
 110 permit udp host 192.168.3.2 eq domain any
 120 deny   ip 192.168.3.0 0.0.0.127 192.168.3.192 0.0.0.15
 130 deny   ip 192.168.3.0 0.0.0.127 192.168.3.128 0.0.0.63
 140 permit ip 192.168.3.0 0.0.0.127 any
!
!
control-plane
 service-policy input system-cpp-policy
!
!
line con 0
 stopbits 1
line aux 0
line vty 0 4
 login local
 transport input ssh
line vty 5 15
 login
 transport input ssh
!
call-home
 ! If contact email address in call-home is configured as sch-smart-licensing@cisco.com
 ! the email address configured in Cisco Smart License Portal will be used as contact email .
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
end
```