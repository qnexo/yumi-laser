<div align="center">

# Yumi Laser - Documentation Complète

[![License](https://img.shields.io/badge/license-GPLv3-blue)](LICENSE)&nbsp;
[![LightBurn](https://img.shields.io/badge/LightBurn-compatible-orange)](https://lightburnsoftware.com)&nbsp;
[![Board](https://img.shields.io/badge/Board-MKS--DLC32-lightgrey)](https://github.com/makerbase-mks/MKS-DLC32)&nbsp;
[![Laser](https://img.shields.io/badge/Laser-Class_4-critical)](docs/Safety-Guidelines.pdf)&nbsp;
[![Discord](https://img.shields.io/discord/886729543908458506?label=Discord%20Wanhao&logo=discord&logoColor=white&color=5865F2)](https://discord.gg/wanhao-france-886729543908458506)&nbsp;

[![Wanhao](https://img.shields.io/badge/Wanhao-YUMILaser-blue?logo=shopify&logoColor=white)](https://wanhao-europe.com)&nbsp;
[![Documentation](https://img.shields.io/badge/docs-disponibles-blue)](docs/yumi-laser-l-a4-a3-montage.pdf)&nbsp;
[![WhatsApp](https://img.shields.io/badge/WhatsApp-Contacter-25D366?logo=whatsapp&logoColor=white)](https://wa.me/33612345678)&nbsp;
[![Made with ❤️](https://img.shields.io/badge/made%20with-%E2%9D%A4-red)](https://github.com/qnexo/yumi-laser)

<img src="images/yumi-laser.png" width="400">
</div>


Bienvenue dans **le dépôt de référence pour modifier, améliorer et dompter le YUMI L-A**.  
Tu veux flasher un firmware propre, ajouter des capteurs de fin de course, activer le Wi-Fi sans écran, ou même modéliser des pièces pour ta machine ? 

T’es au bon endroit.

---

## 🚀 Objectif du projet

Ce dépôt regroupe **tout le nécessaire pour transformer ton YUMI L-A2** en une machine stable, modulaire et digne de projets sérieux.  
On parle ici de modifications concrètes testées IRL, pas de théories de forum.

---

## 📚 Sommaire
- [🛠️ Installation et Montage](#️installation-et-montage)
- [🚀 Firmware](#firmware)
- [📶 Configuration WiFi](#configuration-wifi)
- [📐 Logiciel LightBurn](#logiciel-lightburn)
- [⚠️ Consignes de sécurité](#consignes-de-sécurité)
- [🛎️ Assistance et support](#assistance-et-support)
- [📜 Licence](#licence)

---

## 🧰 Contenu du dépôt

📁 firmware/ → Firmware GRBL modifié (capteurs, Wi-Fi, configs YUMI)

📁 hardware/ → STL/STEP, plans de montage, upgrades mécaniques

📁 docs/ → Fiches techniques et manuels PDF

📁 modifications/ → Étapes pas-à-pas pour les hacks (photos, branchements, etc.)

📁 tools/ → Scripts et utilitaires de flash/test

---

## 🛠️ Modifications principales

- ✅ Activation des **capteurs de fin de course**
- ✅ Activation du **Wi-Fi sans écran**
- ✅ Modification de la configuration GRBL pour laser YUMI
- ✅ Intégration de pièces imprimables (ventilateurs, support module, etc.)
- 🚧 [À venir] Ajout d’un relais de sécurité / arrêt d’urgence

---

## ⚙️ Installer le firmware

> 🔥 **Important** : Sauvegarde ton firmware d’origine si tu veux pouvoir revenir en arrière.

1. Branche ton YUMI via USB
2. Ouvre `tools/flasher.bat` *(ou utilise `avrdude` si tu préfères la ligne de commande)*
3. Flash le fichier `.hex` adapté à ta config depuis `firmware/`
4. Redémarre, connecte avec un terminal série (115200 baud)
5. Tape `$$` pour vérifier les réglages

---

## 🔌 Branchement des capteurs (Endstops)

**Type** : capteur mécanique Normally Open (NO)  
**Connexion** :
- X min → pin D9
- Y min → pin D10  
(Peut varier selon le modèle de carte – voir `docs/yumi-board-pinout.pdf`)

📸 *Voir photos dans `modifications/endstop-photos/`*

---

## 📷 Aperçus

![YUMI Modifié](./hardware/yumi_mod_front.jpg)  
*Vue avant avec support capteurs et module laser 10W*

---

## 📬 Contact & communauté

👉 Groupe WhatsApp : [**lien à insérer**]  
📧 Contact : qnexo.dev@gmail.com *(ou autre mail/profil si tu préfères)*

---

## ❤️ Contribuer

Les PR sont bienvenues. Merci de :
- Forker ce dépôt
- Travailler sur une branche dédiée
- Proposer une modif claire avec explication

---

## 🧠 À faire (Roadmap)

- [ ] Ajout d’un support écran TFT
- [ ] Ajout d’un système d’extraction d’air imprimable
- [ ] Création d’un profil LightBurn optimisé
- [ ] Documentation FR/EN parallèle

---

**Hack the machine. Dompte la lumière. 🔥**
