import React, {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';

type Props = {};
export default class CamScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes);
          }}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> Retake Photo </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.approvePicture.bind(this)} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> Approve Photo </Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
      // Pause the camera's preview
      this.camera.pausePreview();

      // Resume the preview
    }
    if (retake) {
      this.camera.resumePreview();
    }
  };

  approvePicture = async function() {
    //Are you sure? Y / N
    //Send image to API
    //Display confirmation message
  }
}

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
    paddingHorizontal: 10,
    alignSelf: 'center',
    margin: 20,
  },
});