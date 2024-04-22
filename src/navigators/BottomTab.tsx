import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import ProfileStack from "./ProfileStack";

const Tab = createBottomTabNavigator();

const BottomTab = () => (
    <Tab.Navigator>
        <Tab.Screen name="Home" options={{
            headerShown: false,
        }} component={HomeStack}/>
        <Tab.Screen options={{
            headerShown: false,
        }} name="Profile" component={ProfileStack}/>
    </Tab.Navigator>
)

export default BottomTab;