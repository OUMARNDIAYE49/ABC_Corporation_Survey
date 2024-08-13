const { MongoClient, ObjectId } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'ABC_Corporation_Surveys';

const client = new MongoClient(url);

const getCollection = async () => {
    await client.connect();
    const db = client.db(dbName);
    return db.collection('surveys');
};

module.exports = {
    // Créer une nouvelle enquête
    createSurvey: async (surveyData) => {
        const collection = await getCollection();
        return collection.insertOne(surveyData);
    },

    // Obtenir toutes les enquêtes
    getSurveys: async () => {
        const collection = await getCollection();
        return collection.find().toArray();
    },

    // Obtenir une enquête par ID
    getSurveyById: async (surveyId) => {
        const collection = await getCollection();
        return collection.findOne({ surveyId: parseInt(surveyId) });
    },

    // Mettre à jour une enquête par ID
    updateSurveyById: async (surveyId, updateData) => {
        const collection = await getCollection();
        return collection.updateOne({ surveyId: parseInt(surveyId) }, { $set: updateData });
    },

    // Supprimer une enquête par ID
    deleteSurveyById: async (surveyId) => {
        const collection = await getCollection();
        return collection.deleteOne({ surveyId: parseInt(surveyId) });
    }
};
