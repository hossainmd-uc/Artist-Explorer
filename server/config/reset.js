import { pool } from "./database.js"
import './dotenv.js'
import artistData from "../data/artists.js"

async function createArtistsTable(){
    const createTableQuery = `
        DROP TABLE IF EXISTS artists;

        CREATE TABLE IF NOT EXISTS artists (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            image VARCHAR(255) NOT NULL

        )`

    try {
        const res = await pool.query(createTableQuery)
        console.log('artists table created successfully')
    }catch(err) {
        console.error('error creating artists table', err)
    }

}

createArtistsTable()

async function seedGiftsTable() {

    const insertQuery =  'INSERT INTO artists (name, image, description) VALUES ($1, $2, $3)'

    for (const a of artistData) {
        const { rows } = await pool.query(insertQuery, [a.name, a.image, a.description]);
        console.log(`✅ ${a.name} added successfully`);
    }

}

seedGiftsTable()