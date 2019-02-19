import React, { Component } from 'react';
import { View, Text } from 'react-native'

export default class LabelScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
       <Text>I am a Label Screen</Text>
      </View>
    );
  }
}