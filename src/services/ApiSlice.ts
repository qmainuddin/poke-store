import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Pokemon } from '../interfaces';
import { values } from 'src/common/Constants';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: values.BASE_URL }),
  endpoints: (builder) => ({
    getPokemonById: builder.query<Pokemon, string>({
      query: (id) => `pokemon/${id}`,
    }),
  }),
});

export const { useGetPokemonByIdQuery } = pokemonApi;
