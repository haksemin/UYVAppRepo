import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity,Dimensions,ScrollView } from "react-native";
import MainTemp from "../AnaSayfaComponent/MainTemp";
import HelpDeskSheet from '../HelpDeskSheet';
import BenimHatimComponent from "./BenimHatimCard";

import { useNavigation } from "@react-navigation/native";


export default function HatimMain() {

  const HatimSayisi = 16;

  const SCREEN_WIDTH = Dimensions.get('window').width;
  const [modalVisible, setModalVisible] = useState(false);
  const [isTekSeferlik, setIsTekSeferlik] = useState(true); 
  const [isGenel , setIsGenel] = useState(false)
  const [isAldiklarim , setIsAldiklarim] = useState(false)
  const navigation = useNavigation();

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleBenim = () => {
    setIsTekSeferlik(true);
    setIsAldiklarim(false);
    setIsGenel(false);
  };

  const handleAldiklarim = () => {
    setIsTekSeferlik(false);
    setIsGenel(false);
    setIsAldiklarim(true)
  };

  const handleGenel = () => {
    setIsGenel(true);
    setIsTekSeferlik(false)
    setIsAldiklarim(false)
  };


  function HatimOlustur(){
    navigation.navigate("HatimOlustur")
  }


  function goBacktoMain() {
    navigation.navigate("AnaSayfa");
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

          <View style={{ alignSelf: "center" }}>
            <View
              style={{
                backgroundColor: "white",
                marginTop: 60,
                borderRadius: 60,
                width: SCREEN_WIDTH-30,
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
                
                <TouchableOpacity onPress={handleBenim}>
                  <View style={{
                    borderRadius: 30,
                    borderTopEndRadius: 0,
                    borderBottomEndRadius: 0,
                    backgroundColor: isTekSeferlik ? "#163E6C" : "white", // Duruma göre renk değişimi
                    width: 90,
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
                    }}>Benim ({HatimSayisi})</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleGenel}>
                  <View style={{
                    borderRadius: 0,
                    backgroundColor: isGenel ? "#163E6C" : "white", // Duruma göre renk değişimi
                    width: 90,
                    height: 42,
                    borderColor: "#B7C3D1",
                    borderWidth: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                    <Text style={{
                      color: isGenel ? "white" : "#163E6C", // Duruma göre metin rengi değişimi
                      fontFamily: "OpenSans-Regular",
                      fontSize: 14,
                      fontWeight: 600,
                    }}>Genel ({HatimSayisi})</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleAldiklarim}>
                  <View style={{
                    borderRadius: 30,
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    backgroundColor: isAldiklarim ? "#163E6C" : "white", // Duruma göre renk değişimi
                    width: 132,
                    height: 42,
                    borderColor: "#B7C3D1",
                    borderWidth: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                    <Text style={{
                      color: isAldiklarim ? "white" : "#163E6C", // Duruma göre metin rengi değişimi
                      fontFamily: "OpenSans-Regular",
                      fontSize: 14,
                      fontWeight: 600,
                    }}>Aldıklarım ({HatimSayisi})</Text>
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
            Benim Hatimlerim ({HatimSayisi})
          </Text>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow:1}} bounces={false} >
            <BenimHatimComponent></BenimHatimComponent>
            <BenimHatimComponent></BenimHatimComponent>
            <BenimHatimComponent></BenimHatimComponent>
            <BenimHatimComponent></BenimHatimComponent>
            <BenimHatimComponent></BenimHatimComponent>
            <BenimHatimComponent></BenimHatimComponent>
            <BenimHatimComponent></BenimHatimComponent>
            <BenimHatimComponent></BenimHatimComponent>
            <BenimHatimComponent></BenimHatimComponent>


          </ScrollView>
          <TouchableOpacity onPress={HatimOlustur}>
          <View style={{bottom:0,width:SCREEN_WIDTH-30,height:60,backgroundColor:"#163E6C",marginBottom:10,marginHorizontal:15,borderRadius:10,justifyContent:"center"}}>
            <Text style={{alignSelf:"center",color:"white",fontFamily:"OpenSans-Regular",fontSize:16,fontWeight:"600"}}>Hatim Oluştur  + </Text>
          </View>
          </TouchableOpacity>

        </View>
      ) :isGenel ? (
        <View>
          <Text style={{ color: "#163E6C", fontFamily: "OpenSans-Regular", fontSize: 14, fontWeight: 700, marginLeft: 15,marginTop:15,marginBottom:5 }}>
            Genel ({HatimSayisi})
          </Text>

          <ScrollView showsVerticalScrollIndicator={false} >
            

          </ScrollView>
          
        </View>
      ) : (
        <View>
          <Text style={{ color: "#163E6C", fontFamily: "OpenSans-Regular", fontSize: 14, fontWeight: 700, marginLeft: 15,marginTop:15,marginBottom:5 }}>
            Aldıklarım ({HatimSayisi})
          </Text>

          <ScrollView showsVerticalScrollIndicator={false} >
            

          </ScrollView>
        </View>
      )}

      <HelpDeskSheet isVisible={modalVisible} toggleModal={toggleModal} />
    </>
  )
}
