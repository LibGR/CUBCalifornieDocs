# Configuration du SwitchLv2
```
version 15.0
no service pad
service timestamps debug datetime msec
service timestamps log datetime msec
no service password-encryption
!
hostname SwitchLv2EPOKA
!
boot-start-marker
boot-end-marker
!
!
no aaa new-model
system mtu routing 1500
!
!
!
!
crypto pki trustpoint TP-self-signed-2716685696
 enrollment selfsigned
 subject-name cn=IOS-Self-Signed-Certificate-2716685696
 revocation-check none
 rsakeypair TP-self-signed-2716685696
!
!
crypto pki certificate chain TP-self-signed-2716685696
 certificate self-signed 01
  3082022B 30820194 A0030201 02020101 300D0609 2A864886 F70D0101 05050030 
  31312F30 2D060355 04031326 494F532D 53656C66 2D536967 6E65642D 43657274 
  69666963 6174652D 32373136 36383536 3936301E 170D3933 30333031 30303031 
  35395A17 0D323030 31303130 30303030 305A3031 312F302D 06035504 03132649 
  4F532D53 656C662D 5369676E 65642D43 65727469 66696361 74652D32 37313636 
  38353639 3630819F 300D0609 2A864886 F70D0101 01050003 818D0030 81890281 
  81009527 3AA91AAA E0A72DF4 0F632CF4 7F74651D BCE619DE EB3F4E78 14875665 
  66DDE0A5 6BE421F0 22056E73 3D4F020F F88D8105 98EF4DEB 2393644E BEA67170 
  7538AE83 0FA73A9F 955D2CFA CA5C85B4 BF85F1F7 66739086 288AF192 6737C7C8 
  6262106E 93799A1E F1ED365F 711FECE5 A7B9DBE5 4D3EBB81 259FF0F0 21DBA2B2 
  CAA10203 010001A3 53305130 0F060355 1D130101 FF040530 030101FF 301F0603 
  551D2304 18301680 1449AB7C 361AD55D 80DAC8BE 474073AD 7D2D0116 95301D06 
  03551D0E 04160414 49AB7C36 1AD55D80 DAC8BE47 4073AD7D 2D011695 300D0609 
  2A864886 F70D0101 05050003 81810075 2E099706 80C30BE4 CEF804C4 7E4223D3 
  3389BEF5 19CAF83B 147E2299 24AF2B99 CD813535 439A5A24 71AC801D 02EC66DA 
  1E8D8CFB 835491BF 8D91B400 2CEDF1E3 C4A9AB86 DB548D3D 790D0A64 389ACDD3 
  A525AB21 F9E6FF19 52D126AA 72C11FE4 351C6CCC 5FD3E34F B619913F 832FED04 
  D43EB948 5FF1AD50 F99B3604 3659CB
        quit
!
!
!
!
!
spanning-tree mode pvst
spanning-tree extend system-id
!
vlan internal allocation policy ascending
!
!
!
!
!
!
interface FastEthernet0/1
 switchport access vlan 11
 switchport mode access
!
interface FastEthernet0/2
 switchport access vlan 11
 switchport mode access
!
interface FastEthernet0/3
 switchport access vlan 11
 switchport mode access
!
interface FastEthernet0/4
 switchport access vlan 11
 switchport mode access
!
interface FastEthernet0/5
 switchport access vlan 21
 switchport mode access
!
interface FastEthernet0/6
 switchport access vlan 21
 switchport mode access
!
interface FastEthernet0/7
 switchport access vlan 21
 switchport mode access
!
interface FastEthernet0/8
 switchport access vlan 21
 switchport mode access
!
interface FastEthernet0/9
 switchport access vlan 31
 switchport mode access
!
interface FastEthernet0/10
 switchport access vlan 31
 switchport mode access
!
interface FastEthernet0/11
 switchport access vlan 31
 switchport mode access
!
interface FastEthernet0/12
 switchport access vlan 31
 switchport mode access
!
interface FastEthernet0/13
 switchport access vlan 41
 switchport mode access
!
interface FastEthernet0/14
 switchport access vlan 41
 switchport mode access
!
interface FastEthernet0/15
 switchport access vlan 41
 switchport mode access
!
interface FastEthernet0/16
 switchport access vlan 41
 switchport mode access
!
interface FastEthernet0/17
 switchport access vlan 53
 switchport mode access
!
interface FastEthernet0/18
 switchport access vlan 53
 switchport mode access
!
interface FastEthernet0/19
 switchport access vlan 53
 switchport mode access
!
interface FastEthernet0/20
 switchport access vlan 53
 switchport mode access
!
interface FastEthernet0/21
 switchport access vlan 61
 switchport mode access
!
interface FastEthernet0/22
 switchport access vlan 61
 switchport mode access
!
interface FastEthernet0/23
 switchport access vlan 61
 switchport mode access
!
interface FastEthernet0/24
 switchport access vlan 61
 switchport mode access
!
interface FastEthernet0/25
 switchport access vlan 71
 switchport mode access
!
interface FastEthernet0/26
 switchport access vlan 71
 switchport mode access
!
interface FastEthernet0/27
 switchport access vlan 71
 switchport mode access
!
interface FastEthernet0/28
 switchport access vlan 71
 switchport mode access
!
interface FastEthernet0/29
!
interface FastEthernet0/30
!
interface FastEthernet0/31
!
interface FastEthernet0/32
!
interface FastEthernet0/33
!
interface FastEthernet0/34
!
interface FastEthernet0/35
!
interface FastEthernet0/36
!
interface FastEthernet0/37
!
interface FastEthernet0/38
!
interface FastEthernet0/39
!
interface FastEthernet0/40
!
interface FastEthernet0/41
!
interface FastEthernet0/42
!
interface FastEthernet0/43
!
interface FastEthernet0/44
!
interface FastEthernet0/45
!
interface FastEthernet0/46
!
interface FastEthernet0/47
 switchport trunk allowed vlan 11,21,31,41,53,61,71
 switchport mode trunk
!
interface FastEthernet0/48
!
interface GigabitEthernet0/1
!
interface GigabitEthernet0/2
!
interface Vlan1
 no ip address
 shutdown
!
ip http server
ip http secure-server
!
!
line con 0
line vty 0 4
 login
line vty 5 15
 login
!
end
```