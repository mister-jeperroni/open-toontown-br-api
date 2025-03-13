const MongoDatabase = require('../databases/MongoDatabase');

class DatabaseFactory {
    static async create(config) {
        const db = new MongoDatabase();
        await db.connect(config.uri);
        return db;
    }
}

module.exports = DatabaseFactory;