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
crypto pki certificate chain TP-self-signed-3639644206
 certificate self-signed 01
  30820330 30820218 A0030201 02020101 300D0609 2A864886 F70D0101 05050030 
  31312F30 2D060355 04031326 494F532D 53656C66 2D536967 6E65642D 43657274 
  69666963 6174652D 33363339 36343432 3036301E 170D3235 31323136 31333436 
  33345A17 0D333531 32313631 33343633 345A3031 312F302D 06035504 03132649 
  4F532D53 656C662D 5369676E 65642D43 65727469 66696361 74652D33 36333936 
  34343230 36308201 22300D06 092A8648 86F70D01 01010500 0382010F 00308201 
  0A028201 0100A106 749BCD9F 4A7FF5FE 6C4DEC2E F6AB08DF 01C49CE1 51DC05B8 
  73124A92 77CFED41 522D7D62 9E83DD02 8F746893 261247E9 6AEEF7A5 71B5B10A 
  4E7023AA 4F20CFC6 D395617B 72E9737F 5D0C2B94 42B4F19D DC221757 2D16D94F 
  98F10119 FC886D78 E51F184B E462A69D CA7B71B4 B4BC3F94 D25E685C 2B8E6ABF 
  AB21B001 37905011 1089E5AF 6CAE053D 092D7826 18F44040 15CCC191 2BAB27FA 
  4246FAF0 C3541BEF 942AB86B 54DFC40F 63C93356 9C0FF391 6F48858F 41888264 
  A74935FF 723040B4 2A7EBA0D 028DA5EA E442248E 9741FB41 545E25B7 8CC9C8F9 
  D61FFB92 BDBA38C6 C962554D 44C78B93 87A80DAE 3C034F48 E725C1A3 1213608E 
  4DB8B60D AA030203 010001A3 53305130 0F060355 1D130101 FF040530 030101FF 
  301F0603 551D2304 18301680 140D098E C457F56B 213CFBE9 B8521B57 0B430105 
  D6301D06 03551D0E 04160414 0D098EC4 57F56B21 3CFBE9B8 521B570B 430105D6 
  300D0609 2A864886 F70D0101 05050003 82010100 707E0122 0CCF0AF5 402747A6 
  84D75ED2 01E94D3B 41432E84 A8FA4B0E CC7CE395 69C963A4 884487FE E240A58A 
  2ED5C651 DFE0FB9F 8D0DA620 926F3659 8C2EF896 25E4C78E 0BD15365 89BF6A8A 
  B9E997B7 8BE29E38 0035E48F 34C887C4 4FF7886F D7079065 6BD7DE2D 838BE94E 
  0712E99A 3F5206AE 2AC9A9D3 F76FCC3E D6BCA28C BA09A775 4CCD8531 F49EA7CE 
  47FEC4FB 6BE178A9 BC4AD4A5 64A448A6 BCDE5066 40044B26 B90C1EC4 0D9F91F5 
  C6CD0548 1A7DB43D DB48330C 18109361 7A19C88A 781031C2 5C22E721 F94FFBDD 
  70F2CEFF DEABC093 3129B94E F60DAC65 CB0F881E A56B2463 374354CB 1FDFC608 
  EE2316D4 629317BB C512D324 FA6C60C1 6CD1666F
        quit
!         
crypto pki certificate pool
 cabundle nvram:ios_core.p7b
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
username etudiant privilege 15 secret 9 $9$D/hh3TaVW8VEF.$FZObadhOIwXPzr0wuIO5/Y8Z1VOcXuyuDf.
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
class-map match-any system-cpp-police-ios-routin
class-map match-any system-cpp-police-punt-webauth
  description Punt Webauth
class-map match-any system-cpp-police-l2lvx-control
  description L2 LVX control packets
class-map match-any system-cpp-police-multicas1x-auth
  description DOT1X Auth
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
  description ICMPGEN,BROADCAST,ICMP,L2LVXCntrl,ProtoSnoop,PuntWebauth,MCASTData,Transit,DOT 
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

