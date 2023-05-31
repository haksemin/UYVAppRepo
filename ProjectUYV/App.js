import React from 'react';
import {AppRegistry, StyleSheet,View,StatusBar,Platform,SafeAreaView,Text, Image, Touchable, TouchableOpacity} from 'react-native';

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
        <View style={styles.appBar}>
          <Image source={require("./src/images/UYVLogo.png")} style={{position:"absolute",left:15}}></Image>
          <TouchableOpacity style={{position:"absolute",height:42,width:42 ,right:15}}>
          <Image source={require("./src/images/Destek.png")} style={{height:"100%",width:"100%"}}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
        <Image source={require("./src/images/Vector.png")} style={{height:"100%",width:"100%"}}></Image>
          <Text>Merhaba</Text>
        </View>
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
    height: 72,
    justifyContent:"center",

  },
  content: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});

AppRegistry.registerComponent('App', () => DarkTheme);