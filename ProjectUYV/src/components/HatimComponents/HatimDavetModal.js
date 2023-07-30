import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, Dimensions, KeyboardAvoidingView, ScrollView } from 'react-native';
import Modal from "react-native-modal";
import Userdatastring from "../UserInput/userdata_string";
import InputBoxNew from "../UserInput/newUserInput/InputBoxNew";
import PhoneNum from "../UserInput/userdata_phonenum";
import CuzSecimiDropDown from "../UserInput/newUserInput/CuzSecimDropDown";


const SCREEN_WIDTH = Dimensions.get('window').width;

export default function HatimDavetModal({ isVisibleM, toggleDonateItemsList, }) {
  const [isUserDataVisible, setUserDataVisible] = useState(false);

  const handleCheckBoxToggle = (isChecked) => {
    setUserDataVisible(isChecked);
  };

  return (
    <Modal isVisible={isVisibleM} style={{ justifyContent: 'flex-end', margin: 0 }}>
      <View style={{ width: "100%", height: 395, backgroundColor: "white", borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
        <View style={{ height: 50, width: "100%", backgroundColor: "#163E6C", borderTopLeftRadius: 15, borderTopRightRadius: 15, position: "absolute", justifyContent: "center" }}>
          <Text style={{ fontFamily: "OpenSans-SemiBold", fontSize: 16, fontWeight: 700, color: "white", marginLeft: 15 }}>Hatim Paylaşılacak Kişi</Text>
          <TouchableOpacity style={{ position: "absolute", right: 0, marginRight: 15 }} onPress={toggleDonateItemsList}>
            <Image source={require("../../images/xmark.png")} />
          </TouchableOpacity>
        </View>

        <View style={{ backgroundColor: "white", position: "absolute", width: "100%", height: 345, bottom: 0, alignContent: "center", flexDirection: "column" }}>
          <ScrollView style={{ top: 15 }}>
           
            <InputBoxNew contenttext={"Ad Soyad"} aciklama={"Davet Edeceğiniz Kişinin Adını Giriniz"}></InputBoxNew>
            <PhoneNum></PhoneNum>
            <CuzSecimiDropDown></CuzSecimiDropDown>


            
          </ScrollView>
          <TouchableOpacity
              style={{
                height: 60,
                backgroundColor: "#163E6C",
                justifyContent: "center",
                borderRadius: 10,
                width: SCREEN_WIDTH - 30,
                alignSelf: "center",
                margin: 15,
              }} onPress={toggleDonateItemsList}
            >
              <Text
                style={{
                  fontFamily: "OpenSans-Regular",
                  fontSize: 16,
                  color: "white",
                  fontWeight: '600',
                  textAlign: "center"
                }}
              >
                Kişiyi Ekle  +
              </Text>
            </TouchableOpacity>

        </View>
      </View>
    </Modal>
  );
}
