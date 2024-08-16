const { client, dbName } = require("./config/database");

const getCollection = async () => {
  await client.connect();
  console.log("Connexion à la base de données réussie");
  const db = client.db(dbName);
  return db.collection("surveys");
};

// Créer une nouvelle enquête
const createSurvey = async (surveyData) => {
  const collection = await getCollection();

  // Vérifier si l'enquête existe déjà
  const existingSurvey = await collection.findOne({
    surveyId: surveyData.surveyId,
  });
  if (existingSurvey) {
    console.log("Une enquête avec cet ID existe déjà:", surveyData.surveyId);
    return { message: "L'enquête existe déjà" };
  }

  console.log("Insertion d'une nouvelle enquête:", surveyData);
  const result = await collection.insertOne(surveyData);
  console.log("Enquête insérée avec succès, ID:", result.insertedId);
  return result;
};

// Obtenir toutes les enquêtes
const getSurveys = async () => {
  const collection = await getCollection();
  const surveys = await collection.find().toArray();
  console.log("Enquêtes récupérées:", surveys.length);
  return surveys;
};

// Obtenir une enquête par ID
const getSurveyById = async (surveyId) => {
  const collection = await getCollection();
  console.log("Récupération de l'enquête avec ID:", surveyId);

  const survey = await collection.findOne({ surveyId: parseInt(surveyId) });
  if (!survey) {
    console.log(`Aucune enquête trouvée avec l'ID: ${surveyId}`);
    return { message: "Enquête non trouvée" };
  }

  console.log("Enquête récupérée:", survey);
  return survey;
};

// Mettre à jour une enquête par ID
const updateSurveyById = async (surveyId, updateData) => {
  const collection = await getCollection();
  const result = await collection.updateOne(
    { surveyId: parseInt(surveyId) },
    { $set: updateData }
  );

  if (result.matchedCount === 0) {
    console.log(
      `Aucune enquête trouvée avec l'ID: ${surveyId}. Mise à jour annulée.`
    );
    return { message: "ID non trouvé, mise à jour annulée" };
  }

  console.log(`Mise à jour réussie de l'enquête avec l'ID: ${surveyId}`);
  return { message: "Mise à jour réussie" };
};

// Supprimer une enquête par ID
const deleteSurveyById = async (surveyId) => {
  const collection = await getCollection();
  console.log("Suppression de l'enquête avec ID:", surveyId);

  const result = await collection.deleteOne({ surveyId: parseInt(surveyId) });

  if (result.deletedCount === 0) {
    console.log(
      `Aucune enquête trouvée avec l'ID: ${surveyId}. Suppression annulée.`
    );
    return { message: "Enquête non trouvée, suppression annulée" };
  }

  console.log(`Suppression réussie de l'enquête avec l'ID: ${surveyId}`);
  return { message: "Suppression réussie" };
};

module.exports = {
  createSurvey,
  getSurveys,
  getSurveyById,
  updateSurveyById,
  deleteSurveyById,
};
