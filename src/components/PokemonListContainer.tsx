import { FC } from "react";
import Loader from "./Loader";
import PokemonList from "../interfaces/PokemonList";
import { FlatList } from "react-native-gesture-handler";
import PokemonCard from "./PokemonCard";
import { View } from "react-native";
import Pokemon from "../interfaces/Pokemon";
import { default as commonStyle } from "../common/Styles";

type Props = {
    pokemons?: any[],
    loading: boolean,
}

function loadMore() {
    console.log("Load more is called")
}

const PokemonListContainer = (props: Props) => {
    const { pokemons, loading } = props;

    return (
            <FlatList
                data={pokemons}
                renderItem={({ item }) => <PokemonCard url={item.url} />}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
                onEndReached={loadMore}
                onEndReachedThreshold={.1}
            />
        
    )
}

export default PokemonListContainer;