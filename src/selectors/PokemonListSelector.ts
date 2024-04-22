import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const getPokemonListState = (state: RootState) => state.pokemon.list;

export const selectPokemonList = createSelector(
  [getPokemonListState],
  (list) => list
);