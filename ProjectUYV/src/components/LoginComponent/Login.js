import React from "react";
import { View, Text, Image, StatusBar } from "react-native";

const Login = () => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View>
        <Image
          source={require('../../images/Vector.png')}
          style={{
            flex: 1,
            position: 'absolute',
            resizeMode: "cover",
            width: "100%",
            backgroundColor: 'white'
          }}
        />
      </View>

      <View style={{ top: 0, height: 210 }}>
        <Image source={require("../../images/hesabim/ustpng.png")} style={{ width: "100%", top: 0 }} />
        <View style={{ position: "absolute", top: 50, flexDirection: "column", width: "100%" }}>
          <View style={{ flexDirection: "row", margin: 15, alignItems: "center" }}>
            <Image source={require("../../images/hesabim/userx.png")} style={{ width: 27, height: 30 }} />
            <Text style={{ fontFamily: "OpenSans-Regular", color: "white", fontSize: 24, fontWeight: 700, marginLeft: 15 }}>Giriş Yap</Text>
          </View>
          
          <View style={{ alignSelf: "center" }}>
          </View>
        </View>
      </View>
    </>
  );
}

export default Login;
