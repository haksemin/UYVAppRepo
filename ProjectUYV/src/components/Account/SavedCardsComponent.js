import React,{useState} from "react"
import { View,Text,TouchableOpacity,Image,Dimensions } from "react-native"
import CardEdit from "./CardEdit";

export default function SavedCardsComponent(){

  const [modalVisiblex, setModalVisiblex] = useState(false);
  const toggleModalx = () => {
    setModalVisiblex(!modalVisiblex);
  };

  const SCREEN_WIDTH = Dimensions.get('window').width;
    return(
      <>
      <TouchableOpacity onPress={toggleModalx}>
      <View style={{margin:15,justifyContent:"center",justifyContent:"center"}}>
          <View style={{flexDirection:"column"}}>
            <Text style={{ color: "#163E6C", fontFamily: "OpenSans-Regular", fontSize: 14, fontWeight: 600, }}>
              QNB Kartım
            </Text>

            <View style={{flexDirection:"row",alignItems:"center",marginTop:5}}>
              <Image source={require("../../images/hesabim/mastercard.png")} style={{width:24,height:18}}></Image>
              <View style={{marginLeft:5}}>
                <Text style={{ color: "#163E6C", fontFamily: "OpenSans-Regular", fontSize: 16, fontWeight: 400,marginHorizontal:5, }}>
                **** **** **** 4934
                </Text>
              </View> 
            </View>
            
          </View>
          
          <View style={{position:"absolute",flexDirection:"row",right:0,}}>
                
                <View>
                <View style={{borderRadius:10,flexDirection:"row",alignItems:"center"}}>
                    <View style={{flexDirection:"row",alignItems:"center",marginHorizontal:10}}>
                        <Image source={require("../../images/hesabim/chevronright.png")} style={{width:11,height:16,marginHorizontal:10}}></Image>
                    </View>
                </View>
                </View>
                
            </View>
    
      </View>
      <Image source={require("../../images/hesabim/Line.png")} style={{width:SCREEN_WIDTH-30,alignSelf:"center"}}></Image>
      </TouchableOpacity>
      <CardEdit isVisible={modalVisiblex} toggleModalx={toggleModalx}></CardEdit>
      </>
    )
}