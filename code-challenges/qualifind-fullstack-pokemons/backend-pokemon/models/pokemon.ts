import mongoose, {Schema} from 'mongoose'
import {PokemonI} from '../interfaces/pokemonI'


const pokemonSchema: Schema = new Schema({
    nombre: {type: String, required: true},
    poder: {type: String, required: true},
    vida: {type: Number, required: true}
})

const Pokemon = mongoose.model<PokemonI>('Pokemon', pokemonSchema)

export default Pokemon

