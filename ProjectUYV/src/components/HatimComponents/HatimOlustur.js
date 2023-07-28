import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity,Dimensions,ScrollView } from "react-native";
import MainTemp from "../AnaSayfaComponent/MainTemp";
import HelpDeskSheet from '../HelpDeskSheet';
import BenimHatimComponent from "./BenimHatimCard";

import { useNavigation } from "@react-navigation/native";


export default function HatimOlustur() {

 

  const SCREEN_WIDTH = Dimensions.get('window').width;
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };


  function goBacktoMain() {
    navigation.navigate("Hatim Main");
    }
  
  return (
    <>
      <MainTemp toggleModal={toggleModal} goBack={goBacktoMain} />

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
        <Image source={require("../../images/hatim/ustsari.png")} style={{ width: "100%", top: 0 }} />
        <View style={{ position: "absolute", top: 15, flexDirection: "column", width: "100%" }}>
          <View style={{ flexDirection: "row", margin: 15, alignItems: "center" }}>
            <Image source={require("../../images/hatim/book-open.png")} style={{ width: 34, height: 30 }} />
            <Text style={{ fontFamily: "OpenSans-Regular", color: "white", fontSize: 24, fontWeight: 700, marginLeft: 15 }}>Hatim Paylaş</Text>
          </View>
          


  
        </View>
      </View>

      

      <HelpDeskSheet isVisible={modalVisible} toggleModal={toggleModal} />
    </>
  )
}
