import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStackScreen from "./navigation/HomeStackScreen";
import RNBootSplash from 'react-native-bootsplash';

const App = () => {
  return(
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
    <HomeStackScreen />
  </NavigationContainer>
  )
}
export default App;