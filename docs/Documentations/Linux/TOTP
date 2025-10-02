# TOTP ETCKEEPER DNS
## 1\. Mise en place de TOTP (SSH avec OTP sur Debian 12)

### Réinstallation complète

1.  Nettoyage de l’ancienne configuration

```
sudo rm -f /etc/security/users.oath
```

2.  Installation des paquets nécessaires

```
sudo apt update
sudo apt install -y libpam-oath oathtool openssh-server
```

3.  Génération d’un nouveau secret

```
sudo -i
KEY=$(openssl rand -hex 20)
echo "HOTP/T30/6 etudiant - ${KEY}" > /etc/security/users.oath
```

4.  Vérification et sécurisation

```
cat /etc/security/users.oath
chown root:root /etc/security/users.oath
chmod 600 /etc/security/users.oath
```

5.  Configuration de PAM

```
sudo nano /etc/pam.d/sshd
```

Ajouter/commenter :

```
#@include common-auth

auth required pam_unix.so nullok_secure
auth required pam_oath.so usersfile=/etc/security/users.oath window=30 digits=6
```
Exclure un utilisateur de TOTP
```
auth [success=1 default=ignore] pam_succeed_if.so user = [UTILISATEUR]
```

6.  Configuration SSH

```
sudo nano /etc/ssh/sshd_config
```

Ajouter/commenter :

```
#KbdInteractiveAuthentication no

ChallengeResponseAuthentication yes
UsePAM yes
```

Puis redémarrer :

```
sudo systemctl restart ssh
```

7.  Récupération de la clé pour l’application OTP

```
HEX=$(grep etudiant /etc/security/users.oath | awk '{print $4}')
oathtool -v -d 6 $HEX
```

8.  Génération du QR code

```
qrencode -o etudiant.png 'otpauth://totp/etudiant@192.168.1.90?secret=TA_CLE_BASE32'
```

9.  Vérification de la synchronisation NTP

```
timedatectl
sudo apt install systemd-timesyncd
sudo systemctl enable --now systemd-timesyncd
```

10.  Test de connexion

```
ssh etudiant@192.168.1.90
```

Fonctionne

* * *

## 2\. Gestion de /etc avec etckeeper

1.  Installation

```
sudo apt install etckeeper
etckeeper --version
```

2.  Initialisation Git

```
sudo etckeeper init
sudo etckeeper commit "Commit initial pour /etc"
```

3.  Configuration

```
sudoedit /etc/etckeeper/etckeeper.conf
```

Vérifier :

```
VCS="git"
```

4.  Intégration avec APT

```
sudo apt install nginx
cd /etc
sudo git log
```

5.  Gestion des métadonnées

```
PRESERVE_METADATA="yes"
```

6.  Sauvegarde et restauration

```
sudo tar czf etc-backup.tar.gz /etc
sudo tar xzf etc-backup.tar.gz -C /
cd /etc
sudo git log --oneline
```

* * *

## 3\. Mise en place d’Unbound (DNS récursif)

1.  Installation

```
sudo apt install unbound
```

2.  Création d’une configuration personnalisée

```
sudo nano /etc/unbound/unbound.conf.d/cub.conf
```

Contenu :

```
server:
    interface: 192.168.3.61
    interface: 127.0.0.1
    access-control: 192.168.3.0/25 allow
    access-control: 192.168.3.128/26 allow
    access-control: 192.168.3.192/28 allow
    access-control: 127.0.0.0/8 allow
    access-control: 0.0.0.0/0 refuse
    hide-version: yes
    hide-identity: yes
    do-ip4: yes
    verbosity: 3
```

   3. Redémarrage du service

```
sudo systemctl restart unbound
```
