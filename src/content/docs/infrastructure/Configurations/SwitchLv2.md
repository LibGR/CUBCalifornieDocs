---
title: "Configuration du SwitchLv2"
description: "Configuration du SwitchLv2"
---

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
 certificate self-signed 01 nvram:IOS-Self-Sig#E.cer
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
 switchport port-security maximum 10
 switchport port-security
 switchport port-security violation restrict
 switchport port-security mac-address sticky
 switchport port-security mac-address sticky 0023.910a.a70f
 switchport port-security mac-address sticky 0afb.077c.8c3f
 switchport port-security mac-address sticky 1ab8.ee1f.6970
 switchport port-security mac-address sticky 6a9a.4635.d5be
 switchport port-security mac-address sticky 6c1f.f715.aac1
 switchport port-security mac-address sticky 8888.bf7e.8899
 switchport port-security mac-address sticky d2fc.1e39.9128
 switchport port-security mac-address sticky e26f.8e0f.41d1
 switchport port-security mac-address sticky e4de.a578.1d1e
 switchport port-security mac-address sticky ea0f.c97f.696f
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
 switchport mode trunk
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
!
monitor session 1 source interface Fa0/2 , Fa0/47
monitor session 1 destination interface Fa0/13
end
```
