import express, {Request, Response} from 'express'
import cors from 'cors'
import pokemonRoutes from './routes/pokemon'

require('dotenv').config()
const {dbConnection} = require('./database/config')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

// middleware para habilitar cors
app.use(cors())

// conectar a mongodb usando mongoose
dbConnection().then((r: any) => console.log('r', r))

// Rutas de ejemplo inicial
app.get('/', (req: Request, res: Response) => res.send('Pokemon app'))

app.use('/api', pokemonRoutes)

// Iniciar el servidor
app.listen(PORT, () => console.log(`\x1b[33m SERVER ON => http://localhost:${PORT}`))

