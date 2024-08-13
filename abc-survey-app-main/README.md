# Survey App

## Description

Survey App est une application JavaScript  pour permettre aux commerciaux d'ABC Corporation d'enregistrer et de gérer les fiches d'enquête de satisfaction des clients. L'application effectue des opérations CRUD (Create, Read, Update, Delete) sur une base de données MongoDB et est organisée de manière modulaire.

## Prérequis
Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- [Node.js](https://nodejs.org/) (version 12 ou supérieure)
- [MongoDB](https://www.mongodb.com/try/download/community) (version 4.0 ou supérieure)


## Installation
Suivez ces étapes pour configurer le projet sur votre machine locale :

1. **Clonez le repository :**
    git clone https://github.com/ABC-Corporation/fiches-enquete-satisfaction.git

2. **Accédez au dossier du projet :**
   cd fiches-enquete-satisfaction

3. **Installez les dépendances :**
    npm install

4. **Configurez la base de données :**
    - Assurez-vous que MongoDB est en cours d'exécution sur votre machine locale.
    - Mettez les paramètres de connexion dans `config/database.js`.

## Utilisation
Pour démarrer l'application, exécutez la commande suivante :
    npm start

Structure du Projet

abc-survey-app-main/
│
├── .env
├── index.js
├── package.json
├── package-lock.json
├── README.md
├── src/
│   ├── surveys.js
│   ├── questions.js
│   └── answers.js
└── config/
    └── database.js

# Démarrer l'Application

Pour démarrer l'application et tester d'autres fonctionnalités :
    Assurez-vous que MongoDB est en cours d'exécution.
    Démarrez l'application Node.js :
    node app.js

# Documentation des Modules
    surveys.js : Gère les enquêtes de satisfaction. Contient les fonctions pour créer, lire, mettre à jour, et supprimer des enquêtes.
    questions.js : Gère les questions liées aux enquêtes. Contient les fonctions pour créer, lire, mettre à jour, et supprimer des questions.
    answers.js : Gère les réponses aux questions. Contient les fonctions pour créer, lire, mettre à jour, et supprimer des réponses.

# Contribution
Si vous souhaitez contribuer à ce projet, veuillez suivre ces étapes :
    Forkez le repository.
    Créez une branche (git checkout -b feature/AmazingFeature).
    Commitez vos changements (git commit -m 'Add some AmazingFeature').
    Poussez la branche (git push origin feature/AmazingFeature).
    Ouvrez une Pull Request.

## Prise en Main Facile

Pour vous familiariser rapidement avec le projet et commencer à l'utiliser :

    Configurer l'environnement : Suivez les étapes d'installation ci-dessus pour mettre en place le projet localement.
    Comprendre la structure du projet : Jetez un œil à la structure des dossiers pour voir comment les modules sont organisés.
    Démarrer l'application : Utilisez npm start pour lancer l'application, qui sera disponible sur http://localhost:3000.
    Tester les fonctionnalités de base : Une fois l'application démarrée, vous pouvez tester les différentes fonctionnalités CRUD en interagissant 
    avec l'API via un outil comme Postman ou via le navigateur.