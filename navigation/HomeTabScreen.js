import * as React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import My_Garden from '../screens/My_Garden';
import RNCamera from "../src/containers/Camera";
import AddPhoto from "../src/containers/AddPhoto";
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export default function HomeTabScreen() {

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
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
            <Tab.Screen
                name="home"
                component={HomeScreen}
                // initialParams={nav, pop}
                options={{
                    tabBarIcon: (props) => (<Icon name="home" size={30} style={{ color: props.color }} />),
                }}>
            </Tab.Screen>
            <Tab.Screen
                name="camera"
                component={AddPhoto}
                options={{
                    tabBarIcon: (props) => (<Icon name="camera" size={30} style={{ color: props.color }} />)
                }}>
            </Tab.Screen>
            <Tab.Screen
                name="search"
                component={SearchScreen}
                options={{
                    tabBarIcon: (props) => (<Icon name="search" size={30} style={{ color: props.color }} />),
                }}>
            </Tab.Screen>
            <Tab.Screen
                name="Garden"
                component={My_Garden}
                options={{
                    // headerShown: true,
                    // title: 'My Garden',
                    // headerTitleAlign: 'center',
                    // headerTitleStyle: {
                    //         fontWeight: 'bold',
                    //         fontSize: 20,
                    //         color: 'black',
                    //     },
                    tabBarIcon: (props) => (<Icon name="pagelines" size={30} style={{ color: props.color }} />),
                }}>
            </Tab.Screen>
        </Tab.Navigator>
    );
}