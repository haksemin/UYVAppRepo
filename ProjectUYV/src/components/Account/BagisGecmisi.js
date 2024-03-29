import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity,Dimensions } from "react-native";
import MainTemp from "../AnaSayfaComponent/MainTemp";
import HelpDeskSheet from '../HelpDeskSheet';
import PhoneNum from "../UserInput/userdata_phonenum";
import { useNavigation } from "@react-navigation/native";
import TekSeferlikComponent from "./TekSeferlikComponent";
import AbonelikComponent from "./AbonelikComponent";
import { ScrollView } from "react-native-gesture-handler";

export default function BagisGecmisi() {

  const BagisSayisi = 16;

  const SCREEN_WIDTH = Dimensions.get('window').width;
  const [modalVisible, setModalVisible] = useState(false);
  const [isTekSeferlik, setIsTekSeferlik] = useState(true); // Durumu takip etmek için state eklendi
  const navigation = useNavigation();

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleTekSeferlik = () => {
    setIsTekSeferlik(true);
  };

  const handleAbonelikler = () => {
    setIsTekSeferlik(false);
  };


  function goBacktoMain() {
    navigation.navigate("Hesabım");
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
        <Image source={require("../../images/hesabim/ustpng.png")} style={{ width: "100%", top: 0 }} />
        <View style={{ position: "absolute", top: 15, flexDirection: "column", width: "100%" }}>
          <View style={{ flexDirection: "row", margin: 15, alignItems: "center" }}>
            <Image source={require("../../images/hesabim/handdollar.png")} style={{ width: 34, height: 30 }} />
            <Text style={{ fontFamily: "OpenSans-Regular", color: "white", fontSize: 24, fontWeight: 700, marginLeft: 15 }}>Bağış Geçmişi</Text>
          </View>

          <View style={{ alignSelf: "center" }}>
            <View
              style={{
                backgroundColor: "white",
                marginTop: 60,
                borderRadius: 34,
                width: 247,
                height: 72,
                shadowColor: "#183352",
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowOpacity: 0.15,
                shadowRadius: 30,
                elevation: 5, // For Android
              }}
            >
              <View style={{ margin: 15, flexDirection: "row", justifyContent: "center" }}>
                
                <TouchableOpacity onPress={handleTekSeferlik}>
                  <View style={{
                    borderRadius: 30,
                    borderTopEndRadius: 0,
                    borderBottomEndRadius: 0,
                    backgroundColor: isTekSeferlik ? "#163E6C" : "white", // Duruma göre renk değişimi
                    width: 109,
                    height: 42,
                    borderColor: "#B7C3D1",
                    borderWidth: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                    <Text style={{
                      color: isTekSeferlik ? "white" : "#163E6C", // Duruma göre metin rengi değişimi
                      fontFamily: "OpenSans-Regular",
                      fontSize: 14,
                      fontWeight: 600,
                    }}>Tek Seferlik</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleAbonelikler}>
                  <View style={{
                    borderRadius: 30,
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    backgroundColor: isTekSeferlik ? "white" : "#163E6C", // Duruma göre renk değişimi
                    width: 109,
                    height: 42,
                    borderColor: "#B7C3D1",
                    borderWidth: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                    <Text style={{
                      color: isTekSeferlik ? "#163E6C" : "white", // Duruma göre metin rengi değişimi
                      fontFamily: "OpenSans-Regular",
                      fontSize: 14,
                      fontWeight: 600,
                    }}>Abonelikler</Text>
                  </View>
                </TouchableOpacity>

              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Gösterilecek kısım için koşul*/}
      {isTekSeferlik ? (
        <View style={{flex:1}}>
          <Text style={{ color: "#163E6C", fontFamily: "OpenSans-Regular", fontSize: 14, fontWeight: 700, marginLeft: 15,marginTop:15,marginBottom:5 }}>
            Tek Seferlik Bağış ({BagisSayisi})
          </Text>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow:1}} bounces={false} >
          <TekSeferlikComponent></TekSeferlikComponent>
          <TekSeferlikComponent></TekSeferlikComponent>
          <TekSeferlikComponent></TekSeferlikComponent>
          <TekSeferlikComponent></TekSeferlikComponent>
          <TekSeferlikComponent></TekSeferlikComponent>
          <TekSeferlikComponent></TekSeferlikComponent>
          <TekSeferlikComponent></TekSeferlikComponent>
          <TekSeferlikComponent></TekSeferlikComponent>
          <TekSeferlikComponent></TekSeferlikComponent>
          <TekSeferlikComponent></TekSeferlikComponent>
          <TekSeferlikComponent></TekSeferlikComponent>
          <TekSeferlikComponent></TekSeferlikComponent>
          <TekSeferlikComponent></TekSeferlikComponent>
          <TekSeferlikComponent></TekSeferlikComponent>
          <TekSeferlikComponent></TekSeferlikComponent>
          <TekSeferlikComponent></TekSeferlikComponent>

          </ScrollView>
          

        </View>
      ) : (
        <View>
          <Text style={{ color: "#163E6C", fontFamily: "OpenSans-Regular", fontSize: 14, fontWeight: 700, marginLeft: 15,marginTop:15,marginBottom:5 }}>
            Abone Olunan Bağışlar ({BagisSayisi})
          </Text>

          <ScrollView showsVerticalScrollIndicator={false} >
            <AbonelikComponent></AbonelikComponent>
            <AbonelikComponent></AbonelikComponent>
            <AbonelikComponent></AbonelikComponent>
            <AbonelikComponent></AbonelikComponent>
            <AbonelikComponent></AbonelikComponent>
            <AbonelikComponent></AbonelikComponent>
            <AbonelikComponent></AbonelikComponent>
            <AbonelikComponent></AbonelikComponent>
            <AbonelikComponent></AbonelikComponent>
            <AbonelikComponent></AbonelikComponent>
            <AbonelikComponent></AbonelikComponent>

          </ScrollView>
        </View>
      )}

      <HelpDeskSheet isVisible={modalVisible} toggleModal={toggleModal} />
    </>
  )
}
