import Pokemon from "./Pokemon";
import PokemonSummary from "./PokemonSummary";

export default interface PokemonList {
    count: number,
    next: string | null | undefined,
    previous: string | null | undefined,
    results: any[]
}