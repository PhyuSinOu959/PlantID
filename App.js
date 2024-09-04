import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import store from './src/store/configureStore';
import HomeStackScreen from "./navigation/HomeStackScreen";
import RNBootSplash from 'react-native-bootsplash';
import RegisterScreen from './screens/Register'

const App = () => {

  const scheme = useColorScheme();
  // console.warn('scheme', scheme)

  const MyLightTheme = {
    dark: false,
    colors: {
      primary: 'rgb(255, 242, 242)',
      background: 'rgb(255, 242, 242)',
      card: '#fff',
      text: '#5D5B6A',
      border: 'rgb(255, 242, 242)',
      notification: 'rgb(255, 69, 58)',
    },
  };

  const MyDarkTheme = {
    dark: true,
    colors: {
      primary: 'black',
      background: 'black',
      card: '#fff',
      text: 'grey',
      border: 'rgb(255, 242, 242)',
      notification: 'rgb(255, 69, 58)',
    },
  };


  return (
    <StoreProvider store={store} >
      <NavigationContainer onReady={() => RNBootSplash.hide()} theme={scheme === 'dark' ? MyDarkTheme : MyLightTheme}>
        <HomeStackScreen />
        {/* <RegisterScreen /> */}
      </NavigationContainer>
    </StoreProvider>
  )
}
export default App;