import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPokemonData, fetchPokemonList } from "../services/PokecmonService";
import { PokemonList } from "../interfaces";

interface PokemonState {
    loading: boolean,
    list: any[],
    error: string | null | undefined
}

const initialState : PokemonState = {
    loading: false,
    list: [],
    error: null
}

const pokemonSlice = createSlice ({
    name: 'pokemon',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchPokemonList.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(fetchPokemonList.fulfilled, (state, action: PayloadAction<any[]>) => {
            state.loading = false;
            state.error = null;
            state.list = action.payload;
        }).addCase(fetchPokemonList.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export default pokemonSlice.reducer;