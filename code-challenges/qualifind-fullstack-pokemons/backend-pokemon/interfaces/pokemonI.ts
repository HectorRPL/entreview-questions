import {Document} from 'mongoose';

export interface PokemonI extends Document {
    nombre: string;
    poder: string;
    vida: number;
}