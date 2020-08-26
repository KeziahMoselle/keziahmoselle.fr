---
title: Export GitHub Stars
date: 2018
github: KeziahMoselle/export-github-stars
url: https://github.com/KeziahMoselle/export-github-stars
tags:
  - UI/UX
  - Front-End
  - API
stack:
  - Vue.js
  - Vuetify
---

## Concept

Export GitHub Stars est un petit utilitaire qui a été crée dans le but d'analyser et de voir ses dépôts mis en favoris.

## Problème

Je souhaitais pouvoir trier et analyser mes dépôts favoris pour pouvoir les retrouver facilement (par langages notamment).
De plus suite au rachat de GitHub par Microsoft, l'outil peut être utilisé pour exporter tous les dépôts favoris, cela peut être utile notamment si l'utilisateur souhaite supprimer son compte.

## Solution

Une simple application web qui récupère les données de l'utilisateur GitHub et affiche les dépôts en les mettant en forme.

### Fonctionnalités

#### Trier

Possibilité de trier tous les dépôts par :

- Date
- Langages
- Stars (ascendant)
- Stars (descendant)

![sort](/projects/export-github-stars/sort.gif)

#### Exporter en tant que fichier

Il est également possible d'exporter tous vos dépôts mis en favoris, cela peut être utile notamment lorsque vous souhaitez supprimer votre compte GitHub et conserver votre liste de dépôts favoris pour plus tard.

![export](/projects/export-github-stars/export.gif)

### Choix des technologies

#### Vue.js

[Vue.js](https://vuejs.org/) a été mon choix par défaut après avoir récemment appris cette technologie à ce moment là. Il était donc mon choix par défaut pour développer une application web orienté composants.

### UI/UX

L'application a été développé avec Vue.js ce qui m'a permit d'utiliser l'excellent framework [Vuetify](https://vuetifyjs.com/), et donc d'appliquer le design system de Google : le [Material Design](https://material.io/).

#### L'interface

L'application web ne comporte qu'une seule vue :

![homepage](/projects/export-github-stars/home.png)

La principale action à réaliser est de rentrer son nom d'utilisateur dans le champ de recherche centré pour obtenir les données par la suite.

![search](/projects/export-github-stars/search.gif)

Après avoir entré un nom d'utilisateur, l'application va afficher tous les dépôts favoris.

Un dépôt est sous representé sous forme d'une entrée de datalist/ligne et présente plusieurs informations cruciales :

- Le nom du dépôt (author/name)
- Le nombre d'étoiles que le dépôt possède
- Le langage principal du dépôt
  - Présent en tant que sous-titre
  - Et également sous forme de bordure coloré autour de l'avatar de l'auteur du dépôt