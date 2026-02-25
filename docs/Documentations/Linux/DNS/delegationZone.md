# V – Délégation de zone
---

## Objectif

Le domaine parent **cub.sioplc.fr** est géré par un **serveur DNS faisant autorité externe**.

Le but est de :

* Déléguer le sous-domaine **californie.cub.sioplc.fr**
* Vers **nos serveurs DNS** :

* **ns0.californie.cub.sioplc.fr** → 192.168.3.10
* **ns1.californie.cub.sioplc.fr** → 192.168.3.11

Ainsi, nous devenons autorité sur :

```
californie.cub.sioplc.fr
```

---

# 1️1 Connexion au serveur DNS autorité parent

Connexion au serveur qui gère la zone :

```
cub.sioplc.fr
```

Exemple :

```bash
ssh admineleve@ns0.cub.sioplc.fr
```

⚠️ Vérifier que vous êtes seul à modifier le fichier de zone.

---

# 2 Modification de la zone parent

Éditer le fichier de zone du domaine parent :

```bash
sudoedit /var/cache/bind/db.cub.sioplc.fr
```

---

# 3 Ajout des enregistrements de délégation

À la fin du fichier, ajouter :

```dns
; -------------------------------------------------
; Délégation du sous-domaine californie
; -------------------------------------------------

californie.cub.sioplc.fr.  IN  NS  ns0.californie.cub.sioplc.fr.
californie.cub.sioplc.fr.  IN  NS  ns1.californie.cub.sioplc.fr.

; Glue records obligatoires
ns0.californie.cub.sioplc.fr.  IN  A  192.168.3.10
ns1.californie.cub.sioplc.fr.  IN  A  192.168.3.11
```

---

# 4 Incrémenter le numéro de série (SOA)

Dans la zone `cub.sioplc.fr`, modifier :

```
2025111301
```

En :

```
2025111302
```

⚠️ Toujours incrémenter le Serial à chaque modification.

---

# 5 Pourquoi les glue records sont indispensables ?

Les serveurs DNS du sous-domaine :

```
ns0.californie.cub.sioplc.fr
ns1.californie.cub.sioplc.fr
```

Sont **dans le sous-domaine qu’on délègue**.

Sans glue record :

* Le parent délègue vers ns0.californie…
* Mais pour connaître l’IP de ns0.californie…
* Il faudrait déjà résoudre californie.cub.sioplc.fr
* ➜ Boucle de dépendance

Les glue records cassent cette boucle en donnant directement les IP.

---

# 6 Vérification de la syntaxe

```bash
sudo named-checkconf -z
sudo named-checkzone cub.sioplc.fr /var/cache/bind/db.cub.sioplc.fr
```

---

# 7 Rechargement du service

```bash
sudo systemctl reload bind9
```

---

# 8 Vérification depuis un client

Tester la délégation :

```bash
dig californie.cub.sioplc.fr NS
```

Résultat attendu :

```
californie.cub.sioplc.fr. IN NS ns0.californie.cub.sioplc.fr.
californie.cub.sioplc.fr. IN NS ns1.californie.cub.sioplc.fr.
```

Puis tester un enregistrement de votre zone :

```bash
dig www.californie.cub.sioplc.fr
```