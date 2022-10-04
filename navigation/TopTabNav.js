import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ScreenA from '../src/containers/ToptabScreens/ScreenA';
import ScreenB from '../src/containers/ToptabScreens/ScreenB';
import ScreenC from '../src/containers/ToptabScreens/ScreenC';
import { useNavigation } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const TopTabNav = () => {
    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <TouchableOpacity style={styles.search} onPress={()=>navigation.navigate('Cart')} > 
            <Icon name="shopping-cart" size={20} color="black" />
            </TouchableOpacity>
          ),
        });
      }, [navigation]);

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarScrollEnabled: true, 
                tabBarActiveTintColor: 'grey',
                tabBarPressColor:'pink',
                tabBarLabelStyle: { fontSize: 12 },
                // tabBarItemStyle: { width: 110 },
                tabBarIndicatorStyle: {
                    backgroundColor: "black",
                    // height: 2,   
                },
            }}
            sceneContainerStyle={{ backgroundColor: "#68BBE3" }}
        >
            <Tab.Screen 
                name="Home" 
                component={ScreenA} 
                options={{ 
                    tabBarLabel: 'Home',
                     }} />
            <Tab.Screen name="Profile" component={ScreenB} options={{ tabBarLabel: 'Profile' }} />
            <Tab.Screen name="Setting" component={ScreenC} options={{ tabBarLabel: 'Setting' }} />
            
        </Tab.Navigator>
    );
}

export default TopTabNav;

const styles = StyleSheet.create({
    search: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
        padding: 8
    },
})