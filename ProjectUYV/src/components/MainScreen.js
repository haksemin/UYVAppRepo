import React from 'react';
import { View,Image,Text } from 'react-native';
import MainTemp from './MainTemp';
import Mainstyles from './MainStyles';


export default function MainScreen(){

    return(
        <>
        <MainTemp/>
         <View style={Mainstyles.content}>
         <Image source={require("../images/Vector.png")} style={{height:"100%",width:"100%"}}></Image>
           
         </View>
         </>

    )
}