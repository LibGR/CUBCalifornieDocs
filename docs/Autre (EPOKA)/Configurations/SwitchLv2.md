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
interface Vlan53
 ip address 172.16.53.251 255.255.255.0
!
ip http server
ip http secure-server
snmp-server group ReadOnly v3 priv read ReadOnly-View 
snmp-server view ReadOnly-View iso included
snmp-server location Agence CL CUB
snmp-server contact postmaster@californie.cub.sioplc.fr
!
!         
line con 0
line vty 0 4
 login
line vty 5 15
 login
!
!
!PARTIE A SAUVEGARDER A LA BASCULE
!PARTIE A SAUVEGARDER A LA BASCULE
!PARTIE A SAUVEGARDER A LA BASCULE
!PARTIE A SAUVEGARDER A LA BASCULE
!PARTIE A SAUVEGARDER A LA BASCULE
!PARTIE A SAUVEGARDER A LA BASCULE
!PARTIE A SAUVEGARDER A LA BASCULE
!PARTIE A SAUVEGARDER A LA BASCULE
!PARTIE A SAUVEGARDER A LA BASCULE
!PARTIE A SAUVEGARDER A LA BASCULE
!
!
snmp-server user zabbix ReadOnly v3 auth sha etudiant_007 priv aes 128 azerty2QWERTY
!
!
do write
!
end
```