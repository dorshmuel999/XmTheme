import {Db, MongoClient} from "mongodb";

let client: MongoClient | null = null; // Type: MongoClient or null
let db: Db | null = null; // Type: Db (MongoDB database instance) or null

export async function connectToDB() {
    if (db) {
        return db;
    }
    try {
        const uri = 'mongodb://localhost:27017';
        client = new MongoClient(uri);
        // Connect to MongoDB
        await client.connect();
        console.log('Connected to MongoDB');

        // Access a specific database
        db = client.db('test'); // Use the 'test' database
        const collection = db.collection('example');

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

/**
 * Retrieves the MongoDB database instance.
 * Throws an error if the database is not initialized.
 */
export const getDb = (): Db => {
    if (!db) {
        throw new Error('Database is not initialized. Call connectToDb() first.');
    }
    return db;
};

/**
 * Closes the MongoDB connection.
 */
export const closeDb = async (): Promise<void> => {
    if (client) {
        await client.close();
        console.log('MongoDB connection closed.');
    }
};