import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, Button, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Cart from "../Cart";

export default function ScreenA({navigation}) {
    const [newTodoName, setNewTodoName] = useState('')

    const gotoCart=()=> {
        return(
                <Cart />
        );
    }

    return (
        <ScrollView>
            <View style={styles.userTextContainer}>
                <Text style={styles.userText}>Hello User</Text>
                <Text style={[styles.userText, { fontSize: 14 }]}>
                    What are you going to do?
                </Text>
            </View>
            <View style={styles.textInputContainer}>
                
                <TextInput
                    placeholder='Add To-Do'
                    onChangeText={val => setNewTodoName(val)}
                    value={newTodoName}
                    style={styles.textInput}
                    placeholderTextColor="grey"
                />
                
                <TouchableOpacity
                    style={styles.addBtn}
                >
                    <Icon name="plus" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    userText: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'white',
        padding: 10
    },
    userTextContainer: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginTop: 10,
    },
    textInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        borderRadius: 5,
        borderColor: 'transparent',
        marginTop: 8,
        marginHorizontal: 20,
        height: 45,
    },
    textInput: {
        color: 'black',
        height: 50,
        flex: 1,
    },
    addBtn: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})
