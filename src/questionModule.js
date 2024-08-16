const { client, dbName } = require("./config/database");

const getCollection = async () => {
  await client.connect();
  console.log("Connexion à la base de données réussie");
  const db = client.db(dbName);
  return db.collection("questions");
};

// Créer une nouvelle question
const createQuestion = async (questionData) => {
  const collection = await getCollection();

  // Vérifier si la question existe déjà
  const existingQuestion = await collection.findOne({
    questionId: questionData.questionId,
  });
  if (existingQuestion) {
    console.log(
      "Une question avec cet ID existe déjà:",
      questionData.questionId
    );
    return { message: "La question existe déjà" };
  }

  console.log("Insertion d'une nouvelle question:", questionData);
  const result = await collection.insertOne(questionData);
  console.log("Question insérée avec succès, ID:", result.insertedId);
  return result;
};

// Obtenir toutes les questions
const getQuestions = async () => {
  const collection = await getCollection();
  const questions = await collection.find().toArray();
  console.log("Questions récupérées:", questions.length);
  console.log("Toutes les questions:", questions);
  return questions;
};

// Obtenir une question par ID
const getQuestionById = async (questionId) => {
  const collection = await getCollection();
  console.log("Récupération de la question avec ID:", questionId);

  const question = await collection.findOne({
    questionId: parseInt(questionId),
  });
  if (!question) {
    console.log(`Aucune question trouvée avec l'ID: ${questionId}`);
    return { message: "Question non trouvée" };
  }

  console.log("Question récupérée:", question);
  return question;
};

// Mettre à jour une question par ID
const updateQuestionById = async (questionId, updateData) => {
  const collection = await getCollection();
  const result = await collection.updateOne(
    { questionId: parseInt(questionId) },
    { $set: updateData }
  );

  if (result.matchedCount === 0) {
    console.log(
      `Aucune question trouvée avec l'ID: ${questionId}. Mise à jour annulée.`
    );
    return { message: "ID non trouvé, mise à jour annulée" };
  }

  console.log(`Mise à jour réussie de la question avec l'ID: ${questionId}`);
  return { message: "Mise à jour réussie" };
};

// Supprimer une question par ID
const deleteQuestionById = async (questionId) => {
  const collection = await getCollection();
  console.log("Suppression de la question avec ID:", questionId);

  const result = await collection.deleteOne({
    questionId: parseInt(questionId),
  });
  if (result.deletedCount === 0) {
    console.log(
      `Aucune question trouvée avec l'ID: ${questionId}. Suppression annulée.`
    );
    return { message: "Question non trouvée, suppression annulée" };
  }

  console.log(`Suppression réussie de la question avec l'ID: ${questionId}`);
  return { message: "Suppression réussie" };
};

module.exports = {
  createQuestion,
  getQuestions,
  getQuestionById,
  updateQuestionById,
  deleteQuestionById,
};
