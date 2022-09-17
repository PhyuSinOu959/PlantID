import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from "./navigation/tab";
import RNBootSplash from 'react-native-bootsplash';

const App = () => {
  return(
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
    <Tabs />
  </NavigationContainer>
  )
}
export default App;