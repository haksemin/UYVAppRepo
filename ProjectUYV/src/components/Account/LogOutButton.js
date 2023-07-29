import React from "react";
import { View, Dimensions, Platform, Image,Text,TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';






const screenWidth = Dimensions.get("window").width;
export default function LogOutButton() {
  const shadowStyle =
    Platform.OS === "ios"
      ? {
          shadowOffset: { width: 0, height: 0 },
          shadowColor: "rgba(41, 23, 79, 0.05)",
          shadowOpacity: 1,
          shadowRadius: 10,
        }
      : {
          elevation: 1,
        };

        const navigation = useNavigation();
        function YonlendirLogin(){
            navigation.navigate("BeforeLogin")
        }

  return (
    <View
      style={{
        width: screenWidth - 30,
        height: 70,
        backgroundColor: "white",
        alignSelf: "center",
        margin: 7.5,
        borderRadius: 10,
        borderColor: "#DCE2E9",
        borderWidth: 1,
        flexDirection:"row",
        ...shadowStyle, // Spread the shadow style here
      }}
    >
        <TouchableOpacity style={{flexDirection:"row",alignItems:"center",width:"100%"}} onPress={YonlendirLogin}>
            <Image source={require("../../images/hesabim/frame3.png")} style={{marginHorizontal:15}}></Image>
            <Text style={{fontFamily:"OpenSans-Regular",fontSize:16,fontWeight:400,color:"#163E6C"}}>Hesaptan Çık</Text>
            
        </TouchableOpacity>

    </View>
  );
}
