import React from "react"
import { View,TouchableOpacity,Dimensions,Image,Text } from "react-native";

export default function SepetComponent(){

    const cardtitle= "Bağış Adı";
    const screenWidth = Dimensions.get('window').width;
    const shadowStyle =
    Platform.OS === "ios"
      ? {
          shadowOffset: { width: 0, height: 0 },
          shadowColor: "rgba(41, 23, 79, 0.05)",
          shadowOpacity: 1,
          shadowRadius: 10,
        }
      : {
          elevation: 4,
        };

    return(

        <TouchableOpacity>
        <View style={{ alignSelf: "center" }}>
          <View style={{height:80,width:screenWidth-30,backgroundColor:"white",borderRadius:10,
          margin: 7.5,
          borderRadius: 10,
          flexDirection:"row",
          ...shadowStyle,}}>

            <View style={{margin:10,flexDirection:"row"}}>
                <Image source={require("../../images/sepetcardpng.png")} style={{width:60,height:60}}></Image>
                <View style={{marginHorizontal:15}}>
                    <Text style={{fontFamily:"OpenSans-Regular",fontSize:14,fontWeight:700,color:"#163E6C"}}>{cardtitle}</Text>
                    <View style={{height:36,width:143,backgroundColor:"#FDEDEC",marginVertical:5,borderRadius:5,flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                        <Image source={require("../../images/xred.png")} style={{marginHorizontal:5}}></Image>
                        <Text style={{fontFamily:"OpenSans-Regular",fontSize:14,fontWeight:600,color:"#E74C3C"}}>Sepetten Kaldır</Text>
                    </View>
                </View>
            </View>
            <View style={{justifyContent:"center",marginHorizontal:15}}>
              <Text style={{color:"#163E6C",fontFamily:"OpenSans-Regular",fontSize:18,fontWeight:700}}>2000 ₺ </Text>
            </View>
          </View>
        </View>
        </TouchableOpacity>

    )
}