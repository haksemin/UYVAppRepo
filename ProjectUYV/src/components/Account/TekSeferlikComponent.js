import React from "react"
import { View,Image,Text,Dimensions } from "react-native"
export default function TekSeferlikComponent(){

  const SCREEN_WIDTH = Dimensions.get('window').width;


    return(
        <View>
        <View>
          <Image source={require("../../images/hesabim/Line.png")} style={{width:SCREEN_WIDTH-30,alignSelf:"center"}}></Image>
          <View style={{margin:15,justifyContent:"center"}}>
            <Text style={{ color: "#163E6C", fontFamily: "OpenSans-Regular", fontSize: 14, fontWeight: 600, }}>
              Genel Bağış
            </Text>
            <View style={{flexDirection:"row",alignItems:"center",marginTop:5}}>
              <Image source={require("../../images/hesabim/calendar.png")} style={{width:11,height:12,}}></Image>
              <Text style={{ color: "#163E6C", fontFamily: "OpenSans-Regular", fontSize: 12, fontWeight: 400,marginHorizontal:5 }}>
              12.08.2023
              </Text>
            </View>
            <View style={{right:0,position:"absolute",alignSelf:"center",justifyContent:"center",flexDirection:"column",alignContent:"center"}}>
              <Text style={{ color: "#77A52C", fontFamily: "OpenSans-Regular", fontSize: 18, fontWeight: 700,}}>
                200 ₺
              </Text>
            </View>
          </View>
        </View>
      </View>
    )
}