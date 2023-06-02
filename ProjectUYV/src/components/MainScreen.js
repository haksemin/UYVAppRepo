import React from 'react';
import { View,Image,Text,Dimensions,ScrollView } from 'react-native';
import MainTemp from './MainTemp';
import Mainstyles from './MainStyles';
import Carousel from './Carousel';





export default function MainScreen(){

    return(
        <>
        <MainTemp/>
         <View style={Mainstyles.content}>
            <Image source={require("../images/Vector.png")} style={{flex:1,position:"absolute"}}></Image>
            <View style={{flex:1}}><Carousel></Carousel></View>
            
         </View>
         </>

    )
}