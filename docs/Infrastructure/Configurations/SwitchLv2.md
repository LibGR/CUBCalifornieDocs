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
  69666963 6174652D 32373136 36383536 3936301E 170D3933 30333031 30303031 
  35375A17 0D323030 31303130 30303030 305A3031 312F302D 06035504 03132649 
  4F532D53 656C662D 5369676E 65642D43 65727469 66696361 74652D32 37313636 
  38353639 3630819F 300D0609 2A864886 F70D0101 01050003 818D0030 81890281 
  8100CEB8 2C376EF4 4CB1DB0B 53D01E11 CD1F35CF 1596EB0F 13D18CBC 0CF2A818 
  2A3AA754 CE29F11C 00608FD4 7D88152F A97E7F47 585ABFDA 1404E05A A48E5932 
  8EF231AF B9FEE461 692B90DC 193861AC 23E384E8 3179DBB5 091395DE C02B7537 
  ECABA458 197A8C5A D3DD8EBE A4759A59 60617B95 63866190 37DD30E8 6A83117A 
  E6090203 010001A3 53305130 0F060355 1D130101 FF040530 030101FF 301F0603 
  551D2304 18301680 14E21EA3 0FB21265 C7FA5886 B3B5EC1C D0A2F7CD 2B301D06 
  03551D0E 04160414 E21EA30F B21265C7 FA5886B3 B5EC1CD0 A2F7CD2B 300D0609 
  2A864886 F70D0101 05050003 8181000F EC60AF2F C70CC1B8 4355474C 2BABF200 
  9CD78D5E 1F7B8D46 94006029 E2D57B73 7A4CC99B F6851042 BD1284FC C82C7825 
  8E81DA6B 35B06720 76686B30 DBF90DF8 88A22376 D1C37922 450BEB90 C9B1DD75 
  A14365DA 06BDEAFD B68988F5 1A5AD5F4 A3869128 D78631E9 7C44DD0B 5CC9F667 
  BF4D69A1 C81A8570 E05BD1D2 E9E2DC
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