import React from 'react';
import { View, Dimensions, Image, Text, TouchableOpacity,StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function CarouselCard({ item }) {
  const screenWidth = Dimensions.get('window').width;

  return (
    <View
      style={{
        width: screenWidth,
        height: 215,
        padding: 15,
        borderRadius: 10,
      }}>
      <LinearGradient colors={['rgba(22, 62, 108, 0)', '#163E6C']} style={{flex: 1, borderRadius: 10, justifyContent: 'flex-end', padding: 10}}>
        <Image source={{uri: item.image}} style={{...StyleSheet.absoluteFillObject, resizeMode: 'cover', borderRadius: 10}}/>
        <Text style={{ fontFamily: "OpenSans-Bold", color: "white", fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>{item.name}</Text>
        <TouchableOpacity style={{ height: 42, backgroundColor: "#E74C3C", justifyContent: "center", borderRadius: 10 }}>
          <Text style={{ fontFamily: "OpenSans-Bold", fontSize: 14, color: "white", fontWeight: 'bold', textAlign: "center" }}>{item.buttonName}</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}
