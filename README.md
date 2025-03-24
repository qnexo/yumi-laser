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
