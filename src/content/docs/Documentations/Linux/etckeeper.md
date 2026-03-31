# Versionning de `/etc` avec Etckeeper
---
## 1. Mettre à jour le système

Avant toute installation, assurez-vous que le système est à jour :

```bash
sudo apt update && sudo apt upgrade -y
```

## 2. Installer Etckeeper

```bash
sudo apt install -y etckeeper
etckeeper --version
```

* Vérifie que **etckeeper** est installé correctement et affiche sa version.

## 3. Configurer Etckeeper

Éditez le fichier de configuration :

```bash
sudo nano /etc/etckeeper/etckeeper.conf
```

* Assurez-vous que Git est utilisé :

```
VCS="git"
```

* Pour conserver les métadonnées des fichiers :

```
PRESERVE_METADATA="yes"
```

!!! info "Important"
    À chaque modification apportée dans `/etc`, exécutez :

```bash
sudo etckeeper commit "Description du changement"
```

* Cela enregistre automatiquement vos changements dans le dépôt Git local.

## 4. Initialiser Git pour `/etc`

```bash
sudo etckeeper init
sudo etckeeper commit "Commit initial pour /etc"
```

* Crée un dépôt Git dans `/etc` et effectue un premier commit pour sauvegarder l’état initial.

---

## Exemples d’utilisation

### a) Suivi automatique des changements avec APT

Lors de l’installation ou suppression de paquets, Etckeeper peut suivre les modifications dans `/etc`. Exemple :

```bash
sudo apt install -y nginx
cd /etc
sudo git log --oneline
```

* Après chaque installation ou modification manuelle, utilisez :

```bash
sudo etckeeper commit "Installation de nginx"
```

### b) Sauvegarde de `/etc`

Pour créer une sauvegarde complète :

```bash
sudo tar czf etc-backup.tar.gz /etc
```

### c) Restauration de `/etc`

Pour restaurer à partir d’une sauvegarde :

```bash
sudo tar xzf etc-backup.tar.gz -C /
cd /etc
sudo git log --oneline
```

* Permet de revenir à un état précédent ou de vérifier l’historique des modifications.
