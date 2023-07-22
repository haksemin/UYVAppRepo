import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Image, Text, TouchableOpacity } from "react-native";
import MainTemp from "../AnaSayfaComponent/MainTemp";
import HelpDeskSheet from '../HelpDeskSheet';
import AccountDetayButton from "./AccountDetayButton";
import SavedCardsButton from "./SavedCardsButton";
import { useState } from "react";


export default function UserAccount() {
  const [modalVisible, setModalVisible] = useState(false);

  const username = "Ahmet ÖZDEMİR";
  const phonenumber = "+90 541 366 0647";
  const totalbagis = 23;
  const bagissayitext = totalbagis + " Toplam Bağış Yapıldı";

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <MainTemp toggleModal={toggleModal}></MainTemp>

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
          <TouchableOpacity
            onPress={() => console.log("hello")}
            style={{
                backgroundColor: "white",
                marginTop: 60,
                borderRadius: 34,
                width: 255,
                height: 39,
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
                <View style={{margin:10 , flexDirection:"row",justifyContent:"center"}}>
                <Image source={require("../../images/hesabim/hand.png")}  style={{width:18,height:16,marginHorizontal:10}}></Image>
                <Text style={{fontFamily:"OpenSans-Regular",fontSize:14,fontWeight:400,color:"#163E6C"}}>{bagissayitext}</Text>
                <Image source={require("../../images/hesabim/right.png")}  style={{width:12,height:16,marginHorizontal:10}}></Image>
                
                </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>


      <View>
        <View style={{flexDirection:"row", margin:15,alignItems:"center"}}>
            <Image source={require("../../images/hesabim/gear.png")} style={{height:16,width:16}}></Image>
            <Text style={{fontFamily:"OpenSans-Regular",fontSize:14,fontWeight:700,color:"#163E6C",marginLeft:5}} >Ayarlar</Text>
        </View>
              <AccountDetayButton></AccountDetayButton>
              <SavedCardsButton></SavedCardsButton>

      </View>

      <HelpDeskSheet isVisible={modalVisible} toggleModal={toggleModal} />
    </>
  );
}
