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
   `git clone https://github.com/OUMARNDIAYE49/abc_survey_app.git`

2. **Accédez au dossier du projet :**
   `cd abc_survey_app`

3. **Installez les dépendances :**
   `npm install`

4. **Configurez la base de données :**
   - Assurez-vous que MongoDB est en cours d'exécution sur votre machine locale.
   - Mettez les paramètres de connexion dans `config/database.js`.

## Utilisation

Pour démarrer l'application, exécutez la commande suivante :

`npm start`

# Documentation des Modules et les fonctions

## Module surveyModule.js

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
- **Retour** :
  - `Success` : Retourne l'objet de l'enquête créée si l'opération est réussie.
  - `Failure` : Retourne une erreur indiquant pourquoi l'opération a échoué.

### 2. getSurveys()

- **Description** : Récupère toutes les enquêtes dans la base de données.
- **Paramètres d'entrée** : Aucun
- **Retour** :
  - `Success` : Retourne une liste d'enquêtes si l'opération est réussie.
  - `Failure` : Retourne une erreur indiquant pourquoi l'opération a échoué.

### 3. getSurveyById(surveyId)

- **Description** : Récupère une enquête par son ID.
- **Paramètres d'entrée** :
  - `surveyId` (Number) : Identifiant unique de l'enquête.
- **Retour** :
  - `Success` : Retourne l'enquête correspondante si l'opération est réussie.
  - `Failure` : Retourne une erreur indiquant pourquoi l'opération a échoué.

### 4. updateSurveyById(surveyId, updateData)

- **Description** : Met à jour une enquête par son ID.
- **Paramètres d'entrée** :
  - `surveyId` (Number) : Identifiant unique de l'enquête.
  - `updateData` (Object) : Données à mettre à jour.
    - `title` (String) : Titre de l'enquête.
    - `name` (String) : Nom de l'enquête.
    - `description` (String) : Description de l'enquête.
    - `createdAt` (String) : Date de création de l'enquête au format ISO.
    - `createdBy` (Object) : Détails de l'employé ayant créé l'enquête.
      - `employeeName` (String) : Nom de l'employé.
      - `employeeRole` (String) : Rôle de l'employé.
- **Retour** :
  - `Success` : Retourne l'objet de l'enquête mise à jour si l'opération est réussie.
  - `Failure` : Retourne une erreur indiquant pourquoi l'opération a échoué.

### 5. deleteSurveyById(surveyId)

- **Description** : Supprime une enquête par son ID.
- **Paramètres d'entrée** :
  - `surveyId` (Number) : Identifiant unique de l'enquête.
- **Retour** :
  - `Success` : Retourne une confirmation de suppression si l'opération est réussie.
  - `Failure` : Retourne une erreur indiquant pourquoi l'opération a échoué.

---

## Module questionModule.js

### 1. createQuestion(questionData)

- **Description** : Crée une nouvelle question dans la base de données.
- **Paramètres d'entrée** :
  - `questionData` (Object) : Les données de la question à créer.
    - `questionId` (Number) : Identifiant unique de la question.
    - `surveyId` (Number) : Identifiant unique de l'enquête associée.
    - `questionText` (String) : Texte de la question.
- **Retour** :
  - `Success` : Retourne l'objet de la question créée si l'opération est réussie.
  - `Failure` : Retourne une erreur indiquant pourquoi l'opération a échoué.

### 2. getQuestions()

- **Description** : Récupère toutes les questions dans la base de données.
- **Paramètres d'entrée** : Aucun
- **Retour** :
  - `Success` : Retourne une liste de questions si l'opération est réussie.
  - `Failure` : Retourne une erreur indiquant pourquoi l'opération a échoué.

### 3. getQuestionById(questionId)

- **Description** : Récupère une question par son ID.
- **Paramètres d'entrée** :
  - `questionId` (Number) : Identifiant unique de la question.
- **Retour** :
  - `Success` : Retourne la question correspondante si l'opération est réussie.
  - `Failure` : Retourne une erreur indiquant pourquoi l'opération a échoué.

### 4. updateQuestionById(questionId, updateData)

- **Description** : Met à jour une question par son ID.
- **Paramètres d'entrée** :
  - `questionId` (Number) : Identifiant unique de la question.
  - `updateData` (Object) : Données à mettre à jour.
    - `questionText` (String) : Texte de la question.
- **Retour** :
  - `Success` : Retourne l'objet de la question mise à jour si l'opération est réussie.
  - `Failure` : Retourne une erreur indiquant pourquoi l'opération a échoué.

### 5. deleteQuestionById(questionId)

- **Description** : Supprime une question par son ID.
- **Paramètres d'entrée** :
  - `questionId` (Number) : Identifiant unique de la question.
- **Retour** :
  - `Success` : Retourne une confirmation de suppression si l'opération est réussie.
  - `Failure` : Retourne une erreur indiquant pourquoi l'opération a échoué.

---

## Module answerModule.js

### 1. createAnswer(answerData)

- **Description** : Crée une nouvelle réponse dans la base de données.
- **Paramètres d'entrée** :
  - `answerData` (Object) : Les données de la réponse à créer.
    - `answerId` (Number) : Identifiant unique de la réponse.
    - `surveyId` (Number) : Identifiant unique de l'enquête associée.
    - `questionId` (Number) : Identifiant unique de la question associée.
    - `answerText` (String) : Texte de la réponse.
- **Retour** :
  - `Success` : Retourne l'objet de la réponse créée si l'opération est réussie.
  - `Failure` : Retourne une erreur indiquant pourquoi l'opération a échoué.

### 2. getAnswers()

- **Description** : Récupère toutes les réponses dans la base de données.
- **Paramètres d'entrée** : Aucun
- **Retour** :
  - `Success` : Retourne une liste de réponses si l'opération est réussie.
  - `Failure` : Retourne une erreur indiquant pourquoi l'opération a échoué.

### 3. getAnswerById(answerId)

- **Description** : Récupère une réponse par son ID.
- **Paramètres d'entrée** :
  - `answerId` (Number) : Identifiant unique de la réponse.
- **Retour** :
  - `Success` : Retourne la réponse correspondante si l'opération est réussie.
  - `Failure` : Retourne une erreur indiquant pourquoi l'opération a échoué.

### 4. updateAnswerById(answerId, updateData)

- **Description** : Met à jour une réponse par son ID.
- **Paramètres d'entrée** :
  - `answerId` (Number) : Identifiant unique de la réponse.
  - `updateData` (Object) : Données à mettre à jour.
    - `answerText` (String) : Texte de la réponse.
- **Retour** :
  - `Success` : Retourne l'objet de la réponse mise à jour si l'opération est réussie.
  - `Failure` : Retourne une erreur indiquant pourquoi l'opération a échoué.

### 5. deleteAnswerById(answerId)

- **Description** : Supprime une réponse par son ID.
- **Paramètres d'entrée** :
  - `answerId` (Number) : Identifiant unique de la réponse.
- **Retour** :
  - `Success` : Retourne une confirmation de suppression si l'opération est réussie.
  - `Failure` : Retourne une erreur indiquant pourquoi l'opération a échoué.

## Authors

[Oumar Djiby Ndiaye ](https://github.com/OUMARNDIAYE49/ABC_Corporation_Survey.git)
