import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import Modal from "react-native-modal";
import SavedCardsComponent from "./SavedCardsComponent";
import CardName from "../UserInput/CardName";


const SCREEN_WIDTH = Dimensions.get('window').width;

export default function CardEdit({ isVisible,toggleModalx }) {
  

  return (
    <Modal isVisible={isVisible} style={{ justifyContent: 'flex-end', margin: 0 }}>
      <View style={{ width: "100%", height: 357, backgroundColor: "white", borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
        <View style={{ height: 50, width: "100%", backgroundColor: "#163E6C", borderTopLeftRadius: 15, borderTopRightRadius: 15, position: "absolute", justifyContent: "center" }}>
          <Text style={{ fontFamily: "OpenSans-SemiBold", fontSize: 16, fontWeight: 700, color: "white", marginLeft: 15 }}>Kart Düzenle</Text>
          <TouchableOpacity style={{ position: "absolute", right: 0, marginRight: 15 }} onPress={toggleModalx}>
            <Image source={require("../../images/xmark.png")} />
          </TouchableOpacity>
        </View>

        <View style={{ backgroundColor: "white", position: "absolute", width: "100%", height: 307, bottom: 0, alignContent: "center", flexDirection: "column" }}>
          <View style={{height:270,margin:15}}>
            <CardName></CardName>
            
            <View style={{ marginTop:15}}>
            <TouchableOpacity>
            <View style={{width:SCREEN_WIDTH-30,height:42,backgroundColor:"#F1F6EA",borderRadius:10,justifyContent:"center",alignItems:"center"}}>
            <Text style={{ fontFamily: "OpenSans-SemiBold", fontSize: 14, fontWeight: 600, color: "#77A52C", }}>Kart İsmini Değiştir</Text>
            </View>
            </TouchableOpacity>
            </View>

            <View style={{marginTop:30,flexDirection:"row"}}>
                <Image source={require("../../images/hesabim/mastercard.png")} />
                <Text style={{ fontFamily: "OpenSans-SemiBold", fontSize: 16, fontWeight: 400, color: "#163E6C", marginLeft: 15 }}>**** **** **** 5050</Text>
            </View>
            

            <View style={{ marginTop:15}}>
            <TouchableOpacity>
            <View style={{width:SCREEN_WIDTH-30,height:60,backgroundColor:"#E74C3C",borderRadius:10,justifyContent:"center",alignItems:"center"}}>
            <Text style={{ fontFamily: "OpenSans-SemiBold", fontSize: 16, fontWeight: 600, color: "white" }}>Kartı Sil</Text>
            </View>
            </TouchableOpacity>
            </View>

          </View>
          

        </View>
      </View>
    </Modal>
  );
}
