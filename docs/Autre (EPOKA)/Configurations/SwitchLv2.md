# Configuration du SwitchLv2
```
version 15.0
no service pad
service timestamps debug datetime msec
service timestamps log datetime msec
no service password-encryption
!
hostname SwitchLv2
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
  34385A17 0D323030 31303130 30303030 305A3031 312F302D 06035504 03132649 
  4F532D53 656C662D 5369676E 65642D43 65727469 66696361 74652D32 37313636 
  38353639 3630819F 300D0609 2A864886 F70D0101 01050003 818D0030 81890281 
  8100A5BE BC9C7A2C F023E3F6 4B2FC955 1ADBF64C 5B9EACC7 2614C320 F198FCD0 
  271B37E8 08B7B0DA 6C5481DB F7AFE573 EC451B6B 2642250F 812D28B2 1F4E08B2 
  9F4FC235 4AD59CED 9FFC39DF 1E197826 92264D5E 80F52AB7 9490474F F232DFB4 
  1307FD6C 0C667959 9CB3626D F32683C4 2641EB39 9B5F5736 E9934B31 C1BA7744 
  CD590203 010001A3 53305130 0F060355 1D130101 FF040530 030101FF 301F0603 
  551D2304 18301680 14CCDD8A 55537FA0 BDEC858C 9B9893AC 4F86A417 53301D06 
  03551D0E 04160414 CCDD8A55 537FA0BD EC858C9B 9893AC4F 86A41753 300D0609 
  2A864886 F70D0101 05050003 81810097 D94FA8D3 E5CDB04F CC0337DF C8715DD1 
  17FADA43 D33ED0C6 ACC4C0A8 6087F25E 6ECAE041 FBEEB08C 0A5A15A9 710F7D66 
  565F9696 38694B48 7FE3422C D063190E 66517F0D 6D5382F4 1EBE2729 12715736 
  AE24010B 903907BC 7F9763C7 42F7C361 3AE17A7F 0EB21D4A EB07C82B 5D8073A5 
  AB04F657 CB2EBF20 D1AFC224 93F382
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
 switchpor
*Mar  2 21:17:55t mode access
!
 --More-- .264: %LINEPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/47, changed state to down
*Mar  2 21:17:56.271: %LINK-3-UPDOWN: Interface FastEthernet0/47, changed stainterface FastEthernet0/15
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