import { FC, useEffect, useState } from "react"
import { Alert, FlatList, Image, ListRenderItem, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { default as commonStyle } from '../common/Styles'
import { CartDetailsData, incrementCount, decrementCount, removeItem } from "../reducers/CartReducer";

type Props = {
    item: CartDetailsData,
}

const CartItem: FC<Props> = (props: Props) => {
    const { item } = props;
    const dispatch = useDispatch();
    const { loading, cartList, error } = useSelector((state: any) => state.cart);

    const [count, setCount] = useState(item.count);

    const plusItem = (item: CartDetailsData) => {
        setCount(count + 1);
        dispatch(incrementCount(item));
    }

    const minusItem = (item: CartDetailsData) => {
        if (count === 1) {
            Alert.prompt("Confirmation", "Do you really want to remove the item from the cart?", [
                {
                    text: "Yes",
                    onPress: () => dispatch(removeItem(item)),
                    isPreferred: true,
                },
                {
                    text: "No",
                    //onPress: () => ,
                    isPreferred: true,
                }
            ], "default")
        } else {
            setCount(count - 1);
            dispatch(decrementCount(item));
        }
    }

    return (
        <View style={[commonStyle.row, { marginBottom: 5, justifyContent: 'space-between', borderColor: '' }]}>
            <View style={commonStyle.row}>
                <Image source={{ uri: item.icon ? item.icon : "" }} resizeMode="contain" style={styles.image} />
                <View style={[commonStyle.centerAlign]}>
                    <Text style={[commonStyle.normalText]}>Name: {item.name}</Text>
                    <Text style={[commonStyle.normalText]}>Weight: {item.weight}</Text>
                </View>
            </View>
            <View style={[commonStyle.centerAlign]}>
                <Text style={commonStyle.normalText}>Quantity {count}</Text>
                <View style={[commonStyle.buttonContainer, commonStyle.row]}>
                    <TouchableOpacity onPress={() => minusItem(item)} style={[commonStyle.button, styles.negativeButton]}>
                        <Text style={[commonStyle.normalText, styles.buttonText]}>-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => plusItem(item)}
                        style={[commonStyle.button, styles.positiveButton]}>
                        <Text style={[commonStyle.normalText, styles.buttonText]}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
    },
    positiveButton: {
        width: 40,
        backgroundColor: '#238725'
    },
    negativeButton: {
        width: 40,
        backgroundColor: '#bd4c44',
    },
    buttonText: {
        color: '#fff',
    }
});

export default CartItem;