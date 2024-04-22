import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPokemonData } from "../services/PokecmonService";
import { Pokemon, PokemonList } from "../interfaces";

interface PokemonDataState {
    loading: boolean,
    data: Map<string, any>,
    selectedCount: number,
    error: string | null | undefined
}

const initialState : PokemonDataState = {
    loading: false,
    data: new Map<string, any>(),
    selectedCount: 0,
    error: null
}

const pokemonDataSlice = createSlice ({
    name: 'pokemonData',
    initialState,
    reducers: {
        changeSelection: {
            reducer: (state, action: PayloadAction<any>) => {
                if (action.payload.details.selected) {
                    state.selectedCount++;
                } else {
                    if (state.selectedCount > 0) state.selectedCount--;
                }
                // console.log('==========Pokemon Reducer Start================');
                // console.log(action.payload);
                // console.log('Selected Count: ' + state.selectedCount);
                // console.log('==========Pokemon Reducer End=======');
                state.data.set(action.payload.url, action.payload.details);
            },
            prepare: (url: string, item: any, selected: boolean) => {
                item = {
                    ...item,
                    selected: selected
                };
                return {
                    payload: {
                        url: url,
                        details: item 
                    }
                }
            }
        }
    },
    extraReducers: (builder) => {
        builder
        //Implemented lazy loading because, this slice will call fetchPokemonData only when this is dispatched
        .addCase(fetchPokemonData.pending, (state) => {
            state.loading = false;
            state.error = null;
        }).addCase(fetchPokemonData.fulfilled, (state, action: PayloadAction<{url: string, details: any}>) => {
            state.loading = false;
            state.error = null;
            state.data.set(action.payload.url, action.payload.details);
        }).addCase(fetchPokemonData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export const fetchPokemonDataActions = fetchPokemonData;
export const { changeSelection } = pokemonDataSlice.actions;
export default pokemonDataSlice.reducer;