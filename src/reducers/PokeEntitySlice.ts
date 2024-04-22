import { EntityId, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { Pokemon } from '../interfaces';

export const pokemonAdapter = createEntityAdapter<Pokemon>();

const initialState = pokemonAdapter.getInitialState();

const entitiesSlice = createSlice({
  name: 'entities',
  initialState,
  reducers: {},
});

export const { selectAll: selectAllPokemon } = pokemonAdapter.getSelectors((state : any) => state.entities);

export default entitiesSlice.reducer;
