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
          <ScrollView style={{ top: 15 }}>
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
      </View>
    </Modal>
  );
}
