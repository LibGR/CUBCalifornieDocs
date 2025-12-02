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
  69666963 6174652D 32373136 36383536 3936301E 170D3933 30333031 30303033 
  35315A17 0D323030 31303130 30303030 305A3031 312F302D 06035504 03132649 
  4F532D53 656C662D 5369676E 65642D43 65727469 66696361 74652D32 37313636 
  38353639 3630819F 300D0609 2A864886 F70D0101 01050003 818D0030 81890281 
  8100C044 BF2D9591 65E8C028 7FB691D5 FF719862 62ADEBB8 7ED0CD3C 12132BF9 
  F745B2C0 DD0B0EC5 171B4C4B 28F755C7 DB7491CE 941256F1 271EBC4A 0C8BCF4C 
  A482B2EF 623D784C AEF1AD8A 2F487D27 F83F1CF9 D5A7FE41 F7E262C7 5AD04B5C 
  09A10134 12F5641D C975C5C5 C4AB1834 05EC8E6A 97869BDE CE1F4230 E8487D61 
  458B0203 010001A3 53305130 0F060355 1D130101 FF040530 030101FF 301F0603 
  551D2304 18301680 14FD5DE3 35B504EF B1C79B79 6FC6DD1F B603C95C D9301D06 
  03551D0E 04160414 FD5DE335 B504EFB1 C79B796F C6DD1FB6 03C95CD9 300D0609 
  2A864886 F70D0101 05050003 818100B9 DB2F1657 BD45479A B73D91F6 A27A6A19 
  80962A86 AA89327D DD6CF777 62BA0370 CCE024DB 49CB4CB4 1836E27F 34B2B317 
  C221FC83 11BCC742 40BA12EB A52DDC10 B4F1F223 A519B33F 91C11E40 59CFE3CB 
  91B44A56 FA1B0394 C56AF21F F08D01C8 6A6830C0 B4036269 86C5B43B 96F02899 
  0E7D25F1 2E3B93A2 405B53D0 4A7E8C
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