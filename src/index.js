const surveys = require("./surveys");
const questions = require("./questions");
const answers = require("./answers");

// const newSurvey = {
//   surveyId: 5,
//   name: "Enquête de Satisfaction 001",
//   description:
//     "Enquête visant à évaluer la satisfaction des clients .",
//   createdAt: "2024-07-25T08:00:00Z",
//   createdBy: {
//     employeeName: "Jane Smith",
//     employeeRole: "Responsable du service client",
//   },
// };

// surveys
//   .createSurvey(newSurvey)
//   .then((result) => {
//     console.log("Survey created:", result.insertedId);
//   })
//   .catch((error) => {
//     console.error("Error creating survey:", error);
//   });

// surveys
//   .getSurveys()
//   .then((results) => {
//     console.log("All surveys:", results);
//   })
//   .catch((error) => {
//     console.error("Error fetching surveys:", error);
//   });

// surveys
//   .getSurveyById(3)
//   .then((result) => {
//     console.log("Survey with ID 1:", result);
//   })
//   .catch((error) => {
//     console.error("Error fetching survey:", error);
//   });

// const updatedSurveyData = {
//   surveyId: 5,
//   name: "Enquête de Satisfaction 001",
//   description: "Enquête visant à évaluer la satisfaction des clients .",
//   createdAt: "2024-07-25T08:00:00Z",
//   createdBy: {
//     employeeName: "Mamoudou Ba",
//     employeeRole: "Responsable du service client",
//   },
// };

// surveys
//   .updateSurveyById(5, updatedSurveyData)
//   .then((result) => {
//     console.log("mise à jour succes:", result.modifiedCount);
//   })
//   .catch((error) => {
//     console.error("Error updating survey:", error);
//   });

// surveys
//   .deleteSurveyById(1)
//   .then((result) => {
//     console.log("Survey deleted:", result.deletedCount);
//   })
//   .catch((error) => {
//     console.error("Error deleting survey:", error);
//   });

// const newQuestion = {
//   questionId: 8,
//   surveyId: 1,
//   title: "Comment évalueriez-vous notre service ?",
//   type: "rating",
//   options: {
//     minValue: 1,
//     maxValue: 5,
//     step: 1,
//   },
// };

// questions
//   .createQuestion(newQuestion)
//   .then((result) => {
//     console.log("Question est ajouté:", result.insertedId);
//   })
//   .catch((error) => {
//     console.error("Erreur de création question:", error);
//   });

// questions
//   .getQuestions()
//   .then((results) => {
//     console.log("Toutes les questions:", results);
//   })
//   .catch((error) => {
//     console.error("Erreur lors de la récupération des questions:", error);
//   });

// questions
//   .getQuestionById(5)
//   .then((result) => {
//     console.log("Question avec ID 1:", result);
//   })
//   .catch((error) => {
//     console.error("Erreur lors de la récupération des questions:", error);
//   });

const updatedQuestionData = {
    questionId: 8,
    surveyId: 1,
    title: "Comment évaluez-vous notre service global ?",
    type: "rating",
    options: {
        minValue: 1,
        maxValue: 5,
        step: 1,
    },
};

questions
  .updateQuestionById(0, updatedQuestionData)
  .then((result) => {
    console.log("mis a ajoure succes:", result.modifiedCount);
  })
  .catch((error) => {
    console.error("Erreur lors de la mise à jour des questions:", error);
  });

// D;
// questions
//   .deleteQuestionById(1)
//   .then((result) => {
//     console.log("Question suprimés:", result.deletedCount);
//   })
//   .catch((error) => {
//     console.error("Erreur lors de supression des questions:", error);
//   });

// const newAnswer = {
//   answerId: 1,
//   questionId: 1,
//   title: "Très satisfait",
// };

// answers
//   .createAnswer(newAnswer)
//   .then((result) => {
//     console.log("Answer created:", result.insertedId);
//   })
//   .catch((error) => {
//     console.error("Error creating answer:", error);
//   });

// answers
//   .getAnswers()
//   .then((results) => {
//     console.log("All answers:", results);
//   })
//   .catch((error) => {
//     console.error("Error fetching answers:", error);
//   });

// answers
//   .getAnswerById(1)
//   .then((result) => {
//     console.log("Answer with ID 1:", result);
//   })
//   .catch((error) => {
//     console.error("Error fetching answer:", error);
//   });

// const updatedAnswerData = {
//   title: "faible satisfait",
// };
// answers
//   .updateAnswerById(1, updatedAnswerData)
//   .then((result) => {
//     console.log("Answer updated:", result.modifiedCount);
//   })
//   .catch((error) => {
//     console.error("Error updating answer:", error);
//   });

// answers
//   .deleteAnswerById(1)
//   .then((result) => {
//     console.log("Answer deleted:", result.deletedCount);
//   })
//   .catch((error) => {
//     console.error("Error deleting answer:", error);
//   });
