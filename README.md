# YUMI LASER - L-A4 / L-A3 / L-A2
Projet communautaire de documentation, de configuration et d'amélioration du laser YUMI basé sur la carte MKS DLC32.

![YUMI Laser](images/yumi-laser.png)

## 🎯 Objectif
Fournir un dépôt centralisé de toutes les ressources utiles (PDF, images, schémas, réglages, sécurité, etc.) autour des machines laser YUMI et de la carte MKS DLC32.

## 🔧 Contenu
- 🛠 **Montage** : guide illustré pour L-A4 et L-A3
- ⚙ **Paramètres GRBL** : configs pour DLC32
- 📚 **Manuels** : LightBurn, WiFi, firmware, sécurité
- 🧠 **Docs techniques** : fin de course, câblages, firmware
- 📸 **Images utiles** : schémas de câblage, modules, logos

## 📁 Arborescence rapide

| Dossier | Contenu |
|--------|---------|
| `docs/` | Tous les documents PDF utiles |
| `images/` | Illustrations, schémas, logos |
| `config/` | Fichiers GRBL, réglages usine |
| `ressources/` | Liens, fichiers externes (ex: LightBurn.url) |
| `stl/` *(optionnel)* | Pièces imprimables 3D |

## 🚨 Sécurité
Un laser classe 4 est extrêmement dangereux. Merci de consulter le document [`docs/Safety-Guidelines.pdf`](docs/Safety-Guidelines.pdf) avant toute utilisation.

## 📡 WiFi / Réseau
Voir [`docs/Configuration_WiFi3.pdf`](docs/Configuration_WiFi3.pdf) pour connecter votre carte DLC32 à LightBurn en réseau local.

## 🧪 Paramètres GRBL

```bash
$130=285.000 ; Taille axe X (mm)
$131=272.000 ; Taille axe Y
$30=1000     ; Puissance laser max (PWM)
$32=1        ; Mode laser
<<<<<<< HEAD
```

> Voir [`config/bkg_cfg.txt`](config/bkg_cfg.txt) pour la config complète.

## 💬 Communauté
Rejoignez [le Discord WANHAO France](https://discord.gg/wanhao-france-886729543908458506) pour de l’aide et partager vos réalisations !

## 👥 Crédits
Projet maintenu par la communauté.  
Cartes MKS par Makerbase.  
Laser YUMI distribué par [wanhao-europe.com](https://wanhao-europe.com)

## 📜 Licence
Ce projet est sous licence **GPLv3**. Voir le fichier `LICENSE` pour plus d’informations.
=======
>>>>>>> 76d917cece30404d4d4f25d527d054b64d084c2c
