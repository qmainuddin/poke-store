import { FC, useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import {default as commonStyles} from '../common/Styles';
import PokemonList from '../interfaces/PokemonList';
import Pokemon from '../interfaces/Pokemon';
import { Loader, PokemonListContainer } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonList, fetchPokemonData } from '../services/PokecmonService';
import { values } from '../common/Constants';
import { TouchableOpacity } from 'react-native-gesture-handler';



const Home: FC = ({}) => {
    const dispatch = useDispatch();
    const { loading, list, error } = useSelector((state: any) => state.pokemon);

    useEffect(() => {
        dispatch(fetchPokemonList(values.BASE_URL));
    }, [dispatch])


    const gotoPage = (url: string) => {
        if (url) {
            dispatch(fetchPokemonList(url));
        }
    }
    
    return (
        <View style={[commonStyles.main, commonStyles.contentPadding, {backgroundColor: '#fff'}]}>
            <PokemonListContainer loading={loading} pokemons={list.results}/>
            <View style={[commonStyles.buttonContainer, {backgroundColor: '#fff'}]}>
                <TouchableOpacity style={[commonStyles.button, 
                    !list.previous ? commonStyles.disabled : null
                    ]}
                    onPress={() => gotoPage(list.previous)}>
                    <Text style={commonStyles.buttonText}>Previous</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[commonStyles.button, 
                    !list.next ? commonStyles.disabled : null
                    ]}
                    onPress={() => gotoPage(list.next)}>
                    <Text style={commonStyles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
   addToCartButton: {
    width: 'auto',
    height: 'auto',
    paddingHorizontal: 25,
    //paddingVertical: 5,
    flexDirection: 'row',
    //backgroundColor: '#44b678',
    backgroundColor: '#333',
    borderRadius: 20,
   },
   addToCartIconStyle: {
    height: 22,
    width: 22,
    margin: 5,
   } 
});

export default Home;