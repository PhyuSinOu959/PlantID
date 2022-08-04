import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
import { RNCamera } from "react-native-camera";

export default class CameraUI extends React.Component {
  constructor() {
    super();
    this.state = {
      onCameraReady: false
    }
  }

  onCameraReady = () => {
    this.setState({
      onCameraReady: true,
    });
  };

  takePicture = () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = this.camera.takePictureAsync(options);
      const source = data.uri;
      console.log(source);
    }
  };

  render() {
    const { onCameraReady } = this.state;
    return (
      <View>
          <RNCamera
              ref={ref => {
                  this.camera = ref;
                }}
              // type={cameraType}
              flashMode={RNCamera.Constants.FlashMode.on}
              onCameraReady={onCameraReady}
              onMountError={(error) => {
                console.log("cammera error", error);
              }}
          />
          <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> SNAP </Text>
            <Button></Button>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
})