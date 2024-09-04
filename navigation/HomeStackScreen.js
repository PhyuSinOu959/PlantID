import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState, useEffect } from 'react';
import HomeTabScreen from "./HomeTabScreen";
import TopTabNav from './TopTabNav';
import Cart from '../src/containers/Cart';
import AddPhoto from '../src/containers/AddPhoto';
import { TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from "../screens/HomeScreen";
import Register from '../screens/Register';
import Login from '../screens/Login';
import * as Keychain from 'react-native-keychain';
import Detail from '../screens/Detail';

const HomeStack = createStackNavigator();

const getIsSignedIn = () => {
    // return true ;
    return false;
}

const HomeStackScreen = () => {
    const isSignedIn = getIsSignedIn();
    StatusBar.setTranslucent(true);
    // const [isLoggedIn, setIsLoggedIn] = useState(false);


    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const credentials = await Keychain.getGenericPassword();
    //             console.warn('credentials.....', credentials)
    //             if (credentials) {
    //                 setIsLoggedIn(true);
    //             } else {
    //                 console.log("No credentials stored");
    //             }
    //         } catch (error) {
    //             console.log("Keychain couldn't be accessed!", error);
    //         }
    //     })();
    // }, []);

    return (
        <HomeStack.Navigator
            screenOptions={{
                headerShown: true,
                tabBarActiveTintColor: '#900',
                tabBarInactiveTintColor: 'grey',
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    borderRadius: 15,
                    height: 90,
                },
            }}>
            {/* {isLoggedIn ? (
                <> */}
            <HomeStack.Screen name="Login" component={Login}
                options={{
                    headerShown: false
                }} />
            <HomeStack.Screen name="Home" component={HomeTabScreen}
                options={{
                    headerShown: false,
                    headerStyle: {
                        backgroundColor: '#FFA384',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 20,
                        color: '#900'
                    },
                }} />
            <HomeStack.Screen name="Cart" component={Cart}
                options={{
                    title: 'My Cart',
                    headerTitleAlign: 'center',
                }} />
            <HomeStack.Screen name="Detail" component={Detail}
                options={{
                    headerTitleAlign: 'center',
                    headerStyle: {
                        // backgroundColor: '#FFA384',
                    },
                }} />
            <HomeStack.Screen name="Details" component={TopTabNav}
                options={({ navigation, route }) => (
                    {
                        // headerShown: false,
                        title: 'My Plant',
                        headerTitleAlign: 'center',
                        headerStyle: {
                            // backgroundColor: '#FFA384',
                        },
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 20,
                            color: 'black',
                        },
                        // headerRight: () =>(
                        //     <TouchableOpacity style={styles.search} onPress={() => alert('This is a button!')} >
                        //         <Icon name="shopping-cart" size={20} color="black" />
                        //     </TouchableOpacity> )
                    }
                )
                } />
            {/* </>
            ) : (
                <> */}
            {/* <HomeStack.Screen name="Login" component={Login}
                options={{
                    headerShown: false
                }} /> */}
            <HomeStack.Screen name="Register" component={Register}
                options={{
                    headerShown: false
                }} />
            {/* </>
            )} */}
        </HomeStack.Navigator>


    )
}
export default HomeStackScreen;

const styles = StyleSheet.create({
    search: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
        padding: 8
    },
})