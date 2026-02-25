# Serveur DNS esclave faisant autorité

**Agence Californie – ns1.californie.cub.sioplc.fr**

---

## Attention

Puisque vous allez être amené à modifier des fichiers de configuration présents dans le dossier `/etc`, vous devez utiliser **etckeeper** pour assurer le versioning.

---

# 1. Vérifications préalables

## Mise à jour du serveur

```bash
sudo apt update && sudo apt upgrade
```

## Installation du service de journalisation

Sur Debian 12, installation de **rsyslog** afin de disposer de fichiers de logs exploitables dans `/var/log`.

```bash
sudo apt install rsyslog
```

## Installation de Bind9 et des outils DNS

```bash
sudo apt install bind9 dnsutils
```

---

# 2. Configuration réseau du serveur esclave

Le serveur esclave **ns1** aura l’adresse IP : **172.16.3.11**

```bash
sudoedit /etc/network/interfaces
```

```bash
# This file describes the network interfaces available on your system

source /etc/network/interfaces.d/*

# Loopback
auto lo
iface lo inet loopback

# Interface principale
allow-hotplug ens192
auto ens192
iface ens192 inet static
address 172.16.3.11
netmask 255.255.255.0
gateway 172.16.3.253
```

---

# 3. Définir les serveurs DNS récursifs

Le serveur faisant autorité ne doit pas utiliser un résolveur interne.
On privilégie des résolveurs publics.

```bash
sudoedit /etc/resolv.conf
```

```bash
nameserver 9.9.9.9
nameserver 1.1.1.1
```

---

# 4. Appliquer les modifications réseau

```bash
sudo systemctl restart networking
```

---

# 5. Configuration du nom de la machine

## `/etc/hostname`

```bash
sudoedit /etc/hostname
```

```bash
ns1
```

## `/etc/hosts`

```bash
sudoedit /etc/hosts
```

```bash
127.0.0.1   localhost
127.0.1.1   ns1.californie.cub.sioplc.fr   ns1

# IPv6
::1     localhost ip6-localhost ip6-loopback
ff02::1 ip6-allnodes
ff02::2 ip6-allrouters
```

## Redémarrage du serveur

```bash
sudo shutdown -r now
```

---

# 6. Configuration de Bind9 en serveur esclave

Le serveur maître est :

* **ns0.californie.cub.sioplc.fr**
* IP : **172.16.3.10**

Le serveur esclave :

* **ns1.californie.cub.sioplc.fr**
* IP : **172.16.3.11**

---

## Déclaration de la zone dans `/etc/bind/named.conf.local`

```bash
sudoedit /etc/bind/named.conf.local
```

```bash
zone "californie.cub.sioplc.fr" {
    type slave;
    masters { 172.16.3.10; };
    file "/var/cache/bind/db.californie.cub.sioplc.fr";
};
```

### Explication

* `type slave` → Le serveur est esclave.
* `masters` → IP du serveur maître autorisé à effectuer le transfert.
* `file` → Fichier local où sera stockée la copie de la zone.

---

## Création du fichier de zone

```bash
sudo touch /var/cache/bind/db.californie.cub.sioplc.fr
sudo chown bind:bind /var/cache/bind/db.californie.cub.sioplc.fr
```

⚠️ Le contenu sera automatiquement rempli lors du transfert de zone.

---

# 7. Configuration globale (vérification)

Vérifier que `/etc/bind/named.conf` contient bien :

```bash
include "/etc/bind/named.conf.options";
include "/etc/bind/named.conf.local";
include "/etc/bind/named.conf.default-zones";
include "/etc/bind/named.conf.log";
```

---

## `/etc/bind/named.conf.options`

Pour un serveur faisant autorité uniquement :

```bash
options {
    directory "/var/cache/bind";

    listen-on port 53 { 127.0.0.1; 172.16.3.11; };

    recursion no;

    version none;
};
```

---

# 8. Mise en place de la journalisation

## Création du fichier `/etc/bind/named.conf.log`

```bash
sudoedit /etc/bind/named.conf.log
```

```bash
logging {
    channel bind_log {
        file "/var/log/bind.log" versions 3 size 100m;
        severity info;
        print-category yes;
        print-severity yes;
        print-time yes;
    };

    category default { bind_log; };
};
```

## Création du fichier log

```bash
sudo touch /var/log/bind.log
sudo chown bind:bind /var/log/bind.log
```

---

# 9. Configuration AppArmor

Autoriser Bind à écrire dans le fichier log.

```bash
sudoedit /etc/apparmor.d/usr.sbin.named
```

Ajouter :

```bash
/var/log/bind.log rw,
```

Recharger la configuration :

```bash
sudo apparmor_parser -r /etc/apparmor.d/usr.sbin.named
sudo systemctl restart apparmor
```

---

# 10. Vérifications

## Vérification de la syntaxe

```bash
sudo named-checkconf -z
```

## Redémarrage du service

```bash
sudo systemctl restart bind9
sudo systemctl status bind9
```

---

# 11. Vérification du transfert de zone

Sur le serveur esclave :

```bash
sudo tail -f /var/log/bind.log
```

Vous devez voir un message indiquant un **zone transfer completed**.

---

## Test DNS

```bash
dig @localhost californie.cub.sioplc.fr
dig @localhost www.californie.cub.sioplc.fr
```

Depuis une autre machine :

```bash
dig @172.16.3.11 www.californie.cub.sioplc.fr
```