import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import RNCamera from "../src/containers/Camera";


const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator 
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#e91e63',
                tabBarShowLabel: false, 
                // tabBarActiveBackgroundColor: "#032845",
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    // elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 15,
                    height: 90
                }
            }}>
            <Tab.Screen 
                name="home" 
                component={HomeScreen} 
                options= {{
                    tabBarIcon: () => (<Icon name="home" size={30} color="#900" />),
                }}>  
            </Tab.Screen>
            <Tab.Screen 
                name="camera" 
                component={RNCamera}
                options= {{
                    tabBarIcon: () => (<Icon name="camera" size={30} color="#900" />)
                }}>  
            </Tab.Screen>
            <Tab.Screen 
                name="search" 
                component={SearchScreen} 
                options= {{
                    tabBarIcon: () => (<Icon name="search" size={30} color="#900" />)
                }}>  
            </Tab.Screen>
        </Tab.Navigator>
    )
}
export default Tabs;