import { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from 'react-redux';
import { CartDetailsData, addToCart } from '../reducers/CartReducer';
import { useNavigation } from '@react-navigation/native';

const CartButton: FC = ({}) => {
    const dispatch = useDispatch();
    const { selectedCount, data } = useSelector((state: any) => state.pokemonData);
    const navigation = useNavigation();
    
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
        <TouchableOpacity style={{ marginRight: 20 }} onPress={selectedCount > 0 ? openCartDetails: undefined}>
            <Icon name="shopping-cart" size={40} color="#900" />
            {
                selectedCount > 0 ? (
                    <View style={styles.cartCount}>
                        <Text style={{ fontSize: 12, color: "#900", fontWeight: 'bold' }}>{selectedCount}</Text>
                    </View>
                ) : null
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cartCount: {
        position: 'absolute',
        right: 8,
        top: 11,
        justifyContent: 'center',
        alignItems: 'center',
        width: 15,
        height: 15,
        borderRadius: 10,
    }
})

export default CartButton;