
# DNS Récursif : Unbound
---
## 1. Mettre à jour le système

```bash
sudo apt update && sudo apt upgrade -y
```

## 2. Installer Unbound

```bash
sudo apt install -y unbound
```

## 3. Créer une configuration personnalisée

Éditez un fichier dédié :

```bash
sudo nano /etc/unbound/unbound.conf.d/cub.conf
```

Ajoutez le contenu suivant :

```
server:
    # Interfaces réseau à écouter
    interface: 192.168.3.61
    interface: 127.0.0.1

    # Contrôle d'accès par sous-réseaux
    access-control: 192.168.3.0/25 allow
    access-control: 192.168.3.128/26 allow
    access-control: 192.168.3.192/28 allow
    access-control: 127.0.0.0/8 allow
    access-control: 0.0.0.0/0 refuse

    # Sécurité et confidentialité
    hide-version: yes
    hide-identity: yes

    # Protocoles
    do-ip4: yes

    # Verbosité pour le debug
    verbosity: 3
```

## 4. Vérifier la configuration

Avant de redémarrer, assurez-vous qu’il n’y a pas d’erreurs :

```bash
sudo unbound-checkconf /etc/unbound/unbound.conf.d/cub.conf
```

* Si la commande ne retourne rien, la configuration est correcte.
* Sinon, corrigez les erreurs signalées avant de continuer.

## 5. Redémarrer et activer le service

```bash
sudo systemctl restart unbound
sudo systemctl enable unbound
```

## 6. Vérification

Pour vérifier qu’Unbound fonctionne correctement :

```bash
sudo systemctl status unbound
```

Ou tester une requête DNS locale :

```bash
dig @127.0.0.1 example.com
```