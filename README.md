## What's this?

Proof of concept for using ```react-native-camera``` with ```create-react-app``` for Android.

## How to run it?

First things first, after cloning this repo run ```npm install``` to get all dependencies correctly. That was the easy part. :)

You might be used to use react-native apps with the Expo client, but in our case we need to do things a little differently to function with all integrations.

### Setup
First there are certain system requirements you have to set up, in case you are new to Android development. You will need to download Java 8, the Android Studio App including Android SDK and set up the correct paths in your system configuration so that you can use Android commands. We recommend following this [guide](https://facebook.github.io/react-native/docs/getting-started.html#android-development-environment) to set you up. 

### Actually run it
Once all your system setup looks good, start the Android Studio app and launch  a device (if you are emulating and not testing on an actual device). In your terminal, navigate to the root directory and run ```react-native run-android```. This should launch this app in your emulated phone.