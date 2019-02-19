/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomeScreen from './Screens/HomeScreen'
import CamScreen from './Screens/CamScreen'
import ScanScreen from './Screens/ScanScreen'
import LabelScreen from './Screens/LabelScreen'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Cam: { screen: CamScreen },
  Scan: { screen: ScanScreen },
  Label: { screen: LabelScreen}
});

const App = createAppContainer(MainNavigator);

export default App
