---
title: Ribbon
date: 2020
github: KeziahMoselle/ribbon
url: https://github.com/KeziahMoselle/ribbon
tags:
  - UI/UX
  - Front-End
  - Mobile
  - API
  - OAuth
stack:
  - React.js
  - React Native
  - TypeScript
isBigProject: true
---

## Concept

Ribbon est une application mobile de gestion de signets. Elle vous permet d'unifier vos signets venant de plusieurs sources et ainsi de rechercher à travers tous vos signets, l'application permet également de mettre en favoris certains signets pour ne pas les perdre.

## Quel problème ce projet résout-il ?

La raison de la création de Ribbon est née de la frustration concernant l'UI/UX de tous les services qui ne proposent pas de moteur de recherche/filtrage à travers ces signets, il est donc difficile de retrouver un contenu sauvegardé en signet depuis plusieurs semaines/mois en se souvenant de quel service il s'agissait puis de scroller la longue liste de signets sur ce dit service !

## Solution

Ribbon essaie de résoudre cette frustration en **essayant** d'unifier tous les signets à travers une sélection de services externes tel que [Reddit](https://www.reddit.com/).

L'application a été developpé pour mobile car dans la majorité des cas les utilisateurs utilisent leur téléphones lorsqu'ils utilisent ces services, ainsi l'utilisateur peut retrouver facilement tous ses signets tout en restant sur la plateforme initial.

### Fonctionnalités

#### 📚 Lister / Voir ses signets

L'application vous permet de scroll à travers tous vos signets et de les lire :

![Listing de signets](/projects/ribbon/listing.gif)

#### 🔔 Signets favoris et notifications

L'application possède également sa propre liste de signets "favoris" :

![Signets favoris](/projects/ribbon/demo.gif)

#### 🔎 Filtrer / Recherche

![Recherche](/projects/ribbon/search.gif)


### Choix des technologies

#### React Native

Étant à l'aise avec [React.js](https://reactjs.org/) je l'ai choisis pour sa facilité de mise en oeuvre et son temps de développement considérablement réduit.

Le projet utilise également [Expo](https://expo.io/) pour profiter de certaines API (notamment `AuthSession`).

#### TypeScript

J'ai décidé d'utiliser [TypeScript](https://www.typescriptlang.org/) pour bénéficier d'un typage fort qui aide grandement le debugging et permet d'éviter beaucoup d'erreurs en amont.

TypeScript est également utilisé pour typer les données que l'application reçoit depuis des API externes plus ou moins complexe qui permet de profiter d'une auto-complétion digne de ce nom.

### UI/UX

#### L'interface

L'interface est minimaliste et l'usage des couleurs se limite à du monochrome blanc/noir dans le but de ne pas polluer les informations essentiels, ici les signets.

Un signet est sous forme de carte arrondie pour prononcer le côté "amical", il présente 3 informations primordiales :

- Le subreddit (spécifique à Reddit)
- La date du signet
- Une prévisualisation du contenu sous forme d'image / Ou un extrait de texte si il n'y a pas d'image

Les illustrations utilisées proviennent de l'excellence de Diana Valeanu : [https://absurd.design/](https://absurd.design/).


L'application utilise ces illustrations "absurdes" dans le but de donner une identité propre à l'application.

## Évolution du projet

Pour le moment le projet ne supporte un unique service : Reddit.

L'application ne remplis donc pas son rôle primaire : Regrouper tous les signets à un seul et même endroit.

Cela est pour le moment impossible à faire pour 2 raisons :

### Raisons techniques

La majorité des services populaires ne disposent pas d'un accès aux données des signets, autrement dit leur API ne proposent pas/plus un moyen de récupérer ces données principalement dans le but de respecter la vie privée de ses utilisateurs.

### Raisons légales

Il aurait été possible de récupérer ces données grâce à du *scraping* en développant notre propre API privée mais cela est contre les conditions générales d'utilisations de ces services et est donc impossible à réaliser.

---

Pour ces raisons, Ribbon se focalise sur une gestion de signets provenant de Reddit.