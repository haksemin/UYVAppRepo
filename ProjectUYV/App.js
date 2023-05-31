import React, {Component,} from 'react';
import {AppRegistry, StyleSheet,View,StatusBar,Platform,SafeAreaView} from 'react-native';

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
);




export default function App(){
  
    return (
      <>
        <View style={styles.container}>
        <MyStatusBar backgroundColor="white" barStyle="dark-content" />
        <View style={styles.appBar} />
        <View style={styles.content} />
      </View>
      </>
    );
    }











const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor:'white',
    height: APPBAR_HEIGHT,
  },
  content: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});

AppRegistry.registerComponent('App', () => DarkTheme);