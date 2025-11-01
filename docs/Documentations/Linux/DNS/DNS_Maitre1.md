# III - Serveur DNS maître faisant autorité

## Attention

Puisque vous allez être amené à modifier des fichiers de configuration présents dans le dossier `/etc`, vous devez utiliser **etckeeper** pour faire du versioning.

---

## 1. Vérification préalable

### Mettez à jour votre serveur

```bash
sudo apt update && sudo apt upgrade

```

### Installez le service Bind 9 et les outils diagnostics DNS

```bash
sudo apt install bind9 dnsutils
```

---

## 2. Définir les paramètres réseaux du serveur

```bash
sudoedit /etc/network/interfaces
```

```bash
# This file describes the network interfaces available on your system
# and how to activate them. For more information, see interfaces(5).

source /etc/network/interfaces.d/*

# The loopback network interface
auto lo
iface lo inet loopback

# The primary network interface
allow-hotplug ens192
auto ens192
iface ens192 inet static
address 192.36.3.10
netmask 255.255.255.0
gateway 192.36.3.253
```

---

## 3. Définir le serveur DNS récursif à utiliser

```bash
sudoedit /etc/resolv.conf
```

```bash
nameserver 192.168.3.10
nameserver 9.9.9.9
```


## 4. Prendre en compte les modifications des paramètres réseaux

```bash
sudo systemctl restart networking
```

---

## 5. Configurer correctement les fichiers /etc/hostname et /etc/hosts

### `/etc/hostname`

```bash
sudoedit /etc/hostname
```

```bash
ns0
```

### `/etc/hosts`

```bash
sudoedit /etc/hosts
```

```bash
127.0.0.1   localhost
127.0.1.1   ns0.californie.cub.sioplc.fr   ns0

# The following lines are desirable for IPv6 capable hosts
::1     localhost ip6-localhost ip6-loopback
ff02::1 ip6-allnodes
ff02::2 ip6-allrouters
```

### Redémarrez le serveur pour appliquer le changement de nom

```bash
sudo shutdown -r now
```

---

## 6. Principes généraux concernant Bind9 et le service DNS

- Créer dans le répertoire `/var/named/` ou `/var/cache/bind/` les zones adéquates à l’aide d’un fichier `db.xxxxxx` (ici `db.californie.cub.sioplc.fr`).
- Initialiser les zones dans `/etc/bind/named.conf.local`.
- Gérer les options globales dans `/etc/bind/named.conf.options`.
- Toujours tester la syntaxe avant redémarrage.

### Commandes utiles

```bash
dig
host
nslookup  # (Windows)
named-checkconf
named-checkzone
systemctl stop|start|restart|reload|status bind9
```

---

## 7. Exemple de configuration d'un serveur DNS maître faisant autorité

### `/etc/bind/named.conf`

```bash
// This is the primary configuration file for the BIND DNS server named.
// If you are just adding zones, please do that in /etc/bind/named.conf.local

include "/etc/bind/named.conf.options";
include "/etc/bind/named.conf.local";
include "/etc/bind/named.conf.default-zones";

// Ajout du fichier de paramétrage de la journalisation du service BIND
include "/etc/bind/named.conf.log";
```

---

### `/etc/bind/named.conf.options`

```bash
options {
    directory "/var/cache/bind";

    listen-on port 53 { 127.0.0.1; 172.16.3.10; };

    recursion no;

    version none;
};
```

---

### `/etc/bind/named.conf.local`

```bash
zone "californie.cub.sioplc.fr" {
    type master;
    allow-transfer { 172.16.3.11; };
    file "/var/cache/bind/db.californie.cub.sioplc.fr";
};
```

---

### `/var/cache/bind/db.californie.cub.sioplc.fr`

```dns
$TTL 43200 ; 12 heures

californie.cub.sioplc.fr. IN SOA ns0.californie.cub.sioplc.fr. postmaster.californie.cub.sioplc.fr. (
    2025110101 ; Serial
    1D ; Refresh
    1H ; Retry
    1W ; Expire
    3H ) ; Negative Cache TTL

; Serveurs DNS faisant autorité sur la zone
californie.cub.sioplc.fr.  IN  NS  ns0.californie.cub.sioplc.fr.
californie.cub.sioplc.fr.  IN  NS  ns1.californie.cub.sioplc.fr.

; Correspondances nom ↔ IP
ns0     IN  A   172.16.3.10
ns1     IN  A   172.16.3.11
www     IN  A   172.16.3.2

; Alias (CNAME)
extranet IN  CNAME  www.californie.cub.sioplc.fr.
```

> Pensez à incrémenter le numéro de série à chaque modification.  
> Exemple : `2025110101`, `2025110102`, etc.

---

## 8. Mise en place d’une journalisation des évènements du service DNS

### `/etc/bind/named.conf.log`

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

Création du fichier de log :

```bash
sudo touch /var/log/bind.log
sudo chown bind:bind /var/log/bind.log
```

---

## 9. Sécurisation avec AppArmor

### Autoriser Bind9 à écrire dans le fichier de log

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

## 10. Vérification et redémarrage du service Bind9

### Vérification de la syntaxe

```bash
sudo named-checkconf
sudo named-checkzone californie.cub.sioplc.fr /var/cache/bind/db.californie.cub.sioplc.fr
```

### Redémarrage du service

```bash
sudo systemctl restart bind9
sudo systemctl status bind9
```

---

## 11. Tests DNS

### Avec `dig`

```bash
dig @localhost californie.cub.sioplc.fr
dig @localhost ns0.californie.cub.sioplc.fr
```

### Avec `host`

```bash
host www.californie.cub.sioplc.fr 127.0.0.1
```

---

Le Serveur DNS faisant autorité de l'agence Californie est désormais fonctionnel.