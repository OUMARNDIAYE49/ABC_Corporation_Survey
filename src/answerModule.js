const { client, dbName } = require("./config/database");

const getCollection = async () => {
  await client.connect();
  console.log("Connexion à la base de données réussie");
  const db = client.db(dbName);
  return db.collection("answers");
};

// Créer une nouvelle réponse
const createAnswer = async (answerData) => {
  const collection = await getCollection();

  // Vérifier si la réponse existe déjà
  const existingAnswer = await collection.findOne({
    answerId: answerData.answerId,
  });
  if (existingAnswer) {
    console.log("Une réponse avec cet ID existe déjà:", answerData.answerId);
    return { message: "La réponse existe déjà" };
  }

  console.log("Insertion d'une nouvelle réponse:", answerData);
  const result = await collection.insertOne(answerData);
  console.log("Réponse insérée avec succès, ID:", result.insertedId);
  return result;
};

// Obtenir toutes les réponses
const getAnswers = async () => {
  const collection = await getCollection();
  const answers = await collection.find().toArray();
  console.log("Réponses récupérées:", answers.length);
  console.log("Toutes les réponses:", answers);
  return answers;
};

// Obtenir une réponse par ID
const getAnswerById = async (answerId) => {
  const collection = await getCollection();
  console.log("Récupération de la réponse avec ID:", answerId);

  const answer = await collection.findOne({ answerId: parseInt(answerId) });
  if (!answer) {
    console.log(`Aucune réponse trouvée avec l'ID: ${answerId}`);
    return { message: "Réponse non trouvée" };
  }

  console.log("Réponse récupérée:", answer);
  return answer;
};

// Mettre à jour une réponse par ID
const updateAnswerById = async (answerId, updateData) => {
  const collection = await getCollection();

  const result = await collection.updateOne(
    { answerId: parseInt(answerId) },
    { $set: updateData }
  );

  if (result.matchedCount === 0) {
    console.log(
      `Aucune réponse trouvée avec l'ID: ${answerId}. Mise à jour annulée.`
    );
    return { message: "ID non trouvé, mise à jour annulée" };
  }

  console.log(`Mise à jour réussie de la réponse avec l'ID: ${answerId}`);
  return { message: "Mise à jour réussie" };
};

// Supprimer une réponse par ID
const deleteAnswerById = async (answerId) => {
  const collection = await getCollection();
  console.log("Suppression de la réponse avec ID:", answerId);

  const result = await collection.deleteOne({ answerId: parseInt(answerId) });

  if (result.deletedCount === 0) {
    console.log(
      `Aucune réponse trouvée avec l'ID: ${answerId}. Suppression annulée.`
    );
    return { message: "Réponse non trouvée, suppression annulée" };
  }

  console.log(`Suppression réussie de la réponse avec l'ID: ${answerId}`);
  return { message: "Suppression réussie" };
};

module.exports = {
  createAnswer,
  getAnswers,
  getAnswerById,
  updateAnswerById,
  deleteAnswerById,
};
