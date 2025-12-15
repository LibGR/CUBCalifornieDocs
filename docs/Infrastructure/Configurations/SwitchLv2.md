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
  35335A17 0D323030 31303130 30303030 305A3031 312F302D 06035504 03132649 
  4F532D53 656C662D 5369676E 65642D43 65727469 66696361 74652D32 37313636 
  38353639 3630819F 300D0609 2A864886 F70D0101 01050003 818D0030 81890281 
  8100CF29 CB40F1D7 B331A05A F2D48C8A F15F47F4 F69DA83A FEF4D3B6 F841C78A 
  A6AC1DCD 196C715D F66315AE C38921E3 E29DBAB2 6D4DCDAF 9624119C 4E716C4F 
  D20C5420 35F3AA4D 3273E92E 7C6D1D66 288AC0F0 1E67F106 D10FCC54 B0654D68 
  84DE9D4B F36562F4 675A8B22 EA264C44 6CF3B29C 81D0517E 01C5B365 80F67D67 
  08CB0203 010001A3 53305130 0F060355 1D130101 FF040530 030101FF 301F0603 
  551D2304 18301680 14BB539A 87CA3B3A B9AA22BA FAF52F13 A5892F6C 39301D06 
  03551D0E 04160414 BB539A87 CA3B3AB9 AA22BAFA F52F13A5 892F6C39 300D0609 
  2A864886 F70D0101 05050003 8181006A 686512CC 6B3390C6 67B85AB7 28DD905D 
  64B28238 97BDDE5B BACD3769 B52F1EE5 E5108733 E5E39CA4 C326D2CF DEA8E122 
  A563E707 ADFCE173 55B2265C CAD66114 E0C085D2 727B4DA1 19CC0539 247174E7 
  479CE173 9DBED2D1 9070BCAB 77C0D83E 40F51BF4 0CEB4823 EB4D716F 416C574F 
  C72FB0C7 11EDB3F9 DBF92090 382667
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