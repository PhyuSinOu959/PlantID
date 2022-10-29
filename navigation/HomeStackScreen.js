import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeTabScreen from "./HomeTabScreen";
import TopTabNav from './TopTabNav';
import Cart from '../src/containers/Cart';
import AddPhoto from '../src/containers/AddPhoto';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from "../screens/HomeScreen";

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
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