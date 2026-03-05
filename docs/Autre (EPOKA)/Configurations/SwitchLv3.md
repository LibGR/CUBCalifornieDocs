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
  69666963 6174652D 33363339 36343432 3036301E 170D3236 30333034 31353036 
  33315A17 0D333630 33303331 35303633 315A3031 312F302D 06035504 03132649 
  4F532D53 656C662D 5369676E 65642D43 65727469 66696361 74652D33 36333936 
  34343230 36308201 22300D06 092A8648 86F70D01 01010500 0382010F 00308201 
  0A028201 0100C69A 8C638600 D3941070 582211DA 9CF80B29 1DED375F 645074C9 
  BD9FE597 4B55C854 EACE7B4F 2C7B46FE 98EE1A0D E80FA752 5DBEBD07 071B1C75 
  B7BD6550 3FF5F076 743C1DD1 25F3254C 2AA6D492 7999533F FE1B5C92 FF4AF447 
  90E7E406 C4F743C5 1E90C8B6 DA89903F FA139C40 9BA1BE8D B727691D 77B36239 
  D51A8D28 3670562E EC32CE75 0FDB4276 6462A6FB 22C8F39E 45192583 68713A47 
  71DD6BE7 59E67F8C 639E1201 2AB76380 ACC00276 9B3BB53E 93CD0CE6 020C01A9 
  57E6EA40 5F8EDA10 2A67337D C02D8422 3FBBE8A7 EAB1B068 AEF2C1B7 5E449E72 
  0F2D4661 D743BC29 F4966333 32223333 515C5D22 CEDF0D72 CEC11B25 7D7144B4 
  7FFDD004 727D0203 010001A3 53305130 0F060355 1D130101 FF040530 030101FF 
  301F0603 551D2304 18301680 14B76DF6 E9755C5C BD917502 19E2F435 0B984384 
  7F301D06 03551D0E 04160414 B76DF6E9 755C5CBD 91750219 E2F4350B 9843847F 
  300D0609 2A864886 F70D0101 05050003 82010100 64D477A5 70E8F925 1AA9991B 
  7016858A 6C073828 03CD3FD7 5F8BECC6 CCC59976 DFDF8209 53F58568 CE6416CF 
  AC3BE47F 00F0E0FD 3C39AC47 D6BC2905 535DA548 797FF1D9 07B9C7EC 3C727406 
  D707F8E9 8A35D410 E4153C9C 6987A5DB E8C791C5 599F2801 041DDB64 5A9A34F3 
  9D030729 79A9BC9C 4FE1DEC3 611C8E34 FE5509D0 D27D9E25 8E0A9EF4 BF0B6D16 
  6620F69A 8EA5AC87 F0BAA3C0 C97DA7FF 98128172 AB012CD6 96442DD4 58F6A868 
  7B83FE3C F702EB35 D1141109 ADF5E0E2 B465F266 BE8306F8 DB979D35 38E8FC29 
  8045ADE7 4C771BDF 22E58541 2349A7CB 6F37A10C E8CAEF26 EFFC158A DB58F974 
  0D298EE3 06EFB843 6585BE29 BFDA6ECE D19193B4
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