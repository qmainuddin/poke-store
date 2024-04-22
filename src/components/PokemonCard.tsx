import { Image, Text, TouchableOpacity, View } from "react-native";
import Pokemon from "../interfaces/Pokemon";
import { FC, useEffect, useMemo, useState } from "react";
import { StyleSheet } from "react-native";
import { default as commonStyle } from '../common/Styles'
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonData } from "../services/PokecmonService";
import { fetchPokemonDataActions, changeSelection } from '../reducers/PokemonDataReducer'
import Loader from "./Loader";

type Props = {
    url: string
}

const PokemonCard : FC<Props> = ({ url }) : any => {
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(false);

    const { loading, data, error } = useSelector((state: any) => state.pokemonData);

    // Memoize the list using useMemo to prevent unnecessary re-renders
    const memoizedPokemonData = useMemo(() => data, [data]);

    const fetchDataForPokemon = () => {
        dispatch(fetchPokemonDataActions(url));
    };

    useEffect(() => {
        fetchDataForPokemon();
    }, [url]);

    // useEffect(() => {
    //     dispatch(changeSelection(url, details, !selected));
    // }, [selected]);

    if (error) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text>Error: {error}</Text>
            </View>
          );
    }
    // const details = data.get(url);
    const details = memoizedPokemonData.get(url);
    
    return (
        <View style={[styles.container, {backgroundColor: '#f7f2f5'}]}>
            {
                !details ? (<Loader loading={true}/>) :
                (
                    <TouchableOpacity style={[commonStyle.centerAlign, 
                        details.selected ? styles.selectedBackground : null]} key={details.id}
                        onPress={() => {
                            setSelected(!selected);
                            dispatch(changeSelection(url, details, !selected));
                            }}>
                        <View style={styles.imageContainer}>
                            <Image source={{ uri: details.sprites.front_default }} style={styles.image} resizeMode={"contain"}/>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={[styles.nameText, details.selected ? styles.selectedBackground : null]}>{details.name}</Text>
                        </View>
                    </TouchableOpacity>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        margin: 5,
        borderColor: '#32a852',
        borderRadius: 10,
        borderWidth: 1,
    },
    imageContainer: {
        flex: 2
    },
    textContainer: {
        flex: 1,
    },
    nameText: {
        fontSize: 14,
        color: '#333'
    },
    image: {
        height: 50,
        width: 50,
    },
    selectedBackground: {
        backgroundColor: '#32a852',
        color: '#ffffff'
    }
})

export default PokemonCard;