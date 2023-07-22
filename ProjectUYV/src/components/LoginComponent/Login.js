import React from "react";
import { View,Text,Image } from "react-native";

const Login = () => {
  return(
    <>
    <View>
    <Image
      source={require('../../../images/Vector.png')}
      style={{
        flex: 1,
        position: 'absolute',
        resizeMode: "cover",
        width: "100%",
        backgroundColor: 'white'
      }}
    />
  </View>

  <View style={{ top: 0,height:210 }}>
    <Image source={require("../../images/hesabim/ustpng.png")} style={{ width: "100%", top: 0 }} />
    <View style={{ position: "absolute", top: 15, flexDirection: "column", width: "100%" }}>
      <View style={{ flexDirection: "row", margin: 15, alignItems: "center" }}>
        <Image source={require("../../images/hesabim/userx.png")} style={{ width: 27, height: 30 }} />
        <Text style={{ fontFamily: "OpenSans-Regular", color: "white", fontSize: 24, fontWeight: 700, marginLeft: 15 }}>{username}</Text>
      </View>
      <View style={{ flexDirection: "row", marginLeft: 15, alignItems: "center" }}>
        <Image source={require("../../images/hesabim/mobilex.png")} style={{ width: 12, height: 16 }} />
        <Text style={{ fontFamily: "OpenSans-Regular", color: "white", fontSize: 16, fontWeight: 400, marginLeft: 5 }}>{phonenumber}</Text>
      </View>
      <View style={{ alignSelf: "center" }}>
</View>
</View>
</View>
</>
  );
}