import React from "react";
import { View, Dimensions, Platform, Image,Text,TouchableOpacity } from "react-native";


const screenWidth = Dimensions.get("window").width;
export default function LanguageButton() {
  const shadowStyle =
    Platform.OS === "ios"
      ? {
          shadowOffset: { width: 0, height: 0 },
          shadowColor: "rgba(41, 23, 79, 0.05)",
          shadowOpacity: 1,
          shadowRadius: 10,
        }
      : {
          elevation: 1,
        };



  return (
    <View
      style={{
        width: screenWidth - 30,
        height: 70,
        backgroundColor: "white",
        alignSelf: "center",
        margin: 7.5,
        borderRadius: 10,
        borderColor: "#DCE2E9",
        borderWidth: 1,
        flexDirection:"row",
        ...shadowStyle, // Spread the shadow style here
      }}
    >
        <TouchableOpacity style={{flexDirection:"row",alignItems:"center",width:"100%"}}>
            <Image source={require("../../images/hesabim/frame2.png")} style={{marginHorizontal:15}}></Image>
            <Text style={{fontFamily:"OpenSans-Regular",fontSize:16,fontWeight:400,color:"#163E6C"}}>Türkçe</Text>
            <Image source={require("../../images/hesabim/right.png")} style={{position:"absolute",right:0,marginHorizontal:15,width:9,height:12}}></Image>
        </TouchableOpacity>

    </View>
  );
}
