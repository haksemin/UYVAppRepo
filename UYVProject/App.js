import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import SafeViewAndroid from "./src/components/SafeViewAndroid";
import DeviceInfo from "react-native-device-info";


export default function App(){

  const [isNotchVisible, setIsNotchVisible] = useState(false);

  useEffect(() => {
    checkDeviceNotch();
  }, []);

  const checkDeviceNotch = async () => {
    const hasNotch = await DeviceInfo.hasNotch();
    setIsNotchVisible(hasNotch);
  };
  



  return(
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
    <View style={{backgroundColor:"white",height:72}}></View>
    </SafeAreaView>
    
  )
}