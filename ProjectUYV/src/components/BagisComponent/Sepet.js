import React,{useState} from "react";
import MainTemp from "../AnaSayfaComponent/MainTemp";
import HelpDeskSheet from '../HelpDeskSheet';
import { useNavigation } from "@react-navigation/native";
import { View,Image,Text,TouchableOpacity,Dimensions, ScrollView } from "react-native";
import SepetComponent from "./SepetComponent";

export default function Sepet(){

  const screenWidth = Dimensions.get('window').width;
    const sepeticisayi = 4;
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();
    const toggleModal = () => {
        setModalVisible(!modalVisible);};

      function goBacktoMainPage(){
          navigation.navigate("MainScreen")
      }

    

    return(
        <>
        <MainTemp toggleModal={toggleModal} goBack={goBacktoMainPage}></MainTemp>
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
        <Image source={require("../../images//ustpngx.png")} style={{ width: "100%", top: 0 }} />
        <View style={{ position: "absolute", top: 15, flexDirection: "column", width: "100%" }}>
          <View style={{ flexDirection: "row", margin: 15, alignItems: "center" }}>
            <Image source={require("../../images/shoppingbag.png")} style={{ width: 27, height: 30 }} />
            <Text style={{ fontFamily: "OpenSans-Regular", color: "white", fontSize: 24, fontWeight: 700, marginLeft: 15 }}>Bağış Sepetim ({sepeticisayi})</Text>
          </View>
          <View style={{flex:1}}>
            

          </View>
        
        </View>
      </View>

      <View style={{flex :1,marginTop:-90}}>
              <ScrollView contentContainerStyle={{flexGrow:1}}>
              <SepetComponent></SepetComponent>
              <SepetComponent></SepetComponent>
              <SepetComponent></SepetComponent>
              <SepetComponent></SepetComponent>
              <SepetComponent></SepetComponent>
              <SepetComponent></SepetComponent>
              <SepetComponent></SepetComponent>
              </ScrollView>
            
            </View>

            <View style={{height:70,width:screenWidth-30}}>
              <View style={{flexDirection:"row"}}>
              <Text style={{color:"#163E6C",fontSize:16,fontWeight:700,marginLeft:5}}> Toplam Tutar:</Text>
              <View style={{position:"absolute"}}>  
                <Text style={{color:"#77A52C",fontSize:24,fontWeight:700}}> 2.650</Text>
              </View>
              
              </View>
                
                
            </View>
      <HelpDeskSheet isVisible={modalVisible} toggleModal={toggleModal} />
      </>
    )
}