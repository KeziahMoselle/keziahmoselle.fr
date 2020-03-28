---
title: Tempus
date: 2019
github: KeziahMoselle/tempus
url: https://tempus.keziahmoselle.fr/
tags:
  - UI/UX
  - Front-End
stack:
  - React.js
  - Electron.js
isBigProject: true
---

## Concept

Tempus est un logiciel de productivité basé sur la technique du [pomodoro](https://en.wikipedia.org/wiki/Pomodoro_Technique).

Cette technique consiste à travailler 25 minutes puis de faire une pause durant 5 minutes et de répéter l'opération.

![Tempus](/projects/tempus/tempus.png)

## Quel problème ce projet résout-il ?

La raison initial de la création de Tempus était un prétexte dans le but d'apprendre la librairie [React.js](https://reactjs.org/).

Mais il se trouve qu'à ce moment même je cherchais des outils dans le but d'améliorer ma productivité, un outil gérant le temps de travail était donc intéressant à développer tant sur le plan de l'apprentissage que le plan personnel.

Hélas, je ne trouvais pas de logiciels de bureau convaincaint, les problèmes récurrents parmis les solutions existantes étaient les suivants :

- UI/UX pauvre
- Uniquement la possibilité de travailler 25 minutes avec 5 minutes de pause
- Pas de statistiques
- Non open-source ou payant

Par conséquent, j'ai décidé d'améliorer le simple pomodoro qu'était Tempus à cette époque là :

![Tempus v0](/projects/tempus/tempus-v0.png)

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Day #102 of <a href="https://twitter.com/hashtag/100DaysOfCode?src=hash&amp;ref_src=twsrc%5Etfw">#100DaysOfCode</a> :<br>My React pomodoro app is now in my system tray o/<br><br>Next tasks :<br>- Notification when a phase is finished<br>- Display percentage as the tray icon<br>- Better window position<br>- Better UI <a href="https://t.co/tOZO53sLz1">pic.twitter.com/tOZO53sLz1</a></p>&mdash; Keziah 🌸 (@KeziahMoselle) <a href="https://twitter.com/KeziahMoselle/status/1080291122629488640?ref_src=twsrc%5Etfw">January 2, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Solution

### Fonctionnalités

Après 3 mois de développement, Tempus a été doté de plusieurs fonctionnalités qui peut le démarquer des solutions existantes :

#### Horloge

Il est possible de changer le temps de travail et de pause sans restrictions

![Changing the work time and pause time](/projects/tempus/change-clock.gif)


#### Travailler jusqu'à la fin de l'heure automatiquement

Au clic d'un bouton, calcule le temps restant jusqu'à la prochaine heure et met automatiquement la valeur de travail en minutes
Cela permet de travailler directement jusqu'à la fin de l'heure sans calculer le nombre de minutes soi même. (n'altère pas la configuration finale)

![Demonstration of the work till next hour btn](/projects/tempus/work-till-next-hour.gif)

#### Objectifs (Goals)

Des objectifs de temps par jour/semaine/mois ou année

![objectifs](/projects/tempus/goals.gif)

#### Streaks

"Streak" plus vous travailler, plus votre streak sera haut, il se cumule si vous travaillez tous les jours.

Cela permet à certaines personnes de se motiver pour ne pas perdre ce streak.

> Il peut également être considéré comme un dark pattern pour certaines personnes !

![Streaks](/projects/tempus/streaks.png)

#### Statistiques

- Total de minutes de travail (jour/total)
- Total de streak (jour/total)
- Semaine : Minutes de travail par jour
- Mois : Minutes de travail et streak

![Stats](/projects/tempus/stats.gif)

#### Cycles

Les cycles permettent de répéter un nombre défini de fois le pomodoro.  
(Exemple : répéter qu'une fois la séquence : 25 minutes et 5 minutes de pause sans redémarrer le compteur à chaque fois)

![Cycles](/projects/tempus/cycles.gif)

#### Notifications

Notifications lorsqu'un pomodoro est terminé

![Notifications](/projects/tempus/notification.png)

Grâce à ces fonctionnalités Tempus couvre un besoin fonctionnel suffisant pour la plupart des utilisateurs.

### Choix des technologies

#### React.js

Tempus étant doté de plusieurs fonctionnalités il aurait été facile d'écrire du code non maintenable sans un framework/librairie, c'est pour cela que j'ai décidé d'utiliser [React.js](https://reactjs.org/), après avoir appris [Vue.js](https://vuejs.org/) je souhaitais apprendre cette librairie, cela avait donc deux avantages :

Séparer la logique en plusieurs composants et ainsi améliorer la maintenance et l'écriture des composants.
Et faire de la veille technologique en apprenant une nouvelle technologie.

#### Electron

Tempus utilise également [Electron.js](https://www.electronjs.org/) dans le but de porter l'application React au sein d'un Chromium embarqué sur le bureau des utilisateurs.

Ce qui permet d'en faire une application de bureau à part entière et d'utiliser certaines API natif de l'OS.

##### Pourquoi Electron ?

Utiliser Electron était un moyen simple d'ajouter la principale fonction de Tempus : le **tray** ou **menubar** cela permet de réduire l'application de bureau dans une petite icône situé en bas à droite sur Windows ou en haut à droite sur MacOS.

Un clique droit sur l'icône suffit pour contrôler les principales actions de l'application tel qu'arrêter/commencer le pomodoro ce qui permet de gagner du temps et de ne pas encombrer son écran.

Cela permet aussi de profiter des notifications natives de l'OS, très pratique donc pour notifier l'utilisateur qu'un cycle de pomodoro vient de se terminer.

Tempus stock également les données des pomodoros, le temps de travail et les streaks sur le système de fichiers de l'utilisateur sous format `.json`, ces données sont ensuite utilisées pour aggréger les graphiques de statistiques.

Electron nous offre par dessus tout la possibilité d'être compatible à travers les principaux OS : Windows, MacOS et Linux.

> Remarque : Tempus est développé sur Windows et par conséquent est plus stable sur Windows que sur les autres systèmes d'exploitations.


### UI/UX

#### L'icône du tray/menubar

C'est un des choix principal concernant l'expérience utilisateur de Tempus,
l'icône au sein du tray de votre système est l'endroit auquel la fenêtre de Tempus va s'accrocher (par défaut), ce qui permet un accès rapide à la fenêtre de Tempus via un clique droit de simples actions telles que "démarrer" ou "arrêter" le pomodoro.

![Tray](/projects/tempus/tray.png)

#### L'interface, la fenêtre

La fenêtre de Tempus fait par défaut 400x550px, un petit format rectangulaire donc, qui permet de ne pas polluer l'espace de l'utilisateur tout en affichant les principales informations.

![Tempus annotated](/projects/tempus/tempus-annotated.png)

La fenêtre est redimensionnable via un bouton situé à gauche du bouton fermer comme ceci :

![Reduce the window size](/projects/tempus/reduce-window.gif)

#### Expérience utilisateur

La première fois que l'utilisateur lancera l'application, un onboarding lui présentera les différentes fonctionnalités de l'application.

![Onboarding](/projects/tempus/onboarding.gif)

Une fois l'onboarding terminé, l'utilisateur est présenté devant l'interface principale.

Il y a 3 principales actions au sein de la bottom bar navigation :

- Statistics
- Play/Stop FAB icon
- Paramètres de l'horloge

Dans le header nous avons :

- Le streak actuel
- Paramètres de l'application
- Réduire l'application
- Minimiser l'application (mode mini)
- Fermer l'application

Le corps principal de l'application est composé d'une couleur noire profonde et est présenté à l'utilisateur le % de temps passé par rapport au temps total (de travail ou de pause), l'utilisateur peut cliquer sur ce nombre pour passer du mode % à un mode "minutes/secondes".

En dessous se trouve le bouton pour initialiser un pomodoro qui durera jusqu'à la fin de l'heure. Qui est rapide d'accès sans pour autant polluer la vue principale.

## Évolution du projet

Actuellement Tempus est sous un grand refactoring qui permettra la création de l'application web sur navigateur et une application mobile.

Pour cela le projet utilise maintenant les workspaces de Yarn pour séparer l'application en 3 packages : 

- @tempus/app
- @tempus/core
- @tempus/electron

Dans le futur le pseudo-backend sera migré au sein du package `@tempus/core` et ce backend sera isomorphique ce qui permettra d'utiliser ces mêmes fonctions au sein de `@tempus/app`  (navigateur) et de `@tempus/electron` (Node.js).