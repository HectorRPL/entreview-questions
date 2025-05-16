import express from 'express'

import {addPokemon, deletePokemonById, getAllPokemon, getPokemonById, updatePokemonById} from '../controllers/pokemon'


const router = express.Router()

router.get('/pokemon', getAllPokemon)

router.get('/pokemon/:id', getPokemonById)

router.post('/pokemon', addPokemon)

router.put('/pokemon/:id', updatePokemonById)

router.delete('/pokemon/:id', deletePokemonById)

export default router