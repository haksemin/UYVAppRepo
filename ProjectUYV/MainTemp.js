import React from 'react';
import {AppRegistry, StyleSheet,View,StatusBar,Platform,SafeAreaView,Text, Image, Touchable, TouchableOpacity} from 'react-native';
import Mainstyles from './MainStyles';



const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[Mainstyles.statusBar, { backgroundColor }]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
);

export default function MainTemp(){
  
    return (
      <>
        <View style={Mainstyles.container}>
        <MyStatusBar backgroundColor="white" barStyle="dark-content" />
        <View style={Mainstyles.appBar}>
          <Image source={require("./src/images/UYVLogo.png")} style={{position:"absolute",left:15}}></Image>
          <TouchableOpacity style={{position:"absolute",height:42,width:42 ,right:15}}>
          <Image source={require("./src/images/Destek.png")} style={{height:"100%",width:"100%"}}></Image>
          </TouchableOpacity>
        </View>
        <View style={Mainstyles.content}>
        <Image source={require("./src/images/Vector.png")} style={{height:"100%",width:"100%"}}></Image>
          <Text>Merhaba</Text>
        </View>
      </View>
      </>
    );
    }












AppRegistry.registerComponent('App', () => DarkTheme);