# Survey App

## Description

Survey App est une application JavaScript pour permettre aux commerciaux d'ABC Corporation d'enregistrer et de gérer les fiches d'enquête de satisfaction des clients. L'application effectue des opérations CRUD (Create, Read, Update, Delete) sur une base de données MongoDB et est organisée de manière modulaire.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- [Node.js](https://nodejs.org/) (version 12 ou supérieure)
- [MongoDB](https://www.mongodb.com/try/download/community) (version 4.0 ou supérieure)

## Installation

Suivez ces étapes pour configurer le projet sur votre machine locale :

1. **Clonez le repository :**
  ```git clone https://github.com/OUMARNDIAYE49/ABC_Corporation_Survey.git ```

2. **Accédez au dossier du projet :**
   ````cd fiches-enquete-satisfaction````

3. **Installez les dépendances :**
   ````npm install````

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
│ ├── surveys.js
│ ├── questions.js
│ └── answers.js
└── config/
└── database.js

# Démarrer l'Application

Pour démarrer l'application et tester d'autres fonctionnalités :
Assurez-vous que MongoDB est en cours d'exécution.
Démarrez l'application Node.js :
node app.js

# Documentation des Modules et les fonctions

## Module surveys.js

### 1. createSurvey(surveyData)

- **Description** : Crée une nouvelle enquête dans la base de données.
- **Paramètres d'entrée** :
  - `surveyData` (Object) : Les données de l'enquête à créer.
    - `surveyId` (Number) : Identifiant unique de l'enquête.
    - `title` (String) : Titre de l'enquête.
    - `name` (String) : Nom de l'enquête.
    - `description` (String) : Description de l'enquête.
    - `createdAt` (String) : Date de création de l'enquête au format ISO.
    - `createdBy` (Object) : Détails de l'employé ayant créé l'enquête.
      - `employeeName` (String) : Nom de l'employé.
      - `employeeRole` (String) : Rôle de l'employé.

### 2. getSurveys()

- **Description** : Récupère toutes les enquêtes dans la base de données.
- **Paramètres d'entrée** : Aucun

### 3. getSurveyById(surveyId)

- **Description** : Récupère une enquête par son ID.
- **Paramètres d'entrée** :
  - `surveyId` (Number) : Identifiant unique de l'enquête.

### 4. updateSurveyById(surveyId, updateData)

- **Description** : Met à jour une enquête par son ID.
- **Paramètres d'entrée** :
  - `surveyId` (Number) : Identifiant unique de l'enquête.
  - `updateData` (Object) : Données à mettre à jour.

### 5. deleteSurveyById(surveyId)

- **Description** : Supprime une enquête par son ID.
- **Paramètres d'entrée** :
  - `surveyId` (Number) : Identifiant unique de l'enquête.

---

## Module questions.js

### 1. createQuestion(questionData)

- **Description** : Crée une nouvelle question dans la base de données.
- **Paramètres d'entrée** :
  - `questionData` (Object) : Les données de la question à créer.
    - `questionId` (Number) : Identifiant unique de la question.
    - `surveyId` (Number) : Identifiant unique de l'enquête associée.
    - `questionText` (String) : Texte de la question.

### 2. getQuestions()

- **Description** : Récupère toutes les questions dans la base de données.
- **Paramètres d'entrée** : Aucun

### 3. getQuestionById(questionId)

- **Description** : Récupère une question par son ID.
- **Paramètres d'entrée** :
  - `questionId` (Number) : Identifiant unique de la question.

### 4. updateQuestionById(questionId, updateData)

- **Description** : Met à jour une question par son ID.
- **Paramètres d'entrée** :
  - `questionId` (Number) : Identifiant unique de la question.
  - `updateData` (Object) : Données à mettre à jour.

### 5. deleteQuestionById(questionId)

- **Description** : Supprime une question par son ID.
- **Paramètres d'entrée** :
  - `questionId` (Number) : Identifiant unique de la question.

---

## Module answers.js

### 1. createAnswer(answerData)

- **Description** : Crée une nouvelle réponse dans la base de données.
- **Paramètres d'entrée** :
  - `answerData` (Object) : Les données de la réponse à créer.
    - `answerId` (Number) : Identifiant unique de la réponse.
    - `surveyId` (Number) : Identifiant unique de l'enquête associée.
    - `questionId` (Number) : Identifiant unique de la question associée.
    - `answerText` (String) : Texte de la réponse.

### 2. getAnswers()

- **Description** : Récupère toutes les réponses dans la base de données.
- **Paramètres d'entrée** : Aucun

### 3. getAnswerById(answerId)

- **Description** : Récupère une réponse par son ID.
- **Paramètres d'entrée** :
  - `answerId` (Number) : Identifiant unique de la réponse.

### 4. updateAnswerById(answerId, updateData)

- **Description** : Met à jour une réponse par son ID.
- **Paramètres d'entrée** :
  - `answerId` (Number) : Identifiant unique de la réponse.
  - `updateData` (Object) : Données à mettre à jour.

### 5. deleteAnswerById(answerId)

- **Description** : Supprime une réponse par son ID.
- **Paramètres d'entrée** :
  - `answerId` (Number) : Identifiant unique de la réponse.

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

## Authors
 [Oumar Djiby Ndiaye ](https://github.com/OUMARNDIAYE49/ABC_Corporation_Survey.git)
