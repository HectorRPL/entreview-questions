import {Request, Response} from 'express'

import {CustomPokemonRequest} from '../interfaces/customTypesI'
import Pokemon from '../models/pokemon'

const getAllPokemon = async (req: Request, res: Response): Promise<void> => {
    try {
        const pokemons = await Pokemon.find()
        res.status(200).json(pokemons)
    } catch (error) {
        console.error('Error al obtener los pokemons:', error)
        res.status(500).json({message: 'Error al obtener los pokemons'})
    }
}

const getPokemonById = async (req: CustomPokemonRequest, res: Response): Promise<void> => {
    try {
        const {id} = req.params
        const pokemonById = await Pokemon.findById(id)

        if (!pokemonById) {
            res.status(404).json({message: 'Pokemon encontrado'})
            return
        }
        res.status(200).json(pokemonById)
    } catch (error) {
        console.error('Error al obtener el pokemon por ID:', error)
        res.status(500).json({message: 'Error al obtener el pokemon por ID'})
    }
}

const addPokemon = async (req: Request, res: Response): Promise<void> => {
    try {
        const {nombre, poder, vida} = req.body
        const newPokemon = new Pokemon({nombre, poder, vida})
        await newPokemon.save()
        res.status(201).json(newPokemon)
    } catch (error) {
        console.error('Error al añadir un nuevo pokemon:', error)
        res.status(500).json({message: 'Error al añadir un nuevo pokemon'})
    }
}

const updatePokemonById = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id

        if (!id) {
            res.status(400).json({message: 'Bad request'})
            return
        }

        const body = req.body

        if (!body) {
            res.status(400).json({message: 'Bad request'})
            return
        }

        const updatedPokemon = await Pokemon.findByIdAndUpdate(id, body, {new: true})

        if (!updatedPokemon) {
            res.status(404).json({message: 'Pokemon no encontrado'})
            return
        }

        res.status(200).json(updatedPokemon)
    } catch (error) {
        console.error('Error al actualizar el pokemon por ID:', error)
        res.status(500).json({message: 'Error al actualizar el pokemon por ID'})
    }
}

const deletePokemonById = async (req: Request, res: Response): Promise<void> => {
    try {
        const {id} = req.params

        if (!id) {
            res.status(400).json({message: 'Bad request'})
            return
        }

        const deletedPokemon = await Pokemon.findByIdAndDelete(id)

        if (!deletedPokemon) {
            res.status(404).json({message: 'Pokemon not found'})
            return
        }

        res.status(200).json({message: 'Pokemon deleted successfully'})
    } catch (error) {
        console.error('Error al eliminar el pokemon por ID:', error)
        res.status(500).json({message: 'Error al eliminar el pokemon por ID'})
    }
}


export {
    getAllPokemon,
    getPokemonById,
    addPokemon,
    updatePokemonById,
    deletePokemonById
}
