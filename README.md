# Présentation de la fonctionnalité

## Application To Do List.

Cette version en cours de développement d'une to do list permet de rédiger 12 to do list comprenant chacune 10 tâches.
Vous vous donc les créer, modifier et sauvegarder en base de données.
Barrer les tâche executer.
( en cours de développement)
Fonctionnalité à venir: Sauvegarde des tâches barrées et Suppr des listes voulues.


### Technos utilisées

1. React
1. JavaScript
1. Semantic-ui
1. Npm
1. Scss
1. Node.js
1. MySql/PhpMyAdmin

### Module NPM

* Semantic-ui-rect
* react-reveal
* Express
* Axios
* React-router-dom
* Noty
* node-sass

# Installation

1. clône le respository gitHub : https://github.com/JeanVernus/AltranTodoList

1. #### Installer npm et ces dépendences dans le /Front et /Back
      . npm install
1. #### installer nodemon en global
      . npm i nodemon -g
1. #### installer et configurer sql my server
      . suivez les instructions pour configurer vos identifiant et mdp "root"
      . apt update
      . apt install mysql-server
1. #### installer et configurer phpmyadmin
      . apt install -g phpmyadmin
      . suivez les instructions pour configurer simplement phpmyadmin en localhost
      . importer dans votre nouvel bases de donner le fichier Users.sql que vous trouverez dans le dossier Assets de ce package
      . enfin modifier le fichier configMySql.js dans le back de se package par les informations rentrées pendant la configuration de votre base de données phpmyadmin
1. #### Lancer le server
      . nodemon index.js
1. #### Lancer le programme
      .npm start