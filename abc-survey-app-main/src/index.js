const surveys = require('./surveys');
const questions = require('./questions');
const answers = require('./answers');

// CRUD pour la collection surveys


// Créer une nouvelle enquête
// const newSurvey = {
//     surveyId: 1,
//     name: "Enquête de Satisfaction 001",
//     description: "Enquête visant à évaluer la satisfaction des clients concernant nos services.",
//     createdAt: "2024-07-25T08:00:00Z",
//     createdBy: {
//         employeeName: "Jane Smith",
//         employeeRole: "Responsable du service client"
//     }
// };

// surveys.createSurvey(newSurvey)
//     .then(result => {
//         console.log('Survey created:', result.insertedId);
//     })
//     .catch(error => {
//         console.error('Error creating survey:', error);
//     });

// Obtenir toutes les enquêtes
//  surveys.getSurveys()
//      .then(results => {
//          console.log('All surveys:', results);
//      })
//      .catch(error => {
//         console.error('Error fetching surveys:', error);
//      });

// Obtenir une enquête par ID
// surveys.getSurveyById(1)
//     .then(result => {
//         console.log('Survey with ID 1:', result);
//     })
//     .catch(error => {
//         console.error('Error fetching survey:', error);
//     });

// Mettre à jour une enquête par ID
 const updatedSurveyData = {
     description: "Enquête mise à jour visant à évaluer la satisfaction des clients."
 };

 surveys.updateSurveyById(1, updatedSurveyData)
     .then(result => {
         console.log('Survey updated:', result.modifiedCount);
     })
     .catch(error => {
         console.error('Error updating survey:', error);
     });

// Supprimer une enquête par ID
// surveys.deleteSurveyById(1)
//     .then(result => {
//         console.log('Survey deleted:', result.deletedCount);
//     })
//     .catch(error => {
//         console.error('Error deleting survey:', error);
//     });


// CRUD pour la collection questions

// Créer une nouvelle question
// const newQuestion = {
//     questionId: 1,
//     surveyId: 1,
//     title: "Comment évalueriez-vous notre service ?",
//     type: "rating",
//     options: {
//         minValue: 1,
//         maxValue: 5,
//         step: 1
//     }
// };

// questions.createQuestion(newQuestion)
//     .then(result => {
//         console.log('Question created:', result.insertedId);
//     })
//     .catch(error => {
//         console.error('Error creating question:', error);
//     });

// Obtenir toutes les questions
//  questions.getQuestions()
//      .then(results => {
//          console.log('All questions:', results);
//     })
//     .catch(error => {
//          console.error('Error fetching questions:', error);
//      });

// Obtenir une question par ID
//  questions.getQuestionById(2)
//      .then(result => {
//          console.log('Question with ID 1:', result);
//      })
//      .catch(error => {
//          console.error('Error fetching question:', error);
//      });

// Mettre à jour une question par ID
//  const updatedQuestionData = {
//      title: "Comment évaluez-vous notre service global ?"
//  };

//  questions.updateQuestionById(0, updatedQuestionData)
//      .then(result => {
//          console.log('Question updated:', result.modifiedCount);
//      })
//      .catch(error => {
//          console.error('Error updating question:', error);
//      });

// Supprimer une question par ID
//  questions.deleteQuestionById(1)
//      .then(result => {
//          console.log('Question deleted:', result.deletedCount);
//      })
//      .catch(error => {
//          console.error('Error deleting question:', error);
//      });
 

// CRUD pour la collection answers

// Créer une nouvelle réponse
// const newAnswer = {
//     answerId: 1,
//     questionId: 1,
//     title: "Très satisfait"
// };

// answers.createAnswer(newAnswer)
//     .then(result => {
//         console.log('Answer created:', result.insertedId);
//     })
//     .catch(error => {
//         console.error('Error creating answer:', error);
//     });

// Obtenir toutes les réponses
//   answers.getAnswers()
//      .then(results => {
//           console.log('All answers:', results);
//      })
//      .catch(error => {
//          console.error('Error fetching answers:', error);
//    });

// Obtenir une réponse par ID
//  answers.getAnswerById(1)
//      .then(result => {
//          console.log('Answer with ID 1:', result);
//      })
//      .catch(error => {
//          console.error('Error fetching answer:', error);
//      });

// Mettre à jour une réponse par ID
// const updatedAnswerData = {
//      title: "faible satisfait"
//  };
//  answers.updateAnswerById(1, updatedAnswerData)
//      .then(result => {
//          console.log('Answer updated:', result.modifiedCount);
//     })
//      .catch(error => {
//          console.error('Error updating answer:', error);
//      });

// Supprimer une réponse par ID
//  answers.deleteAnswerById(1)
//      .then(result => {
//          console.log('Answer deleted:', result.deletedCount);
//      })
//      .catch(error => {
//          console.error('Error deleting answer:', error);
//      });
