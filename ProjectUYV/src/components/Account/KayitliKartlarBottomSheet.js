import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import Modal from "react-native-modal";
import SavedCardsComponent from "./SavedCardsComponent";


const SCREEN_WIDTH = Dimensions.get('window').width;

export default function KayitliKartlarBottomSheet({ isVisible,toggleModal }) {
  

  return (
    <Modal isVisible={isVisible} style={{ justifyContent: 'flex-end', margin: 0 }}>
      <View style={{ width: "100%", height: 407, backgroundColor: "white", borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
        <View style={{ height: 50, width: "100%", backgroundColor: "#163E6C", borderTopLeftRadius: 15, borderTopRightRadius: 15, position: "absolute", justifyContent: "center" }}>
          <Text style={{ fontFamily: "OpenSans-SemiBold", fontSize: 16, fontWeight: 700, color: "white", marginLeft: 15 }}>Kayıtlı Katlarım</Text>
          <TouchableOpacity style={{ position: "absolute", right: 0, marginRight: 15 }} onPress={toggleModal}>
            <Image source={require("../../images/xmark.png")} />
          </TouchableOpacity>
        </View>

        <View style={{ backgroundColor: "white", position: "absolute", width: "100%", height: 357, bottom: 0, alignContent: "center", flexDirection: "column" }}>
          <View style={{height:270}}>
            <ScrollView style={{ top: 15 }} showsVerticalScrollIndicator={false}>
              <SavedCardsComponent></SavedCardsComponent>
              <SavedCardsComponent></SavedCardsComponent>
              <SavedCardsComponent></SavedCardsComponent>
              <SavedCardsComponent></SavedCardsComponent>
              <SavedCardsComponent></SavedCardsComponent>
              <SavedCardsComponent></SavedCardsComponent>
              <SavedCardsComponent></SavedCardsComponent>
              <SavedCardsComponent></SavedCardsComponent>

              
            </ScrollView>
          </View>
          <TouchableOpacity>
            <View style={{backgroundColor:"#163E6C",width:SCREEN_WIDTH-30,height:60,margin:15,borderRadius:10,alignItems:"center",justifyContent:"center"}}>
            <Text style={{ fontFamily: "OpenSans-SemiBold", fontSize: 16, fontWeight: 600, color: "white", }}>Yeni Kart Ekle</Text>
            </View>
            </TouchableOpacity>

        </View>
      </View>
    </Modal>
  );
}
