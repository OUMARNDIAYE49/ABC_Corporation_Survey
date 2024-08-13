const { MongoClient, ObjectId } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'ABC_Corporation_Surveys';

const client = new MongoClient(url);

const getCollection = async () => {
    await client.connect();
    const db = client.db(dbName);
    return db.collection('answers');
};

module.exports = {
    // Créer une nouvelle réponse
    createAnswer: async (answerData) => {
        const collection = await getCollection();
        return collection.insertOne(answerData);
    },

    // Obtenir toutes les réponses
    getAnswers: async () => {
        const collection = await getCollection();
        return collection.find().toArray();
    },

    // Obtenir une réponse par ID
    getAnswerById: async (answerId) => {
        const collection = await getCollection();
        return collection.findOne({ answerId: parseInt(answerId) });
    },

    // Mettre à jour une réponse par ID
    updateAnswerById: async (answerId, updateData) => {
        const collection = await getCollection();
        return collection.updateOne({ answerId: parseInt(answerId) }, { $set: updateData });
    },

    // Supprimer une réponse par ID
    deleteAnswerById: async (answerId) => {
        const collection = await getCollection();
        return collection.deleteOne({ answerId: parseInt(answerId) });
    }
};
