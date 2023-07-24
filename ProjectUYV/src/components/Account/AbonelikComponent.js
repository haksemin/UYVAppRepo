import React from "react"
import { View,Image,Text,Dimensions } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
export default function AbonelikComponent(){

  const SCREEN_WIDTH = Dimensions.get('window').width;


    return(
        <View>
        <View>
          <Image source={require("../../images/hesabim/Line.png")} style={{width:SCREEN_WIDTH-30,alignSelf:"center"}}></Image>

          <View style={{margin:15,justifyContent:"center"}}>
            <View>
            <Text style={{ color: "#163E6C", fontFamily: "OpenSans-Regular", fontSize: 14, fontWeight: 600, }}>
              Genel Bağış
            </Text>
            <View style={{flexDirection:"row",alignItems:"center"}}>
              <Text style={{ color: "#77A52C", fontFamily: "OpenSans-Regular", fontSize: 18, fontWeight: 700,}}>
                200 ₺
              </Text>
              <View style={{marginLeft:5}}>
              <Text style={{ color: "#163E6C", fontFamily: "OpenSans-Regular", fontSize: 12, fontWeight: 400,marginHorizontal:5, }}>
              /Her Ayın 23'ü
              </Text>
              </View>
              
            </View>
            <View style={{position:"absolute",flexDirection:"row",right:0,}}>
                <TouchableOpacity>
                <View style={{width:107,height:42,backgroundColor:"#E74C3C",borderRadius:10,flexDirection:"row",alignItems:"center"}}>
                    <View style={{flexDirection:"row",alignItems:"center",marginHorizontal:10}}>
                        <Image source={require("../../images/hesabim/x.png")} style={{width:9,height:9,marginHorizontal:10}}></Image>
                        <Text style={{ color: "white", fontFamily: "OpenSans-Regular", fontSize: 14, fontWeight: 600, }}>
                            İptal Et
                        </Text>
                    </View>
                </View>
                </TouchableOpacity>
            </View>
                <View style={{flexDirection:"row",height:29,width:SCREEN_WIDTH-30,backgroundColor:"#E8ECF0",borderRadius:5,marginTop:5,alignItems:"center",justifyContent:"center"  }}>
                    <Image source={require("../../images/hesabim/mastercard.png")} style={{width:25,height:19,marginHorizontal:10,paddingRight:5}}></Image>
                    <Text style={{ color: "#163E6C", fontFamily: "OpenSans-Regular", fontSize: 14, fontWeight: 600, }}>
                        *** **** **** 4952
                    </Text>
                </View>
            </View>
            
            
          </View>
          

        </View>
      </View>
    )
}