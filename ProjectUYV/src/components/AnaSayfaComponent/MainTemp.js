import React from 'react';
import {AppRegistry, StyleSheet,View,StatusBar,Platform,SafeAreaView,Text, Image, TouchableOpacity} from 'react-native';
import Mainstyles from './MainStyles';



const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[Mainstyles.statusBar, { backgroundColor }]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
);

export default function MainTemp({ toggleModal,goBack }){
  return (
    <>
      <MyStatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={Mainstyles.appBar}>
        <TouchableOpacity style={{position:"absolute",height:42,width:42 ,left:15}} onPress={goBack}>
          <Image source={require("../../images/back0.png")} style={{height:"100%",width:"100%"}}></Image>
        </TouchableOpacity>
        <Image source={require("../../images/UYVLogo.png")} style={{position:"absolute",alignSelf:"center"}}></Image>
        <TouchableOpacity style={{position:"absolute",height:42,width:42 ,right:15}} onPress={toggleModal}>
          <Image source={require("../../images/Destek.png")} style={{height:"100%",width:"100%"}}></Image>
        </TouchableOpacity>
        
      </View>
    </>
  );
}




AppRegistry.registerComponent('App', () => DarkTheme);