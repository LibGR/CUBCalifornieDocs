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
  69666963 6174652D 32373136 36383536 3936301E 170D3933 30333031 30303038 
  32345A17 0D323030 31303130 30303030 305A3031 312F302D 06035504 03132649 
  4F532D53 656C662D 5369676E 65642D43 65727469 66696361 74652D32 37313636 
  38353639 3630819F 300D0609 2A864886 F70D0101 01050003 818D0030 81890281 
  8100E71E F68EA33E CF105AF2 E23FC7ED 5EF63332 74BD820D BFCD5518 0109DF6E 
  B707C498 AF8E8EE8 E8F42C44 719693EB 4CDF2A6F 576D0B76 25846AFA 408352F2 
  6C8268FF AB5EEE7A 24C81502 113BE4B8 D0C53AAB D0257975 5511942A 457DFDD6 
  1EEC03EA CE6A8719 D8F31D95 599914BB 2F07F82E 3C029E85 3F9A58DD 6B287745 
  E5FD0203 010001A3 53305130 0F060355 1D130101 FF040530 030101FF 301F0603 
  551D2304 18301680 14819221 5D1178B7 17EA6B08 63F62A73 EEBA20A7 9B301D06 
  03551D0E 04160414 8192215D 1178B717 EA6B0863 F62A73EE BA20A79B 300D0609 
  2A864886 F70D0101 05050003 8181000F D42437D8 82E328B0 B7F5C08F 68C19B29 
  207201FD FDA1827E 85E09D60 20EF2F30 D5D43098 B976D522 8ABCAC6F 46961765 
  7792A65A B7F34FB2 C896A84F 5452BD79 66F2B8E6 DF22E4A1 E6DD2D8E 9F3E0EEA 
  543020C9 D78E2845 1CA011B0 4EC2E07E F81F6CEE 1811B5F3 5E504CFF E7F113B0 
  9E1A3260 87A357C3 0150CCFB 1DFD3E
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