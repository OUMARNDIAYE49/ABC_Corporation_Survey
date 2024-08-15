const { MongoClient, ObjectId } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'ABC_Corporation_Surveys';

const client = new MongoClient(url);

const getCollection = async () => {
    await client.connect();
    const db = client.db(dbName);
    return db.collection('questions');
};

module.exports = {
    // Créer une nouvelle question
    createQuestion: async (questionData) => {
        const collection = await getCollection();
        return collection.insertOne(questionData);
    },

    // Obtenir toutes les questions
    getQuestions: async () => {
        const collection = await getCollection();
        return collection.find().toArray();
    },

    // Obtenir une question par ID
    getQuestionById: async (questionId) => {
        const collection = await getCollection();
        return collection.findOne({ questionId: parseInt(questionId) });
    },

    // Mettre à jour une question par ID
    updateQuestionById: async (questionId, updateData) => {
        const collection = await getCollection();
        return collection.updateOne({ questionId: parseInt(questionId) }, { $set: updateData });
    },

    // Supprimer une question par ID
    deleteQuestionById: async (questionId) => {
        const collection = await getCollection();
        return collection.deleteOne({ questionId: parseInt(questionId) });
    }
};
