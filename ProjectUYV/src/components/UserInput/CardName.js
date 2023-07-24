import React, { useState } from "react";
import { View, Text, TextInput, Dimensions,Button } from "react-native";

export default function CardName() {
  const SCREEN_WIDTH = Dimensions.get('window').width;
  const [fullName, setFullName] = useState('');
  const [cardname, setCardName] = useState("Ek Maaş Kartım");

  const handleFullNameChange = (text) => {
     {
      setFullName(text);
    }
  };

  const handleSubmit = () => {
    // API'ye gönderme işlemi
    console.log(fullName); 
  };

  return (
    <View style={{margin:7.5,alignSelf:"center"}}>
      <View style={{ width: SCREEN_WIDTH - 30, height: 60, borderRadius: 10, borderColor: "#B7C3D1", borderWidth: 1,fontFamily: "OpenSans-Regular", }}>
        <Text style={{ fontFamily: "OpenSans-Regular", fontSize: 14, fontWeight: 700, color: "#163E6C", marginTop: 5, left: 15 }}>Kart Adı</Text>
        <TextInput
          style={{ textAlignVertical: "center", fontSize: 14, left: 15, paddingBottom: 5, height: 30, width: SCREEN_WIDTH - 100, color: "black" }}
          placeholder={cardname}
          placeholderTextColor={"#B7C3D1"}
          value={fullName}
          onChangeText={handleFullNameChange}
        />
      </View>
      
    </View>
  );
}
