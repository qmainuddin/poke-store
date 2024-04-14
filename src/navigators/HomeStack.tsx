import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '../screens';
import { Text } from 'react-native';

const Stack = createStackNavigator();

const HomeStack = () => (
    <Stack.Navigator screenOptions={
        {
            headerShown: false,
        }
    }>
        <Stack.Screen name='Dashboard' component={Home}></Stack.Screen>
    </Stack.Navigator>
)

export default HomeStack;