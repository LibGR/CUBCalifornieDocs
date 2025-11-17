# Configuration du SwitchLv3
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
  69666963 6174652D 33363339 36343432 3036301E 170D3235 31303036 30373533 
  32375A17 0D333531 30303630 37353332 375A3031 312F302D 06035504 03132649 
  4F532D53 656C662D 5369676E 65642D43 65727469 66696361 74652D33 36333936 
  34343230 36308201 22300D06 092A8648 86F70D01 01010500 0382010F 00308201 
  0A028201 0100E33A D2038552 1469DD99 F7C92E05 00C9D626 F69E9F25 DC400598 
  99EF55FD 39EB27B5 1D2FF594 1DCCDE79 1A619E7B DE7054D4 0A73096A 09BA3EBF 
  8F3EC86D FD2F0198 7125C09D 3D293E84 2CE63604 C82A8A84 E559CAE6 7A5CFD9B 
  5F455E27 E20F5E0A 4F4EA6DF B6ADA130 D4BD2A65 BEA76744 9F7930A1 4797A21E 
  06AA07BB 28E0D8E6 0EB01D90 352F27B8 07100AF8 ED8E0769 3F58324D 74949718 
  C6068B02 67DB5F6D 50ECD54B 41ECDACB 01CB8070 122B3E62 1F64C86D CAC92C14 
  503D11DD C071586B 9EE8AB07 800E3A44 A1190AD7 73C481DD 23864EA9 AC89BBBD 
  AC48DD5E 1E7C7654 407106A6 023CEB35 6A4493A2 B5858D5B 339399C9 BAC17D5F 
  BEA318EA 0F8D0203 010001A3 53305130 0F060355 1D130101 FF040530 030101FF 
  301F0603 551D2304 18301680 140A57EC 085F21AB BFB80243 218C6C44 E457AB4B 
  47301D06 03551D0E 04160414 0A57EC08 5F21ABBF B8024321 8C6C44E4 57AB4B47 
  300D0609 2A864886 F70D0101 05050003 82010100 8087F15B 8FF27274 8F2DDD80 
  95131276 651346E2 8FE0FCCD D8A2B7E7 AB940406 1FFE11D8 A6B4D6A2 1C03318A 
  C192BB9C B5193A9F BE3E88EA F27275CC 95C27A48 F32BDD35 4196BB90 DAAE9D09 
  564540A2 16369BF7 F83C335B E6CD6BFD E5642315 27D5DE86 3E57FCF6 215188F6 
  907745E5 C5451637 1A5AE539 CDE6C6AD E8946F15 2B2D08E2 A32C30ED 181F5496 
  D9EB60E5 18C3A215 1489E357 E976A260 77E02715 17FE7F58 8C191B7A 5056D0FC 
  53355331 BF2B8C6A 5CDE1BC6 30A9746B 4BDDAF30 7CEF4790 0D7167AB ACAD5044 
  EE7D4557 A12A2184 563EFC0A A3A0CE08 74ECEE24 AA49F59A EE93E9B2 F052E774 
  ACA9EC7D FC914EE1 B3F6652D 533BEB2A D414BE6A
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
  description ICMPGEN,BROADCAST,ICMP,L2LVXCntrl,ProtoSnoop,PuntWebauth,MCASTData,Transit,DOT1XAuth,Swfwd,LOGGING,L2LVXData,ForusTraffic,ForusARP,McastEndStn,Openflow,Exception,EGRExcption,NflSampled,RpfFailed
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
end
```