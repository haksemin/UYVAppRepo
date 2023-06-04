import React from 'react';
import { View, Dimensions, Image ,Text, Touchable, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function CarouselCard() {
  const screenWidth = Dimensions.get('window').width;
  

  return (
    <View
      style={{
        backgroundColor: "black",
        position: 'absolute',
        width: 345,
        height: 215,
        alignSelf: "center",
        borderRadius: 10,
        top: 15,
      }}>
      <LinearGradient
        colors={['rgba(22, 62, 108, 0)', '#163E6C']}
        style={{ flex: 1 }}
      >
        <Image source={require("../images/CardSlider.png")}  />
        <Text style={{ fontFamily: "OpenSans-Bold", position: "absolute", left: 15, bottom: 62, color: "white", fontSize: 18, fontWeight: 700, lineHeight: 25 }}>Türkiye Acil Yardım</Text>
        <TouchableOpacity style={{ width: 315, height: 42, bottom: 15, backgroundColor: "#E74C3C", position: "absolute", alignSelf: "center", justifyContent: "center", borderRadius: 10 }}>
          <Text style={{ fontFamily: "OpenSans-Bold", fontSize: 14, lineHeight: 19, color: "white", fontWeight: 600, alignSelf: "center" }}>Bağış Yap</Text>

        </TouchableOpacity>
      </LinearGradient>
    </View>
  );

}
