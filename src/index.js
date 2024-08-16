const surveys = require("./surveyModule");
const questions = require("./questionModule");
const answers = require("./answerModule");

const runTests = async () => {
  try {
    // 1. Créer une enquête
    const newSurvey = {
      surveyId: 3,
      title: "Satisfaction client et moi",
      name: "Enquête de Satisfaction 001",
      description:
        "Enquête visant à évaluer la satisfaction des clients concernant nos se…",
      createdAt: "2024-07-25T08:00:00Z",
      createdBy: {
        employeeName: "Amadou Sow",
        employeeRole: "Responsable des apprenants",
      },
    };
    await surveys.createSurvey(newSurvey);

    // 2. Créer une question
    const newQuestion = {
      questionId: 5,
      surveyId: 1,
      questionText: "Quelle est votre couleur ?",
    };
    await questions.createQuestion(newQuestion);

    // 3. Créer une réponse
    const newAnswer = {
      answerId: 4,
      surveyId: 1,
      questionId: 1,
      answerText: "Noir",
    };
    await answers.createAnswer(newAnswer);

    // 4. Obtenir toutes les enquêtes
    await surveys.getSurveys();

    // 5. Obtenir toutes les questions
    await questions.getQuestions();

    // 6. Obtenir toutes les réponses
    await answers.getAnswers();

    // 7. Obtenir une enquête par ID
    await surveys.getSurveyById(5);

    // 8. Obtenir une question par ID
    await questions.getQuestionById(1);

    // 9. Obtenir une réponse par ID
    await answers.getAnswerById(1);

    // 10. Mettre à jour une enquête par ID
    await surveys.updateSurveyById(1, {
      title: "Satisfaction client - Mise à jour sans probleme",
      name: "Enquête de Satisfaction 001",
      description:
        "Enquête visant à évaluer la satisfaction des clients concernant nos se…",
      createdAt: "2024-07-25T08:00:00Z",
      createdBy: {
        employeeName: "Aly Sy",
        employeeRole: "Responsable des apprenants",
      },
    });

    // 11. Mettre à jour une question par ID
    await questions.updateQuestionById(1, {
      questionText:
        "Quelle est votre couleur préférée aujourd'hui et les jours avenir?",
    });

    // 12. Mettre à jour une réponse par ID
    await answers.updateAnswerById(1, { answerText: "Vert" });

    // 13. Supprimer une enquête par ID
    await surveys.deleteSurveyById(1);

    // 14. Supprimer une question par ID
    await questions.deleteQuestionById(1);

    // 15. Supprimer une réponse par ID
    await answers.deleteAnswerById(1);
  } catch (error) {
    console.error("Erreur lors de l'exécution des tests:", error);
  } finally {
  }
};

// Exécuter les tests
runTests();
