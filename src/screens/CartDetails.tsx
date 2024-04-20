import { FC } from "react"
import { FlatList, Image, ListRenderItem, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { default as commonStyle } from '../common/Styles'
import { CartDetailsData, incrementCount } from "../reducers/CartReducer";
import CartItem from "../components/CartItem";


const CartDetails: FC = () => {
    const dispatch = useDispatch();
    const { loading, cartList, error } = useSelector((state: any) => state.cart);

    const _renderItem : ListRenderItem<CartDetailsData> = ({ item, index }) => {
        return (
            <CartItem item={item}/>
        )
    }
    
    return (
        <View style={[commonStyle.main, commonStyle.contentPadding]}>
            <FlatList
            data={cartList}
            renderItem={_renderItem}
            />
        </View>
    );
}

export default CartDetails;