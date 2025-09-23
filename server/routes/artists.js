import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

import artistData from '../data/artists.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const artistRouter = express.Router()

artistRouter.get('/', (req, res) => {
    res.status(200)
    res.json(artistData)
})

export default artistRouter
