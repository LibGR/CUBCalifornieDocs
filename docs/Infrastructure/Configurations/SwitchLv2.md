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
  69666963 6174652D 32373136 36383536 3936301E 170D3933 30333031 30303032 
  30345A17 0D323030 31303130 30303030 305A3031 312F302D 06035504 03132649 
  4F532D53 656C662D 5369676E 65642D43 65727469 66696361 74652D32 37313636 
  38353639 3630819F 300D0609 2A864886 F70D0101 01050003 818D0030 81890281 
  8100D6C3 F9346844 2B10E7B6 16AEF0D8 578FB95B 08C97A43 72929CCE 5F20AC0D 
  6599DC77 0F58F2F6 C667F505 753BBABF 3A581F7B 15C6281C 2B8D5814 92FDE995 
  93723D59 95BA9811 6A4063FD C799E303 B231EAA2 B79EFA8A 6B89E67F 01A65C9F 
  EF37149B B3D589FA 80AE796F 910D0F68 27A0EDC8 CBFC15BC EF7818BD 6BE31060 
  5CA30203 010001A3 53305130 0F060355 1D130101 FF040530 030101FF 301F0603 
  551D2304 18301680 14C647DC CBB1218D 406E1F45 98DB68DE F57379B9 AC301D06 
  03551D0E 04160414 C647DCCB B1218D40 6E1F4598 DB68DEF5 7379B9AC 300D0609 
  2A864886 F70D0101 05050003 8181000F F16C1F1C C27E7FEE A7F7A04A E90DED47 
  048543ED BE42681B 6DA0403E F2EDB195 716A91F6 A718E50E 052C86EF 81B65BC9 
  101DDF57 4A1E5853 D7C4727F C67CC847 86B211AB 2A68DEE2 31D108BF E4D8B36A 
  52074E7B F92D9E5C 4D268070 C3F97EFB 6657F05E 294F779D E5E837BF 5AE434BC 
  A8CCC463 2886A6FF 008A15D4 847C18
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