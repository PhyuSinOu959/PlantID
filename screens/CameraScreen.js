import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CameraScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>This is Camera Screen. </Text>
        </View>
    )
}

export default CameraScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFC2C7',
    }
})

