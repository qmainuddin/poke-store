import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import CartStack from "./CartStack";

const Tab = createBottomTabNavigator();

const BottomTab = () => (
    <Tab.Navigator>
        <Tab.Screen name="Home" options={{
            headerTitle: 'Dashboard'
        }} component={HomeStack}/>
        <Tab.Screen options={{
            headerTitle: 'Cart Details'
        }} name="CartDetails" component={CartStack}/>
    </Tab.Navigator>
)

export default BottomTab;