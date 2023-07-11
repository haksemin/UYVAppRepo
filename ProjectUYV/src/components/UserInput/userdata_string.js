import React, { useState } from "react";
import { View, Text, TextInput, Dimensions,Button } from "react-native";

export default function Userdatastring() {
  const SCREEN_WIDTH = Dimensions.get('window').width;
  const [fullName, setFullName] = useState('');

  const handleFullNameChange = (text) => {
    // Sadece harf girişine izin verme kontrolü
    if (/^[a-zA-ZğüşöçİĞÜŞÖÇ\s]+$/.test(text) || text === '') {
      setFullName(text);
    }
  };

  const handleSubmit = () => {
    // API'ye tam adı gönderme işlemini burada gerçekleştirin
    console.log(fullName); // Örneğin, tam adı konsola yazdırabilirsiniz
  };

  return (
    <View>
      <View style={{ width: SCREEN_WIDTH - 30, height: 60, margin:15, top: 15, borderRadius: 10, borderColor: "#B7C3D1", borderWidth: 1 }}>
        <Text style={{ fontFamily: "OpenSans-Regular", fontSize: 14, fontWeight: 700, color: "#163E6C", marginTop: 5, left: 15 }}>Ad Soyad</Text>
        <TextInput
          style={{ textAlignVertical: "center", fontSize: 14, left: 15, paddingBottom: 5, height: 30, width: SCREEN_WIDTH - 100, color: "black" }}
          placeholder="Adınız ve Soyadınızı giriniz"
          placeholderTextColor={"black"}
          value={fullName}
          onChangeText={handleFullNameChange}
        />
      </View>
      
    </View>
  );
}
