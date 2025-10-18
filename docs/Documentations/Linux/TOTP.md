# SSH sécurisé via TOTP
---
## 1. Mise à jour du système

Avant de commencer, assurez-vous que votre système est à jour :

```bash
sudo apt update && sudo apt upgrade -y
```

## 2. Nettoyer l’ancienne configuration

Supprimez l’ancien fichier de secrets s’il existe :

```bash
sudo rm -f /etc/security/users.oath
```

## 3. Installer les outils nécessaires

```bash
sudo apt install -y libpam-oath oathtool openssh-server qrencode
```

**Description des paquets :**

* **libpam-oath** : permet l’authentification OTP via PAM
* **oathtool** : génère et vérifie les codes OTP
* **qrencode** : crée un QR code pour l’application d’authentification

!!! info "Information"
    Qrencode doit être utilisé sur une machine possédant une interface graphique. Pas forcément le serveur.

## 4. Créer un nouveau secret pour l’utilisateur "etudiant"

```bash
sudo -i
openssl rand -hex 20 > /etc/security/users.oath
echo "HOTP/T30/6 etudiant - $(cat /etc/security/users.oath)" > /etc/security/users.oath
```

## 5. Sécuriser le fichier de secrets

```bash
sudo chown root:root /etc/security/users.oath
sudo chmod 600 /etc/security/users.oath
```

## 6. Configurer PAM pour SSH

Éditez le fichier PAM de SSH :

```bash
sudo nano /etc/pam.d/sshd
```

Ajoutez ou modifiez les lignes suivantes :

```
#@include common-auth

auth required pam_unix.so nullok_secure
auth required pam_oath.so usersfile=/etc/security/users.oath window=30 digits=6
```
!!! info "Bastion"
    Pour **exclure un utilisateur** du système TOTP, ajoutez cette ligne avant les précédentes :

```
auth [success=1 default=ignore] pam_succeed_if.so user = adminbastion
```
!!! danger "Sécurité"
    Cet utilisateur pourra donc se connecter sans TOTP, il faut donc le sécurisé avec un mot de passe fort ou une clef SSH.

## 7. Configurer SSH pour utiliser TOTP

Éditez le fichier de configuration SSH :

```bash
sudo nano /etc/ssh/sshd_config
```

Modifiez ou ajoutez ces lignes :

```
#KbdInteractiveAuthentication no

ChallengeResponseAuthentication yes
UsePAM yes
```

Redémarrez ensuite le service SSH :

```bash
sudo systemctl restart ssh
```

## 8. Récupérer la clé OTP pour l’application

```bash
grep etudiant /etc/security/users.oath | awk '{print $4}' | oathtool -v -d 6 -
```

* Cette commande permet de vérifier que le code OTP fonctionne correctement.

## 9. Générer un QR code à scanner

Remplacez `TA_CLE_BASE32` par la clé affichée précédemment :

```bash
qrencode -o etudiant.png "otpauth://totp/etudiant@IP_DU_SERVEUR?secret=TA_CLE_BASE32"
```

* Scannez le QR code avec une application OTP comme **Google Authenticator** ou **FreeOTP**.

## 10. Vérifier la synchronisation de l’heure

```bash
timedatectl
sudo apt install -y systemd-timesyncd
sudo systemctl enable --now systemd-timesyncd
```

!!! warning "Désyncronisation"
    Les OTP dépendent de l’heure : vérifiez que le serveur et votre téléphone sont bien synchronisés.

## 11. Tester la connexion SSH

```bash
ssh etudiant@192.168.1.90
```

* Vous serez invité à saisir votre mot de passe **puis le code OTP** affiché dans votre application d’authentification.