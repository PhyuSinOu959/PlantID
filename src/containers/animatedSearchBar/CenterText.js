import React from "react";
import {View, Text, StyleSheet} from "react-native";

export default function CenterText(props){
    return(
        <View style={styles.textContainer}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        flex: 1,
        marginLeft: 22,
    },
    text: {
        fontWeight: '500',
        fontSize: 20,
        color: 'white',
    }
})