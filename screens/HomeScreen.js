import React from "react";
import {View, Text, StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>This is Home Screen. </Text>
            <Icon name="rocket" size={30} color="#900" />
            
        </View>
    )
}

export default HomeScreen;

const styles= StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFC2C7',
    }
})