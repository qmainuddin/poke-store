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

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainerComponent/>
  );
}

export default App;
