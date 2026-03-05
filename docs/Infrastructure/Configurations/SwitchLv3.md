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
ip domain name cub.lan
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
 certificate self-signed 01
  30820330 30820218 A0030201 02020101 300D0609 2A864886 F70D0101 05050030 
  31312F30 2D060355 04031326 494F532D 53656C66 2D536967 6E65642D 43657274 
  69666963 6174652D 33363339 36343432 3036301E 170D3236 30333035 30383330 
  34365A17 0D333630 33303430 38333034 365A3031 312F302D 06035504 03132649 
  4F532D53 656C662D 5369676E 65642D43 65727469 66696361 74652D33 36333936 
  34343230 36308201 22300D06 092A8648 86F70D01 01010500 0382010F 00308201 
  0A028201 01009A60 56B712A8 378C90B4 35F716D3 8F9AE43F 5A7DF953 9459490A 
  E082591A 0069739E 8128EC1B 4D3A46B0 2FFEF2E7 F7C72888 8553234C 19FDA7A7 
  FA110BFC 9850FFCA CE014F71 6A68370A BBA10AEC 6E4AB9A6 1EC0F4C2 1F7FE942 
  825D8A19 C28A174D 4F453673 1417D672 0C785835 657E00D9 9FA5BBFF 0EFBC15B 
  BFDCF71D E0B1C97A 8C3C7723 186AE796 7A47BCA1 8A3CB100 E3A29C00 08AF1C17 
  B87E8925 0B3BA2FC 35F602A0 E38C9307 418E02D8 FE024354 C459132E 87F0244D 
  D80B1606 571E0898 3474A8DB DD156F34 85CE8919 F7F9B941 86F0CA63 8FB1349B 
  BBB60356 D0491F5F F5AEA9BD 6866CACF 93C3FD4C 33A3672B A45DEC45 2E7B9C28 
  C0523673 ADCB0203 010001A3 53305130 0F060355 1D130101 FF040530 030101FF 
  301F0603 551D2304 18301680 14994FDE BDAC0DB5 881EBFC1 7A5ABD0B 5EFECA1B 
  E8301D06 03551D0E 04160414 994FDEBD AC0DB588 1EBFC17A 5ABD0B5E FECA1BE8 
  300D0609 2A864886 F70D0101 05050003 82010100 8A5A1670 F8F2BBCC 273AD7D7 
  82F33A31 D8902E84 934CF894 128FB8E9 22166D5F 744BB4D3 244E2DC1 1BDFDE3E 
  3A4E2216 CF272629 751BAEF1 3156B2FB 94DDB40D B1FB10AD C902F4A0 91C3DC00 
  4D9B5813 49C04264 4691D2F7 C8F34232 54253FFE 05AE941B 784ABD94 8D4CA6B7 
  150C0E52 B869B4C1 FB4DACE8 7A8D2153 0BBB9D3D 09A89449 0EC04181 B585AE65 
  E5EF4ADA D1BB03F3 74403FE8 780187BA A2CD052A C61D3D9D A9DA886E 4437265D 
  33305F41 4AE4CF97 BBB642FF B23A9FE7 C7BDE2AE 2F7CA453 B00F42E0 594B757A 
  C416BF71 432E5F8E B4B4FE27 39EEF48C D2E2DA1E F57AD547 99701A09 BF1B5EB0 
  F6F0A437 6E80343E B4F7D92A 7588D202 7FA535CC
        quit
crypto pki certificate chain SLA-TrustPoint
 certificate ca 01
  30820321 30820209 A0030201 02020101 300D0609 2A864886 F70D0101 0B050030 
  32310E30 0C060355 040A1305 43697363 6F312030 1E060355 04031317 43697363 
  6F204C69 63656E73 696E6720 526F6F74 20434130 1E170D31 33303533 30313934 
  3834375A 170D3338 30353330 31393438 34375A30 32310E30 0C060355 040A1305 
  43697363 6F312030 1E060355 04031317 43697363 6F204C69 63656E73 696E6720 
  526F6F74 20434130 82012230 0D06092A 864886F7 0D010101 05000382 010F0030 
  82010A02 82010100 A6BCBD96 131E05F7 145EA72C 2CD686E6 17222EA1 F1EFF64D 
  CBB4C798 212AA147 C655D8D7 9471380D 8711441E 1AAF071A 9CAE6388 8A38E520 
  1C394D78 462EF239 C659F715 B98C0A59 5BBB5CBD 0CFEBEA3 700A8BF7 D8F256EE 
  4AA4E80D DB6FD1C9 60B1FD18 FFC69C96 6FA68957 A2617DE7 104FDC5F EA2956AC 
  7390A3EB 2B5436AD C847A2C5 DAB553EB 69A9A535 58E9F3E3 C0BD23CF 58BD7188 
  68E69491 20F320E7 948E71D7 AE3BCC84 F10684C7 4BC8E00F 539BA42B 42C68BB7 
  C7479096 B4CB2D62 EA2F505D C7B062A4 6811D95B E8250FC4 5D5D5FB8 8F27D191 
  C55F0D76 61F9A4CD 3D992327 A8BB03BD 4E6D7069 7CBADF8B DF5F4368 95135E44 
  DFC7C6CF 04DD7FD1 02030100 01A34230 40300E06 03551D0F 0101FF04 04030201 
  06300F06 03551D13 0101FF04 05300301 01FF301D 0603551D 0E041604 1449DC85 
  4B3D31E5 1B3E6A17 606AF333 3D3B4C73 E8300D06 092A8648 86F70D01 010B0500 
  03820101 00507F24 D3932A66 86025D9F E838AE5C 6D4DF6B0 49631C78 240DA905 
  604EDCDE FF4FED2B 77FC460E CD636FDB DD44681E 3A5673AB 9093D3B1 6C9E3D8B 
  D98987BF E40CBD9E 1AECA0C2 2189BB5C 8FA85686 CD98B646 5575B146 8DFC66A8 
  467A3DF4 4D565700 6ADF0F0D CF835015 3C04FF7C 21E878AC 11BA9CD2 55A9232C 
  7CA7B7E6 C1AF74F6 152E99B7 B1FCF9BB E973DE7F 5BDDEB86 C71E3B49 1765308B 
  5FB0DA06 B92AFE7F 494E8A9E 07B85737 F3A58BE1 1A48A229 C37C1E69 39F08678 
  80DDCD16 D6BACECA EEBC7CF9 8428787B 35202CDC 60E4616A B623CDBD 230E3AFB 
  418616A9 4093E049 4D10AB75 27E86F73 932E35B5 8862FDAE 0275156F 719BB2F0 
  D697DF7F 28
        quit
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

