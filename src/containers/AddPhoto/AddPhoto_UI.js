import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert, Dimensions, PermissionsAndroid } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
// import ImagePicker from 'react-native-image-picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export default function AddPhoto_UI() {
    // const [response, setResponse] = useState(null);
    const [fileUri, setFileUri] = useState(null);

    const addPhoto = () => {
        var options = {
            storageOptions: {
                skipBackup: true,
                //   path: 'images',
            },
        };
        launchImageLibrary(options, res => {
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

    const requestPhotoPermission = async () => {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
        );
        console.log('granted', granted);
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            islaunchCamera();
        } else {
            const obj = {
                title: "Info",
                body: 'Photos permission denied'
            };
            this.refs.modalAlert.onOpen(obj);
            Alert.alert(I18n.t('notifications'), 'Photos permission denied');
        }


    }

    const islaunchCamera = () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        launchCamera(options, response => {
            console.log('ouu', 'Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else {
                console.log('ouu', 'ou_response', JSON.stringify(response));
                // this.setState({
                //     fileUri: response.assets[0].uri,
                // });
                setFileUri(response.assets[0].uri)
            }
        });
    }


    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', margin: 50 }}>
            <Text style={{ fontSize: 20, color: 'black' }}>Upload Image</Text>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '80%',
                marginHorizontal: 50,
                alignItems: 'center',
                marginTop: 50
            }}>
                <TouchableOpacity onPress={requestPhotoPermission} >
                    <View style={styles.button}>
                        <Icon name="camera" size={24} color="black" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={addPhoto}>
                    <View style={styles.button}>
                        <Icon name="photo" size={24} color="black" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 50,
        width: 50,
        borderRadius: 30,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    }
})