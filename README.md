<div align="center">

# Yumi Laser - Documentation Complète

[![License](https://img.shields.io/badge/license-GPLv3-blue)](LICENSE)&nbsp;&nbsp;
[![LightBurn](https://img.shields.io/badge/LightBurn-compatible-orange)](https://lightburnsoftware.com)&nbsp;&nbsp;
[![Board](https://img.shields.io/badge/Board-MKS--DLC32-lightgrey)](https://github.com/makerbase-mks/MKS-DLC32)&nbsp;&nbsp;
[![Laser](https://img.shields.io/badge/Laser-Class_4-critical)](docs/Safety-Guidelines.pdf)&nbsp;&nbsp;
[![Discord](https://img.shields.io/discord/886729543908458506?label=Discord%20Wanhao&logo=discord&logoColor=white&color=5865F2)](https://discord.gg/wanhao-france-886729543908458506)&nbsp;&nbsp;


[![Wanhao](https://img.shields.io/badge/Wanhao-YUMILaser-blue?logo=shopify&logoColor=white)](https://wanhao-europe.com)&nbsp;&nbsp;
[![Documentation](https://img.shields.io/badge/docs-disponibles-blue)](docs/yumi-laser-l-a4-a3-montage.pdf)&nbsp;&nbsp;
[![WhatsApp](https://img.shields.io/badge/WhatsApp-Contacter-25D366?logo=whatsapp&logoColor=white)](https://wa.me/33612345678)&nbsp;&nbsp;
[![Made with ❤️](https://img.shields.io/badge/made%20with-%E2%9D%A4-red)](https://github.com/qnexo/yumi-laser)




<img src="images/yumi-laser.png" width="400">

</div>
<div align="center"> 
Bienvenue sur le dépôt GitHub dédié à la documentation complète des graveurs Yumi Laser L-A2, L-A3, et L-A4.  
Ce dépôt centralise toutes les ressources nécessaires pour l'installation, la configuration, la mise en route et l'utilisation en toute sécurité de votre graveur laser.

</div>


## 📚 Sommaire
- [🛠️ Installation et Montage](#️installation-et-montage)
- [🚀 Firmware](#firmware)
- [📶 Configuration WiFi](#configuration-wifi)
- [📐 Logiciel LightBurn](#logiciel-lightburn)
- [⚠️ Consignes de sécurité](#consignes-de-sécurité)
- [🛎️ Assistance et support](#assistance-et-support)
- [📜 Licence](#licence)



## 🛠️ Installation et Montage

- [Guide de montage Yumi Laser (modèles A4/A3/A2)](docs/yumi-laser-l-a4-a3-montage.pdf)
- [Manuel de câblage de la carte MKS DLC32](docs/DLC32-wiring-manual.pdf)

## 🚀 Firmware

- [Instructions pour mettre à jour le firmware DLC32](docs/DLC32-Firmware-Programming-Instructions.pdf)
- [Instructions firmware DLC32 (version chinoise)](docs/DLC32烧录说明V1.0.pdf)
- [Télécharger les firmware sur GitHub Makerbase](https://github.com/makerbase-mks/MKS-DLC32)

## 📶 Configuration WiFi

- [Guide complet pour configurer le WiFi sur MKS DLC32](docs/Configuration_WiFi3.pdf)

## 📐 Logiciel LightBurn

- [Manuel utilisateur de LightBurn en français](docs/Manuel-LightBurn-FR-V02.pdf)
- [Autres versions du manuel LightBurn](docs/)
- [Site officiel de LightBurn](https://lightburnsoftware.com/)

## ⚠️ Consignes de sécurité

**Important** : Le graveur laser Yumi utilise un laser de Classe 4, potentiellement dangereux. Prenez le temps de lire attentivement toutes les consignes de sécurité :

- [Consignes de sécurité Yumi Laser](docs/Safety-Guidelines.pdf)
- [Équipement de protection recommandé](https://www.apinex.com/det/lunettes-protection-laser.html)

## 🤝 Crédits

Ce dépôt est maintenu par la communauté Yumi Laser.  
Cartes MKS par [Makerbase](https://github.com/makerbase-mks).  
Laser distribué en France par [WANHAO Europe](https://wanhao-europe.com).

Merci aux contributeurs qui enrichissent ce projet 🙏

## 🤝 Communauté & Support

Rejoignez la communauté sur [Discord WANHAO France](https://discord.gg/wanhao-france-886729543908458506)  
Retrouvez-nous sur [YouTube](https://www.youtube.com/@WANHAOFRANCE) – [Twitch](http://twitch.tv/wanhaofrance) – [TikTok](https://www.tiktok.com/@wanhaofrance)

Pour toute question, n'hésitez pas à ouvrir une issue dans l'onglet « Issues » de ce dépôt ou à consulter le wiki :  
📚 [Wiki Yumi Laser](https://wiki.yumi-lab.com/)

Bonne gravure ! 🚀✨

## 📜 Licence

Ce projet est distribué sous la licence **GPLv3**.  
Voir [`LICENSE`](LICENSE) pour plus d'infos.

<details>
<summary>📋 Paramètres GRBL recommandés</summary>

```bash
$130=285 ; Axe X (mm)
$131=272 ; Axe Y (mm)
$30=1000 ; Puissance PWM max
$32=1    ; Mode laser activé

