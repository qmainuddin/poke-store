import { createStackNavigator } from '@react-navigation/stack'
import { CartDetails, Home } from '../screens';
import CartButton from '../components/CartButton';

const Stack = createStackNavigator();

const HomeStack = () => (
    <Stack.Navigator>
        <Stack.Screen name='Dashboard' component={Home}
        options={{
            headerRight: (props) => <CartButton/>
        }}></Stack.Screen>
        <Stack.Screen name='CartDetails' options={{
            title: "Cart Details",
            headerBackTitleVisible: false,
        }}
        component={CartDetails}
        />
    </Stack.Navigator>
)

export default HomeStack;