---
title: Gelbooru Client
date: 2017-2018
github: KeziahMoselle/gelbooru-client
url: https://github.com/KeziahMoselle/gelbooru-client
tags:
  - UI/UX
  - Front-End
  - API
stack:
  - JavaScript
  - Electron
  - Materialize
---

## Concept

*Gelbooru Client* est un logiciel de bureau permettant de rechercher des images en fonction de tags très précis (tels que : sky, purple_flower, blue_hair...) parmis une énorme quantité d'images hébergé chez "Gelbooru", attention le site stock tous les types de contenu ceci inclut des images à caractères pornographiques, le logiciel permet de filtrer ces résultats.

## Problème

Gelbooru est basé sur le concept de *booru* "board", les boorus sont des plateformes où l'on héberge des images triés par un système de tags. Malheureusement ces sites ne possèdent généralement pas une UI/UX très poussé car ces plateformes sont relativement anciennes, le challenge était donc d'effectuer un redesign complet d'un image board.

## Solution

Réinventer l'UI/UX d'un booru possédant une API et suffisamment d'images dans le but de profiter du système de tags, le point négatif de cette solution est que la source des images n'est pas contrôlé.

![fenêtre du logiciel](/projects/gelbooru-client/preview.png)

### Fonctionnalités

#### Recherche d'images par tags

![Recherche d'images](/projects/gelbooru-client/search.gif)

#### Plusieurs types de cartes (grand, moyen, petit)

![Plusieurs layouts](/projects/gelbooru-client/layouts.gif)

#### Voir les images "trending"

![Trending](/projects/gelbooru-client/trending.png)

#### Blacklist de tags non souhaités

![Blacklist](/projects/gelbooru-client/blacklist.gif)

#### Customisation du thème de couleurs

![theming](/projects/gelbooru-client/theming.gif)

#### Infinite scrolling

Ajouté par un contributeur : [@Shiroifuyu](https://github.com/Shiroifuyu)

![Infinite scrolling](/projects/gelbooru-client/infinite-scrolling.gif)


### Choix des technologies

#### JavaScript (vanilla)

Cette application fait partie de mes premiers projets, je me suis donc naturellement dirigé vers du JavaScript *vanilla*. Au moment où j'ai débuté ce projet je n'avais pas de solides compétences en JavaScript mais j'étais plutôt à l'aise avec la librairie jQuery, l'idée était donc de reprendre depuis les bases et d'apprendre les fondamentaux du langage en créant une application riche.

Cette application m'a beaucoup appris et a permis notamment à me rendre compte de l'utilité de frameworks JavaScript qui permettent une approche composants et ainsi d'être mieux organisé.

[J'ai notamment pu apprendre que tout écrire dans un fichier était une mauvaise idée](https://github.com/KeziahMoselle/gelbooru-client/blob/30ac70406df8c6221cf18138ff1e46b43bb3f9a2/src/renderer.js)

#### Electron.js

L'idée était de créer une application de bureau, facile d'accès et permettant d'implémenter des fonctionnalités qui permettent d'intéragir avec le système d'exploitation, la principale raison était d'isoler l'application sur sa propre fenêtre pour une meilleure UX, je souhaitais également ajouter du téléchargement de masse et l'accès aux API du système aurait simplifié cette tâche.

### UI/UX

#### L'interface

L'interface embrasse les règles du Material Design 1.0 de Google, grâce au framework CSS : [Materialize](https://materializecss.com/).

![Palette de couleur](/projects/gelbooru-client/palette.png)


#### Expérience utilisateur

L'application est composée de 3 parties principales :

1. Navbar (Bleu)
2. Sidenav (Vert)
3. Contenu (Mauve)

![Composition de l'application](/projects/gelbooru-client/areas.png)

Chaque zone permet de regrouper des actions similaires.

##### Navbar

Regroupe les actions concernant le contenu :

- Barre de recherche
- Actualiser la page
- Nombre d'images par page (10, 20, 50, 100)
- Rating de l'image
- Disposition de carte (Grand, moyen, petit)

##### Sidenav

Regroupe des pages prédéfinis telles que : "All", "Top" and "Hot"

Et inclus les paramètres de l'application :
- Blacklist de tags
- Customisation du thème
- Light / Dark theme
- Infinite scrolling

et contient des liens d'aide et de support.

##### Contenu

Affiche les images concernant la recherche effectué.

Lorsque l'on clique sur une image une seconde navbar s'affiche et permet de proposer certaines actions à l'utilisateur comme télécharger le fichier, visiter la page source ou encore de voir tous les tags concernés.

Les tags recherchés sont marqué d'un gris en couleur de fond (ici "avogado6")

![Images cliquables](/projects/gelbooru-client/clickable-image.gif)

## Évolution du projet

Ce projet n'est plus maintenu depuis 2018.

Je souhaitais implémenter plusieurs fonctionnalités :

- Un mode "gallery" qui permettait d'avoir une meilleure visualisation des photos
- Téléchargement "bulk" de plusieurs centaines d'images en même temps

Et également effectuer un refactor complet de l'application pour apprendre le framework Angular, malheureusement je n'ai pas eu le temps de le faire car cela demanderait beaucoup de travail sur une application que je n'utilise plus.