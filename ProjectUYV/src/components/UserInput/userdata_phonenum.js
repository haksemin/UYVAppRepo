import React, { useState } from "react";
import { View, Text, TextInput, Dimensions,Button } from "react-native";
import { SelectList } from 'react-native-dropdown-select-list';
import phonecodes from "../phonecodes.json";

export default function PhoneNum() {
  const SCREEN_WIDTH = Dimensions.get('window').width;
  const [amount, setAmount] = useState('');

  //DropdownÜlke
  const [selectedCountry, setSelectedCountry] = React.useState("");
  const countryData = phonecodes.map(country => ({
    key: country.dial_code,
    value: `(${country.dial_code})`
  }));
  console.log(selectedCountry);

  const handleAmountChange = (text) => {
    // Sadece numara girişine izin verme kontrolü
    if (/^\d+$/.test(text) || text === '') {
      setAmount(text);
    }
  };

  const handleSubmit = () => {
    // API'ye tutarı gönderme işlemini burada gerçekleştirin
    console.log(selectedCountry+amount); // Örneğin, tutarı konsola yazdırabilirsiniz
  };

  return (
    <View>
      <View style={{width:65, height: 60, margin: 15, top: 15, borderRadius: 10, borderColor: "#B7C3D1",position:"absolute",left:0,borderWidth:1,borderTopEndRadius:0,borderBottomRightRadius:0}}>
      
      <View style={{ top: 0 }}>
            <SelectList
              setSelected={val => setSelectedCountry(val)}
              data={countryData}
              save="key"
              dropdownTextStyles={{ color: "black", fontSize: 10 }}
              inputStyles={{ color: "black", fontSize: 10 }}
            />
          </View>
          
      </View>
      <View style={{ width: SCREEN_WIDTH - 95, height: 60, margin: 15, top: 15,right:0, borderRadius: 10, borderColor: "#B7C3D1", borderWidth: 1 ,borderTopLeftRadius:0,borderBottomLeftRadius:0}}>
        <Text style={{ fontFamily: "OpenSans-Regular", fontSize: 14, fontWeight: 700, color: "#163E6C", marginTop: 5, left: 15 }}>Telefon No</Text>
        <TextInput
          style={{ textAlignVertical: "center", fontSize: 14, left: 15, paddingBottom: 5, height: 30, width: SCREEN_WIDTH - 100, color: "black" }}
          placeholder="Telefon Numaranızı Giriniz"
          placeholderTextColor={"black"}
          value={amount}
          onChangeText={handleAmountChange}
          keyboardType="numeric"
        />
      </View>
      
    </View>
  );
}
