import React, {Component} from 'react';
import { Button, View } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Button
        title="Scan NFC"
        onPress={() => navigate('Scan')}
        />
        <Button
        title="Take Picture"
        onPress={() => navigate('Cam')}
        />
        <Button
        title="Print Label"
        onPress={() => navigate('Label')}
        />
      </View>
    );
  }
}