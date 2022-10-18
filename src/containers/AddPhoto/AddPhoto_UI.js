import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
// import ImagePicker from 'react-native-image-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default function AddPhoto_UI() {
    // const [response, setResponse] = useState(null);

    const addPhoto = () => {
        Alert.alert('Function Called...') ; 
        var options = {
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
          };

          launchImageLibrary(options,res => {
                console.log('Response = ', res);
                if (res.didCancel) {
                  console.log('User cancelled image picker');
                } else if (res.error) {
                  console.log('ImagePicker Error: ', res.error);
                } else {
                    const source = { uri: res.uri };
                    console.log(source)
              }
            }); 
        }

        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 20, color: 'black' }}>My babe plants</Text>
                <TouchableOpacity onPress={addPhoto} >
                    <View style={styles.button}>
                        <Icon name="plus" size={24} color="black" />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

const styles = StyleSheet.create({
    button: {
        height: 30,
        width: 30,
        borderRadius: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    }
})