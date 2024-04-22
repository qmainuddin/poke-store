import { combineReducers } from "redux";
import PokemonReducer from "./PokemonReducer";
import PokemonDataReducer from "./PokemonDataReducer";
import { enableMapSet } from 'immer';
import CartReducer from "./CartReducer";

enableMapSet();

const rootReducer = combineReducers({
    pokemon: PokemonReducer,
    pokemonData: PokemonDataReducer,
    cart: CartReducer
});

export default rootReducer;