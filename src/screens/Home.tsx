import { FC, useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import {default as commonStyles} from '../common/Styles';
import PokemonList from '../interfaces/PokemonList';
import Pokemon from '../interfaces/Pokemon';
import { Loader, PokemonListContainer } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonList, fetchPokemonData } from '../api/PokecmonAPI';
import { values } from '../common/Constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import CartDetails from './CartDetails';
import { CartDetailsData, addToCart } from '../reducers/CartReducer';

const addToCartIcon = require('../assets/shopping-bag.png');

const Home: FC = ({}) => {
    const dispatch = useDispatch();
    const { loading, list, error } = useSelector((state: any) => state.pokemon);
    const { selectedCount, data } = useSelector((state: any) => state.pokemonData);
    const navigation = useNavigation();

    useEffect(() => {
        dispatch(fetchPokemonList(values.BASE_URL));
    }, [dispatch])


    const gotoPage = (url: string) => {
        if (url) {
            dispatch(fetchPokemonList(url));
        }
    }

    const openCartDetails = () => {
        let dataMap : Map<string, any> = data as Map<string, any>;
        let selectedCartItem : CartDetailsData[] = [];

        dataMap.forEach((item, key) => {
            if (item.selected) {                
                selectedCartItem.push({
                    id: item.id,
                    name: item.name,
                    url: key,
                    weight: item.weight,
                    icon: item.sprites.front_default ? item.sprites.front_default : item.sprites.back_default,
                    count: 1,
                });
            }
        });
        dispatch(addToCart(selectedCartItem));
        navigation.navigate("CartDetails");
    }
    
    return (
        <View style={[commonStyles.main, commonStyles.contentPadding]}>
            <PokemonListContainer loading={loading} pokemons={list.results}/>
            <View style={commonStyles.buttonContainer}>
                <TouchableOpacity style={[commonStyles.button, 
                    !list.previous ? commonStyles.disabled : null
                    ]}
                    onPress={() => gotoPage(list.previous)}>
                    <Text style={commonStyles.buttonText}>Previous</Text>
                </TouchableOpacity>
                {
                    selectedCount > 0 ? (
                        <TouchableOpacity onPress={openCartDetails}
                        style={[commonStyles.button, styles.addToCartButton]}>
                            <Image source={addToCartIcon} style={styles.addToCartIconStyle} resizeMode={'contain'}/>
                            <Text style={[commonStyles.buttonText]}>{selectedCount}</Text>

                        </TouchableOpacity>
                    ) : null
                }
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