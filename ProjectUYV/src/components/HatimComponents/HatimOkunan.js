import React from "react";
import { useState } from "react";
import MainTemp from "../AnaSayfaComponent/MainTemp";
import { useNavigation } from "@react-navigation/native";
import { View,Image,Text,TouchableOpacity,Dimensions,ScrollView } from "react-native";
import BenimHatimComponent from "./BenimHatimCard";
import HelpDeskSheet from "../HelpDeskSheet";
import HatimCheckBox from "./HatimJoinCheckBox";


export default function HatimOkunan() {

    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const SCREEN_WIDTH = Dimensions.get('window').width;
    const toggleModal = () => {
        setModalVisible(!modalVisible);
      };

      function goBacktoMain() {
        navigation.navigate("AnaSayfa");
        }

       
    return(
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

        <View style={{ top: 0, height: 210,flex:1, }}>
        <Image source={require("../../images/hatim/ustsari.png")} style={{ width: "100%", top: 0 }} />
        <View style={{ position: "absolute", top: 15, flexDirection: "column", width: "100%" }}>
          <View style={{ flexDirection: "row", margin: 15, alignItems: "center" }}>
            <Image source={require("../../images/hatim/book-open.png")} style={{ width: 34, height: 30 }} />
            <Text style={{ fontFamily: "OpenSans-Regular", color: "white", fontSize: 24, fontWeight: "700", marginLeft: 15 }}>Hatim Paylaş</Text>
          </View>

          
            <View style={{ marginTop: 40 }}>
             <BenimHatimComponent></BenimHatimComponent>
            </View>
        </View>

        <View style={{flex:1,top:40,marginVertical:10}}>
          <Text style={{ color: "#163E6C", fontFamily: "OpenSans-Regular", fontSize: 14, fontWeight: 700, marginLeft: 15,marginTop:15,marginBottom:5 }}>
            Okuduğum Cüzler
          </Text>
          
          <View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow:1}} bounces={false}>
            <HatimCheckBox></HatimCheckBox>
            <HatimCheckBox></HatimCheckBox>
            <HatimCheckBox></HatimCheckBox>
            <HatimCheckBox></HatimCheckBox>
            <HatimCheckBox></HatimCheckBox>
            <HatimCheckBox></HatimCheckBox>
            <HatimCheckBox></HatimCheckBox>
            <HatimCheckBox></HatimCheckBox>
            <HatimCheckBox></HatimCheckBox>
            <HatimCheckBox></HatimCheckBox>
            <HatimCheckBox></HatimCheckBox>
            <HatimCheckBox></HatimCheckBox>
            <HatimCheckBox></HatimCheckBox>
            <HatimCheckBox></HatimCheckBox>
            <HatimCheckBox></HatimCheckBox>

            </ScrollView>
          </View>
          
        

        </View>

        </View>
          

        <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
        <TouchableOpacity>
          <View style={{ backgroundColor: "#163E6C", width: SCREEN_WIDTH - 30, height: 60, marginVertical: 15, borderRadius: 10, justifyContent: "center", alignItems: "center", alignSelf: "center" }}>
            <Text style={{ color: "white", fontFamily: "OpenSans-Regular", fontSize: 16, fontWeight: "600" }}>Okundu İşaretle</Text>
          </View>
        </TouchableOpacity>
      </View>

        <HelpDeskSheet isVisible={modalVisible} toggleModal={toggleModal} />
      </>
    )
}
