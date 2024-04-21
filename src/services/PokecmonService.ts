import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Pokemon, PokemonList } from '../interfaces';
import { values } from '../common/Constants';

export const fetchPokemonList = createAsyncThunk(
    'pokemon/fetchPokemonList',
    async (url: string) : Promise<any> => {
        const response = await axios.get(url);
        return response.data;
    }
)

export const fetchPokemonData = createAsyncThunk(
    'pokemonData/fetchPokemonData',
    async (url: string) => {
        const response = await axios.get(url);
        let testVal : Pokemon = {
            id: response.data.id,
            name: response.data.name,
            sprites: {
                front_default: response.data.sprites.front_default,
                back_default: response.data.sprites.back_default,
            },
            weight: response.data.weight
        };
        
        return {
            url: url,
            details: testVal
        };
    }
)