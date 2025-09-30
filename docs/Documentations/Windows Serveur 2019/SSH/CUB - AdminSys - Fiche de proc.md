# CUB - AdminSys - Fiche de procédure 1
> [!NOTE]
> Liam BOIGEGRAIN 901

## **Windows Serveur 2019 - Mise en place d'une liaison sécurisée avec le terminal - SSH**

Pour pouvoir installer OpenSSH Server sans notre infrastructure, cette configuration réseau :
![]("/media/doc/W19S/SSH/1_CUB - AdminSys - Fiche de .png")

### I. Installation d'OpenSSH Server
![]("/media/doc/W19S/SSH/CUB - AdminSys - Fiche de .jpg")

### II. Activation d'OpenSSH Server
![]("/media/doc/W19S/SSH/5_CUB - AdminSys - Fiche de .png")

### III. Connection depuis un poste externe

Connexion depuis un poste linux :

```
etudiant@S406-P10-L:~$ ssh Administrateur@172.16.53.1
Administrateur@172.16.53.1's password: 700_buC700_buC
```

La connexion est bien réussi : 

```
Microsoft Windows [version 10.0.17763.2114]
(c) 2018 Microsoft Corporation. Tous droits réservés.

administrateur@SERVEURPRIMAIRE C:\Users\Administrateur>
```

### IV. Sécurisation du serveur SSH :

#### Création du compte dédié SSH:
![]("/media/doc/W19S/SSH/2_CUB - AdminSys - Fiche de .png")

```
etudiant@S406-P10-L:~$ ssh adminssh@172.16.53.1
adminssh@172.16.53.1's password: Cub_Admin_Ssh_007

Microsoft Windows [version 10.0.17763.2114]
(c) 2018 Microsoft Corporation. Tous droits réservés.

adminssh@SERVEURPRIMAIRE C:\Users\adminssh>
```

#### Désactivation de la connexion au compte Administrateur :

Ouvrir:

```
C:\ProgramData\ssh\sshd_config
```

Commenter ses deux lignes :

```
# Match Group administrators
# AuthorizedKeysFile __PROGRAMDATA__/ssh/administrators_authorized_keys
```

Ajout de la ligne en bas de fichier :

```
DenyUsers Administrateur
```

Redémarage du service :
![]("/media/doc/W19S/SSH/CUB - AdminSys - Fiche de .png")

La connexion est rendu impossible :

```
etudiant@S406-P10-L:~$ ssh Administrateur@172.16.53.1
Administrateur@172.16.53.1's password: 
Permission denied, please try again.
Administrateur@172.16.53.1's password: 
Permission denied, please try again.
Administrateur@172.16.53.1's password: 
Administrateur@172.16.53.1: Permission denied (publickey,password,keyboard-interactive).
```

#### Modification du port par defaut :

Ouvrir:

```
C:\ProgramData\ssh\sshd_config
```

Changer la ligne de port pour :

```
Port 222
```

Mettre une nouvelle règle sur le parfeu via le powershell :

```
PS C:\Users\adminssh> New-NetFirewallRule -Name sshd -DisplayName 'OpenSSH Serve
r (sshd) - Port 222' -Enabled True -Direction Inbound -Protocol TCP -Action Allo
w -LocalPort 222
```
![]("/media/doc/W19S/SSH/4_CUB - AdminSys - Fiche de .png")

Redémarrer le service via powershell:

```
PS C:\Users\adminssh> Restart-Service "sshd"
```

Connexion avec le nouveau port :

```
etudiant@S406-P10-L:~$ ssh adminssh@172.16.53.1

etudiant@S406-P10-L:~$ ssh -p 222 adminssh@172.16.53.1
adminssh@172.16.53.1's password: 

Microsoft Windows [version 10.0.17763.2114]
(c) 2018 Microsoft Corporation. Tous droits réservés.

adminssh@SERVEURPRIMAIRE C:\Users\adminssh>
```