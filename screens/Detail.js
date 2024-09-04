// import React from "react";
// import { View, Text, StyleSheet, StatusBar } from "react-native";

// const Detail = ({ navigation }) => {

//     StatusBar.setBackgroundColor('transparent', false);
//     return (
//         <View style={styles.container1}>
//             <View style={styles.container2}><Text>heelo</Text></View>
//         </View>
//     )
// }

// export default Detail;

// const styles = StyleSheet.create({
//     container1: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#fff',
//     },
//     container2: {
//         backgroundColor: 'green'
//     }
// })

import React, { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, Linking, ActivityIndicator, TextInput, SafeAreaView } from 'react-native';
import { Camera, useCameraDevices, useFrameProcessor } from 'react-native-vision-camera';
import { scanBarcodes, BarcodeFormat } from 'vision-camera-code-scanner';
import Animated, {
    useAnimatedProps,
    useSharedValue,
} from 'react-native-reanimated';
import { Dimensions } from 'react-native';
const deviceWidth = Dimensions.get('screen').width;

const AnimatedText = Animated.createAnimatedComponent(TextInput);

export default function Detail() {
    const [imageSource, setImageSource] = useState('');
    const [showCamera, setShowCamera] = useState(false);
    const [enableFlashlight, setEnableFlashLight] = React.useState(false);
    const camera = useRef(null);
    const devices = useCameraDevices();
    const device = devices.back;
    const detectorResult = useSharedValue('');

    const frameProcessor = useFrameProcessor(frame => {
        'worklet';
        const detectedBarcodes = scanBarcodes(frame, [BarcodeFormat.QR_CODE]);
        const barcodesStr = detectedBarcodes
            .map(barcode => barcode.displayValue)
            .join('');
        console.log('Barcodes:', barcodesStr);
        detectorResult.value = barcodesStr;
    }, []);

    const animatedTextProps = useAnimatedProps(
        () => ({ text: detectorResult.value }),
        [detectorResult.value],
    );

    useEffect(() => {
        async function getPermission() {
            const permission = await Camera.requestCameraPermission();
            console.log('ouu', `Camera permission status: ${permission}`);
            if (permission === 'denied') await Linking.openSettings();
        }
        getPermission();
        // Cleaning, doesn't work
        return () => {
            setEnableFlashLight(false);
        };
    }, []);

    const capturePhoto = async () => {
        if (camera.current !== null) {
            const photo = await camera.current.takePhoto({});
            setImageSource(photo.path);
            setShowCamera(false);
            console.log('ouu', photo.path);
        }
    };

    if (device == null) {
        return <Text>Camera not available</Text>;
    }

    const renderCodeScanner = () => {
        console.warn('ouu', 'renderCodeScanner: ');
        return (
            <View>
                <Camera
                    // style={styles.camera}
                    device={device}
                    isActive
                    frameProcessor={frameProcessor}
                    frameProcessorFps={5}
                />
                <AnimatedText
                    style={styles.barcodeText}
                    animatedProps={animatedTextProps}
                    editable={false}
                    multiline
                />
            </View>
        );
    };
    // return (
    //     <View style={styles.screen}>
    //         <SafeAreaView style={styles.saveArea}>
    //             <View style={styles.header}>
    //                 <Text style={styles.headerText}>React Native Camera Libraries</Text>
    //             </View>
    //         </SafeAreaView>

    //         <View style={styles.caption}>
    //             <Text style={styles.captionText}>
    //                 Welcome To React-Native-Vision-Camera Tutorial
    //             </Text>
    //         </View>

    //         {renderCodeScanner()}
    //     </View>
    // );

    // return (
    //     <View style={styles.viewContainer}>
    //         <View style={styles.header}>
    //             <Text style={styles.txt}>Scan QR</Text>
    //         </View>
    //     </View>
    // );

    return (
        <View style={styles.container}>
            {showCamera ? (
                <>
                    <Camera
                        ref={camera}
                        style={StyleSheet.absoluteFill}
                        device={device}
                        isActive={showCamera}
                        photo={true}
                        torch={enableFlashlight ? "on" : "off"}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.btns}>
                            <TouchableOpacity
                                style={styles.torch}
                                onPress={() => {
                                    setEnableFlashLight(!enableFlashlight);
                                }} />
                            <TouchableOpacity
                                style={styles.camButton}
                                onPress={() => capturePhoto()}
                            />
                            <TouchableOpacity
                                style={styles.torch}
                                onPress={() => {
                                    setEnableFlashLight(!enableFlashlight);
                                }} />
                        </View>
                    </View>
                    <View style={styles.backButton}>
                        <TouchableOpacity
                            style={{
                                backgroundColor: 'rgba(0,0,0,0.2)',
                                padding: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 10,
                                borderWidth: 2,
                                borderColor: '#fff',
                                width: 100,
                            }}
                            onPress={() => setShowCamera(false)}>
                            <Text style={{ color: 'white', fontWeight: '500' }}>Back</Text>
                        </TouchableOpacity>
                    </View>
                </>
            ) : (
                <>
                    {imageSource !== '' ? (
                        <Image
                            style={styles.image}
                            source={{
                                uri: `file://'${imageSource}`,
                            }}
                        />
                    ) : null}

                    <View style={styles.backButton}>
                        <TouchableOpacity
                            style={{
                                backgroundColor: 'rgba(0,0,0,0.2)',
                                padding: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 10,
                                borderWidth: 2,
                                borderColor: '#fff',
                                width: 100,
                            }}
                            onPress={() => setShowCamera(true)}>
                            <Text style={{ color: 'white', fontWeight: '500' }}>Back</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={styles.buttons}>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: '#fff',
                                    padding: 10,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 10,
                                    borderWidth: 2,
                                    borderColor: '#77c3ec',
                                }}
                                onPress={() => setShowCamera(true)}>
                                <Text style={{ color: '#77c3ec', fontWeight: '500' }}>
                                    Retake
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: '#77c3ec',
                                    padding: 10,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 10,
                                    borderWidth: 2,
                                    borderColor: 'white',
                                }}
                                onPress={() => setShowCamera(true)}>
                                <Text style={{ color: 'white', fontWeight: '500' }}>
                                    Use Photo
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1
    },
    header: { backgroundColor: 'pink' },
    txt: {
        fontSize: 25,
        textAlign: 'center',
        padding: 10,
    },
    buttonScan2: {
        marginLeft: deviceWidth / 2 - 50,
        width: 100,
        height: 100,
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'gray',
    },
    backButton: {
        backgroundColor: 'rgba(0,0,0,0.0)',
        position: 'absolute',
        justifyContent: 'center',
        width: '100%',
        top: 0,
        padding: 20,
    },
    buttonContainer: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        bottom: 0,
        padding: 20,
        // backgroundColor: 'blue'
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    btns: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    torch: {
        height: 40,
        width: 40,
        backgroundColor: 'orange',
        borderRadius: 30,
        alignSelf: 'center'
    },
    camButton: {
        height: 80,
        width: 80,
        borderRadius: 40,
        //ADD backgroundColor COLOR GREY
        backgroundColor: '#B2BEB5',
        alignSelf: 'center',
        borderWidth: 4,
        borderColor: 'white',
    },
    image: {
        width: '100%',
        height: '100%',
        aspectRatio: 9 / 16,
    },

    screen: {
        flex: 1,
        backgroundColor: '#EEF2E6',
    },
    saveArea: {
        backgroundColor: '#3D8361',
    },
    header: {
        height: 50,
        backgroundColor: '#3D8361',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        color: '#ffffff',
        fontSize: 20,
    },
    caption: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    captionText: {
        color: '#100F0F',
        fontSize: 16,
        fontWeight: '600',
    },
})