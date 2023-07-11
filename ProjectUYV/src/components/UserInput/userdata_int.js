import React, { useState } from "react";
import { View, Text, TextInput, Dimensions,Button } from "react-native";

export default function Userdataint() {
  const SCREEN_WIDTH = Dimensions.get('window').width;
  const [amount, setAmount] = useState('');

  const handleAmountChange = (text) => {
    // Sadece numara girişine izin verme kontrolü
    if (/^\d+$/.test(text) || text === '') {
      setAmount(text);
    }
  };

  const handleSubmit = () => {
    // API'ye tutarı gönderme işlemini burada gerçekleştirin
    console.log(amount); // Örneğin, tutarı konsola yazdırabilirsiniz
  };

  return (
    <View>
      <View style={{ width: SCREEN_WIDTH - 30, height: 60, margin: 15, top: 15, borderRadius: 10, borderColor: "#B7C3D1", borderWidth: 1 }}>
        <Text style={{ fontFamily: "OpenSans-Regular", fontSize: 14, fontWeight: 700, color: "#163E6C", marginTop: 5, left: 15 }}>Bağış Tutarı</Text>
        <TextInput
          style={{ textAlignVertical: "center", fontSize: 14, left: 15, paddingBottom: 5, height: 30, width: SCREEN_WIDTH - 100, color: "black" }}
          placeholder="Tutar Giriniz"
          placeholderTextColor={"black"}
          value={amount}
          onChangeText={handleAmountChange}
          keyboardType="numeric"
        />
        <Text style={{ position: "absolute", fontFamily: "OpenSans-Regular", fontSize: 20, fontWeight: 900, color: "#163E6C", padding: 15, right: 0 }}>₺</Text>
      </View>
      <Button title="Gönder" onPress={handleSubmit} />
    </View>
  );
}
