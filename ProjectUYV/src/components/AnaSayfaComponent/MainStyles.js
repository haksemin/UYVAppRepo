import React from "react";
import { StyleSheet, StatusBar, Platform, View } from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 35 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 50; 



const Mainstyles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor:'white',
    height: 72,
    justifyContent:"center",

  },
  content: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});

export default Mainstyles;
