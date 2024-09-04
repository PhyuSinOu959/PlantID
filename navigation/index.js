import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStackScreen from './HomeStackScreen';

const App = () => {
    return (
        <NavigationContainer onReady={() => RNBootSplash.hide()}>
            <HomeStackScreen />
        </NavigationContainer>
    )
}
export default App;