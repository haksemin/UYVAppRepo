import React from "react"
import { View,Image,Text,Dimensions } from "react-native"
export default function EklenenKisiComponent(){

  const SCREEN_WIDTH = Dimensions.get('window').width;


    return(
        <View>
        <View>
          <Image source={require("../../images/hesabim/Line.png")} style={{width:SCREEN_WIDTH-30,alignSelf:"center"}}></Image>

          
          
          <View style={{justifyContent:"center",marginTop:15}}>
            <View style={{flexDirection:"row",alignItems:"center"}}>
                <View style={{marginHorizontal:5}}>
                    <Image source={require("../../images/adamuser.png")} style={{width:46,height:46,}}></Image>
                </View>
                <View style={{flexDirection:"column",marginHorizontal:5}}>
                <Text style={{ color: "#163E6C", fontFamily: "OpenSans-Regular", fontSize: 14, fontWeight: 600, }}>
                Fatma GEDİK
                </Text>
                <View style={{flexDirection:"row",alignItems:"center",marginTop:5}}>
                <Image source={require("../../images/mobilegreen.png")} style={{width:11,height:14,}}></Image>
                <Text style={{ color: "#163E6C", fontFamily: "OpenSans-Regular", fontSize: 12, fontWeight: 400,marginHorizontal:5 }}>
                +90 555 368 2666
                </Text>
                </View>
                </View>
            </View>

            <View style={{right:0,position:"absolute",alignSelf:"center",justifyContent:"center",flexDirection:"column",alignContent:"center",marginHorizontal:5}}>
              <Text style={{ color: "#77A52C", fontFamily: "OpenSans-Regular", fontSize: 18, fontWeight: 700,}}>
                1.-4. Cüz
              </Text>
            </View>
          </View>
          
        </View>
      </View>
    )
}