# Bastion d’administration avec Apache Guacamole

---

## Attention

Puisque vous allez modifier des fichiers systèmes (`/etc`), il est fortement recommandé d’utiliser un système de versioning comme **etckeeper** afin d’assurer le suivi des modifications.

---

# 1. Installation d’Apache Guacamole Server

## Mise à jour du système

```bash
sudo apt update && sudo apt upgrade
```

---

## Installation des dépendances

```bash
sudo apt-get install build-essential libcairo2-dev libjpeg62-turbo-dev \
libpng-dev libtool-bin uuid-dev libossp-uuid-dev libavcodec-dev \
libavformat-dev libavutil-dev libswscale-dev freerdp2-dev \
libpango1.0-dev libssh2-1-dev libtelnet-dev libvncserver-dev \
libwebsockets-dev libpulse-dev libssl-dev libvorbis-dev libwebp-dev
```

---

## Téléchargement de la version 1.5.5

```bash
cd /tmp
wget https://downloads.apache.org/guacamole/1.5.5/source/guacamole-server-1.5.5.tar.gz
tar -xzf guacamole-server-1.5.5.tar.gz
cd guacamole-server-1.5.5/
```

---

## Configuration avant compilation

```bash
sudo ./configure --with-systemd-dir=/etc/systemd/system/
```

⚠️ Vérifier que les dépendances principales sont en **"yes"**

En cas d’erreur `guacenc_video_alloc` :

```bash
sudo ./configure --with-systemd-dir=/etc/systemd/system/ --disable-guacenc
```

---

## Compilation et installation

```bash
sudo make
sudo make install
sudo ldconfig
```

---

## Activation du service

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now guacd
sudo systemctl status guacd
```

---

# 2. Création de l’arborescence Guacamole

```bash
sudo mkdir -p /etc/guacamole/{extensions,lib}
```

---

# 3. Installation du Client Web (Tomcat 9)

⚠️ Debian 12 propose Tomcat 10 par défaut, incompatible.

Ajouter le dépôt Debian 11 :

```bash
sudo nano /etc/apt/sources.list.d/bullseye.list
```

Ajouter :

```
deb http://deb.debian.org/debian/ bullseye main
```

Mettre à jour :

```bash
sudo apt update
```

Installer Tomcat 9 :

```bash
sudo apt install tomcat9 tomcat9-admin tomcat9-common tomcat9-user
```

---

## Déploiement du fichier .war

```bash
cd /tmp
wget https://downloads.apache.org/guacamole/1.5.5/binary/guacamole-1.5.5.war
sudo mv guacamole-1.5.5.war /var/lib/tomcat9/webapps/guacamole.war
sudo systemctl restart tomcat9 guacd
```

---

# 4. Installation et configuration MariaDB

## Installation

```bash
sudo apt install mariadb-server
sudo mysql_secure_installation
```

---

## Création de la base

```bash
mysql -u root -p
```

```sql
CREATE DATABASE guacadb;
CREATE USER 'guaca_user'@'localhost' IDENTIFIED BY 'etudiant_007';
GRANT SELECT,INSERT,UPDATE,DELETE ON guacadb.* TO 'guaca_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

---

# 5. Extension JDBC MySQL

Téléchargement :

```bash
cd /tmp
wget https://downloads.apache.org/guacamole/1.5.5/binary/guacamole-auth-jdbc-1.5.5.tar.gz
tar -xzf guacamole-auth-jdbc-1.5.5.tar.gz
```

Déplacement du fichier :

```bash
sudo mv guacamole-auth-jdbc-1.5.5/mysql/guacamole-auth-jdbc-mysql-1.5.5.jar /etc/guacamole/extensions/
```

---

## Connecteur MySQL

```bash
wget https://dev.mysql.com/get/Downloads/Connector-J/mysql-connector-j-9.1.0.tar.gz
tar -xzf mysql-connector-j-9.1.0.tar.gz
sudo cp mysql-connector-j-9.1.0/mysql-connector-j-9.1.0.jar /etc/guacamole/lib/
```

---

## Import du schéma SQL

```bash
cd guacamole-auth-jdbc-1.5.5/mysql/schema/
cat *.sql | mysql -u root -p guacadb
```

---

# 6. Configuration Guacamole

## `/etc/guacamole/guacamole.properties`

```bash
sudo nano /etc/guacamole/guacamole.properties
```

```properties
mysql-hostname: 127.0.0.1
mysql-port: 3306
mysql-database: guacadb
mysql-username: guaca_user
mysql-password: etudiant_007
```

---

## `/etc/guacamole/guacd.conf`

```bash
sudo nano /etc/guacamole/guacd.conf
```

```ini
[server]
bind_host = 0.0.0.0
bind_port = 4822
```

---

## Redémarrage final

```bash
sudo systemctl restart tomcat9 guacd mariadb
```

---

# 7. Accès à l’interface Web

Accès :

```
http://IP_BASTION:8080/guacamole/
```

### Identifiants par défaut :

* Utilisateur : `guacadmin`
* Mot de passe : `guacadmin`

