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
    const surveysList = await surveys.getSurveys();
    console.log("Toutes les enquêtes:", surveysList);

    // 5. Obtenir toutes les questions
    const questionsList = await questions.getQuestions();
    console.log("Toutes les questions:", questionsList);

    // 6. Obtenir toutes les réponses
    const answersList = await answers.getAnswers();
    console.log("Toutes les réponses:", answersList);

    // 7. Obtenir une enquête par ID
    const survey = await surveys.getSurveyById(5);

    // 8. Obtenir une question par ID
    const question = await questions.getQuestionById(1);

    // 9. Obtenir une réponse par ID
    const answer = await answers.getAnswerById(1);

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

    // 16. Vérifier la suppression
    const surveysAfterDeletion = await surveys.getSurveys();
    console.log("Toutes les enquêtes après suppression:", surveysAfterDeletion);

    const questionsAfterDeletion = await questions.getQuestions();
    console.log(
      "Toutes les questions après suppression:",
      questionsAfterDeletion
    );

    const answersAfterDeletion = await answers.getAnswers();
    console.log("Toutes les réponses après suppression:", answersAfterDeletion);
  } catch (error) {
    console.error("Erreur lors de l'exécution des tests:", error);
  } finally {
  }
};

// Exécuter les tests
runTests();
