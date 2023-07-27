import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, Dimensions, KeyboardAvoidingView, ScrollView } from 'react-native';
import Modal from "react-native-modal";
import CheckBoxComponent from "../CheckBox";
import BagisAboneDDown from "../UserInput/OdemeComponent/BagisAboneDDown";
import KartListDDown from "../UserInput/OdemeComponent/KartListDDown";
import CreditCardInput from "../UserInput/OdemeComponent/CreditCardInput";
import KartUstuAd from "../UserInput/OdemeComponent/KartUstuAd";
import CreditCardBF from "../UserInput/OdemeComponent/CreditCardBF";
import CVVComponent from "../UserInput/OdemeComponent/CVVComponent";

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function OdemeBilgileriSheet({ isVisiblex, toggleModalx }) {
  const [isUserDataVisible, setUserDataVisible] = useState(false);

  const handleCheckBoxToggle = (isChecked) => {
    setUserDataVisible(isChecked);
  };

  return (
    <Modal isVisible={isVisiblex} style={{ justifyContent: 'flex-end', margin: 0 }}>
      <View style={{ width: "100%", height: 600, backgroundColor: "white", borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
        <View style={{ height: 50, width: "100%", backgroundColor: "#163E6C", borderTopLeftRadius: 15, borderTopRightRadius: 15, position: "absolute", justifyContent: "center" }}>
          <Text style={{ fontFamily: "OpenSans-SemiBold", fontSize: 16, fontWeight: 700, color: "white", marginLeft: 15 }}>Ödeme Bilgileri</Text>
          <TouchableOpacity style={{ position: "absolute", right: 0, marginRight: 15 }} onPress={toggleModalx}>
            <Image source={require("../../images/xmark.png")} />
          </TouchableOpacity>
        </View>

        <View style={{ backgroundColor: "white", position: "absolute", width: "100%", height: 550, bottom: 0, alignContent: "center", flexDirection: "column",marginTop:15 }}> 
        <ScrollView> 
          <View style={{marginTop:15}}>
            <BagisAboneDDown></BagisAboneDDown>
            <KartListDDown></KartListDDown>
            <CheckBoxComponent onToggle={handleCheckBoxToggle} checkBoxText={"Farklı bir kart ile ödemek istiyorum"}></CheckBoxComponent>
            
            {isUserDataVisible && (
              <View>
                <CreditCardInput></CreditCardInput>
                <KartUstuAd></KartUstuAd>
                <View style={{flexDirection:"row",width:SCREEN_WIDTH-30,marginHorizontal:15,justifyContent:"space-between",marginTop:10}}>
                  <View style={{}}>
                    <CreditCardBF></CreditCardBF>
                  </View>
                  <View style={{}}>
                    <CVVComponent></CVVComponent>
                  </View>
                </View>
              </View>
            )}

            <View style={{width:SCREEN_WIDTH,alignItems:"center",marginTop:30}}>
              <Image source={require("../../images/visamastercardbanner.png")} style={{width:345}}></Image>
            </View>

            
          </View>
          </ScrollView>
          <View style={{height:100,width:SCREEN_WIDTH-30,flexDirection:"column",marginTop:15}}>
              <View style={{flexDirection:"row",alignItems:"center"}}>
                <Text style={{color:"#163E6C",fontSize:16,fontWeight:700,marginLeft:15,marginTop:5}}> Toplam Tutar:</Text>
                <View style={{position:"absolute",right:0}}>  
                  <Text style={{color:"#77A52C",fontSize:24,fontWeight:700,}}> 2.650</Text>
                </View>  
              </View>
              <TouchableOpacity >
                <View style={{backgroundColor:"#163E6C",width:SCREEN_WIDTH-30,height:60,marginHorizontal:15,marginVertical:5,borderRadius:10,alignItems:"center",justifyContent:"center"}}>
                  <Text style={{color:"white",fontSize:16,fontWeight:600,}}> Bağışı Tamamla</Text>
                </View>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    </Modal>
  );
}
