import { FC, useState, useEffect } from "react"
import { FlatList, Image, ListRenderItem, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { default as commonStyle } from '../common/Styles'
import { CartDetailsData, incrementCount } from "../reducers/CartReducer";
import CartItem from "../components/CartItem";


const CartDetails: FC = () => {
    const dispatch = useDispatch();
    const { loading, cartList, error } = useSelector((state: any) => state.cart);
    const [totalCost, setTotalCost] = useState(0);

    const _renderItem : ListRenderItem<CartDetailsData> = ({ item, index }) => {
        return (
            <CartItem item={item}/>
        )
    }

    useEffect(() => {
        setTotalCost(getTotalCost());
    }, [cartList])

    const getTotalCost = () : number => {
        let price: number = 0.0;
        cartList.forEach((element : CartDetailsData) => {
            let weight = element.weight ? element.weight : 0;
            price = price + ((weight / 100) * element.count);
        });
        return parseFloat(price.toFixed(2));
    }
    
    return (
        <View style={[commonStyle.main, commonStyle.contentPadding, {backgroundColor: '#fff'}]}>
            <FlatList
            data={cartList}
            renderItem={_renderItem}
            />
            <View style={{height: 50, backgroundColor: '#f7f2f5', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: '#333', fontSize: 20}}>Total cost: {getTotalCost()}</Text>
            </View>
        </View>
    );
}

export default CartDetails;