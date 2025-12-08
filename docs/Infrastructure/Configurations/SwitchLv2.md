# Configuration du SwitchLv2
```
version 15.0
no service pad
service timestamps debug datetime msec
service timestamps log datetime msec
no service password-encryption
!
hostname SwitchLv2CUB
!
boot-start-marker
boot-end-marker
!
!
username etudiant privilege 15 secret 4 XJs1kDT984d4u/RcgM1oWYsonq4S11mG8xa9fZJ0J8Q
no aaa new-model
system mtu routing 1500
!
!
ip domain-name btssio3.lan
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
  69666963 6174652D 32373136 36383536 3936301E 170D3933 30333031 30303037 
  35345A17 0D323030 31303130 30303030 305A3031 312F302D 06035504 03132649 
  4F532D53 656C662D 5369676E 65642D43 65727469 66696361 74652D32 37313636 
  38353639 3630819F 300D0609 2A864886 F70D0101 01050003 818D0030 81890281 
  81009FC2 CAEFDDC6 5024C601 7CFA798A D13ED553 E4397D52 065857C9 3DA48DEE 
  BBF9DC98 CB55255B 268D3F89 E691F200 C2694FB9 028927BC 8F997AC9 F9FA30B3 
  06F7D7A2 3493D72C BCDEEC1F CF214B1A 809F36C6 9599B223 38170A4D 6A01E02C 
  1832117D ED79F3BE 52A8F487 AC1F826F E4081FC7 0A60D99E 3358F0CD B080F425 
  43930203 010001A3 53305130 0F060355 1D130101 FF040530 030101FF 301F0603 
  551D2304 18301680 14ED765D CE7B7A30 F7D2FA7A 017C9C64 042B5029 45301D06 
  03551D0E 04160414 ED765DCE 7B7A30F7 D2FA7A01 7C9C6404 2B502945 300D0609 
  2A864886 F70D0101 05050003 81810031 CFD2019A 5999BDB6 60770031 65BB4E7A 
  73DE6E46 FB3619BC 608AFA7C FF13E2D9 0DE7234F DB7AA269 23612F13 213F54CA 
  08870CD6 C5ACF23D A64370BA 21CAAA18 45D220A3 E5E56522 A9F1A748 11408C31 
  B32C4D56 38E69882 9A3177AC AC57E423 ECBD2B28 EE41AD9A C28CA2F9 E54D0F0C 
  9E195FDE 01EA4EB7 DE454F69 9688E3
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
ip ssh version 2
!
!
!
!
!
interface FastEthernet0/1
 switchport access vlan 10
 switchport mode access
!
interface FastEthernet0/2
 switchport access vlan 10
 switchport mode access
!
interface FastEthernet0/3
 switchport access vlan 10
 switchport mode access
!
interface FastEthernet0/4
 switchport access vlan 10
 switchport mode access
!
interface FastEthernet0/5
 switchport access vlan 10
 switchport mode access
!
interface FastEthernet0/6
 switchport access vlan 10
 switchport mode access
!
interface FastEthernet0/7
 switchport access vlan 10
 switchport mode access
!
interface FastEthernet0/8
 switchport access vlan 10
 switchport mode access
!
interface FastEthernet0/9
 switchport access vlan 10
 switchport mode access
!
interface FastEthernet0/10
 switchport access vlan 10
 switchport mode access
!
interface FastEthernet0/11
 switchport access vlan 10
 switchport mode access
!
interface FastEthernet0/12
 switchport access vlan 10
 switchport mode access
!
interface FastEthernet0/13
!
interface FastEthernet0/14
!
interface FastEthernet0/15
!
interface FastEthernet0/16
!
interface FastEthernet0/17
!
interface FastEthernet0/18
!
interface FastEthernet0/19
!
interface FastEthernet0/20
!
interface FastEthernet0/21
!
interface FastEthernet0/22
!
interface FastEthernet0/23
!
interface FastEthernet0/24
!
interface FastEthernet0/25
 switchport access vlan 20
 switchport mode access
!
interface FastEthernet0/26
 switchport access vlan 20
 switchport mode access
!
interface FastEthernet0/27
 switchport access vlan 20
 switchport mode access
!
interface FastEthernet0/28
 switchport access vlan 20
 switchport mode access
!
interface FastEthernet0/29
 switchport access vlan 20
 switchport mode access
!
interface FastEthernet0/30
 switchport access vlan 20
 switchport mode access
!
interface FastEthernet0/31
 switchport access vlan 20
 switchport mode access
!
interface FastEthernet0/32
 switchport access vlan 20
 switchport mode access
!
interface FastEthernet0/33
 switchport access vlan 20
 switchport mode access
!
interface FastEthernet0/34
 switchport access vlan 20
 switchport mode access
!
interface FastEthernet0/35
 switchport access vlan 20
 switchport mode access
!
interface FastEthernet0/36
 switchport access vlan 20
 switchport mode access
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
 switchport trunk allowed vlan 10,20,53
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
interface Vlan20
 ip address 192.168.3.205 255.255.255.240
!
ip http server
ip http secure-server
!
!
line con 0
line vty 0 4
 login local
 transport input ssh
line vty 5 15
 login
!
end
```