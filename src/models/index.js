const DatabaseFactory = require('../databases/DatabaseFactory');
const UserModel = require('./UserModel');
const AstronModel = require('./AstronModel');

class ModelManager {
    constructor() {
        this.databases = {};
        this.models = {};
    }

    async initialize(config) {
        // Configura banco de dados para usuários
        const userDb = await DatabaseFactory.create(
            {
                uri: process.env.MONGODB_URI,
                baseDir: config.userDbPath
            }
        );

        // Configura banco de dados para Astron
        const astronDb = await DatabaseFactory.create(
            {
                uri: process.env.MONGODB_URI,
                baseDir: config.yamlDir
            }
        );

        // Inicializa os models
        this.models.user = new UserModel(userDb);
        this.models.astron = new AstronModel(astronDb);

        console.log(`Models inicializados`);
    }

    getModel(name) {
        if (!this.models[name]) {
            throw new Error(`Model '${name}' não encontrado`);
        }
        return this.models[name];
    }
}

module.exports = new ModelManager();