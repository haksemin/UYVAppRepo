import React from "react";
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Modal from "react-native-modal"

export default function DonateSheet({isVisible, toggleDonateItemsList,}){


    //açma kapama için toggle kullanılıyor
    return(
    <Modal isVisible={isVisible} style={{ justifyContent: 'flex-end', margin: 0 }}>
    <View style={{width:"100%", height:155,backgroundColor:"white",borderTopLeftRadius:15,borderTopRightRadius:15,}}>
      <View style={{height:50,width:"100%",backgroundColor:"#163E6C",borderTopLeftRadius:15,borderTopRightRadius:15,position:"absolute",justifyContent:"center"}}>
        <Text style={{ fontFamily: "OpenSans-SemiBold",fontSize: 16, fontWeight: 700, color:"white",marginLeft:15}}>Destek Hattı</Text>
        <TouchableOpacity style={{position:"absolute", right:0,marginRight:15}} onPress={toggleDonateItemsList}>
          <Image source={require("../images/xmark.png")}></Image>
        </TouchableOpacity>
    </View>
    

    <View style={{backgroundColor:"white",position:"absolute",width:"100%",height:105,bottom:0,justifyContent:"center",flexDirection:"row"}}>
    <TouchableOpacity>
      <View style={{backgroundColor:"#25D366",width:165,height:60,borderRadius:10, justifyContent:"center",alignContent:"center",margin:7,bottom:-15,flexDirection:"row",alignItems:"center"}}>
        <Image source={require("../images/wpicon.png")} style={{height:16,width:16,left:0,margin:5}}></Image>
        <Text style={{ fontFamily: "OpenSans-SemiBold",fontSize: 16, fontWeight: 600, color:"white",left:0,margin:5}}>WhatsApp</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity>
      <View style={{backgroundColor:"#163E6C",width:165,height:60,borderRadius:10, justifyContent:"center",alignContent:"center",margin:7,bottom:-15,flexDirection:"row",alignItems:"center"}}>
        <Image source={require("../images/phoneicon.png")} style={{height:16,width:16,left:0,margin:5}}></Image>
        <Text style={{ fontFamily: "OpenSans-SemiBold",fontSize: 16, fontWeight: 600, color:"white",left:0,margin:5}}>Telefon</Text>
      </View>
      </TouchableOpacity>
    </View>
  </View>
  </Modal>)
}
