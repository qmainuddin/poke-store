import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Home } from './src/screens';
import { NativeScreenNavigationContainer } from 'react-native-screens';
import { NavigationContainerComponent } from './src/navigators';
import { Provider } from 'react-redux';
import store from './src/store';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <NavigationContainerComponent/>
    </Provider>
  );
}

export default App;
