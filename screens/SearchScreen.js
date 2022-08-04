import React from "react";
import {View, Text, StyleSheet} from "react-native";

const SearchScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>This is Setting Screen. </Text>
        </View>
    )
}

export default SearchScreen;

const styles= StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#A0E7E5',
    }
})