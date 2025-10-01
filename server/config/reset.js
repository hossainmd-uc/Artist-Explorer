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
    artistData.forEach((artist) => {
        const insertQuery = {
            text: 'INSERT INTO artists (name, image, description) VALUES ($1, $2, $3)'
        }
        const values = [
            artist.name,
            artist.image,
            artist.description,
            ]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting gift', err)
                return
            }

            console.log(`✅ ${artist.name} added successfully`)
        })
    })
}

seedGiftsTable()