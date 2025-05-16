import {Request} from 'express'

export interface CustomPokemonRequest extends Request {
    params: {
        id: string
    }
}