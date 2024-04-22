import { AnyAction } from '@reduxjs/toolkit';
import pokemonReducer, { fetchPokemonListActions } from '../src/reducers/PokemonReducer';

describe('Pokemon Reducer', () => {
  it('should handle fetching pending', () => {
    const nextState = pokemonReducer(undefined, fetchPokemonListActions.pending("args", "pending"));
    expect(nextState.loading).toBe(true);
    expect(nextState.error).toBe(null);
  });

  it('should handle fetching fulfilled', () => {
    const payload = [{ id: 1, name: 'Pikachu' }];
    const nextState = pokemonReducer(undefined, fetchPokemonListActions.fulfilled(payload, 'requestId', 'arg'));
    expect(nextState.loading).toBe(false);
    expect(nextState.error).toBe(null);
    expect(nextState.list).toEqual(payload);
  });

  it('should handle fetching rejected', () => {
    const error = { message: 'Failed to fetch Pokemon list', name: "sample" };
    const nextState = pokemonReducer(undefined, fetchPokemonListActions.rejected(error, 'requestId', 'arg'));
    expect(nextState.loading).toBe(false);
    expect(nextState.error).toBe(error.message);
  });

  it('should return initial state for unknown action', () => {
    const nextState = pokemonReducer(undefined, { type: 'UNKNOWN_ACTION' } as AnyAction);
    expect(nextState).toEqual({
      loading: false,
      list: [],
      error: null,
    });
  });
});




// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import pokemonReducer from '../src/reducers/PokemonReducer';
// import { fetchPokemonListActions } from '../src/reducers/PokemonReducer';
// import { Response } from 'node-fetch'
// import { fetchPokemonList } from '../src/services/PokecmonService';

// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);

// describe('Pokemon Reducer', () => {
//     it('handles fetching pending', () => {
//       const nextState = pokemonReducer(undefined, fetchPokemonListActions.pending());
//       expect(nextState.loading).toBe(true);
//       expect(nextState.error).toBe(null);
//     });

//     //added for only one api

//     describe('Pokemon Async Actions', () => {
//       it('creates fetchPokemonList action', async () => {
//         const store = mockStore({});
//         const expectedActions = [
//           fetchPokemonListActions.pending(),
//           fetchPokemonListActions.fulfilled([{ id: 1, name: 'Pikachu' }]),
//         ];

//         const mockResponse = {
//           json: jest.fn().mockResolvedValue([{ id: 1, name: 'Pikachu' }]),
//         };
    
//         // Mock the API call
//         jest.spyOn(global, 'fetch').mockResolvedValue({
//           json: mockResponse.json,
//         } as Response);
    
//         await store.dispatch(fetchPokemonList("abcd"));
//         expect(store.getActions()).toEqual(expectedActions);
//       });
//   });