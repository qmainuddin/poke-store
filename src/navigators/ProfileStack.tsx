import { createStackNavigator } from '@react-navigation/stack'
import { Profile } from '../screens';

const Stack = createStackNavigator();

const ProfileStack = () => (
    <Stack.Navigator>
        <Stack.Screen name='ProfileInfo' options={{
            title: "Developer Info"
        }}
        component={Profile}
        />
    </Stack.Navigator>
)

export default ProfileStack;