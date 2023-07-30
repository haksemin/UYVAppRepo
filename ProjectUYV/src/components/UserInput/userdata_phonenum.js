import React, { useState } from "react";
import { View, Text, TextInput, Dimensions, Button } from "react-native";
import { SelectList } from 'react-native-dropdown-select-list';
import phonecodes from "../phonecodes.json";

export default function PhoneNum() {
  const SCREEN_WIDTH = Dimensions.get('window').width;
  const [amount, setAmount] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);

  // DropdownÜlke
  const countryData = phonecodes.map(country => ({
    key: country.dial_code,
    value: ` (${country.dial_code})${country.name}`,
    dropdownValue: country.dial_code,
    inputValue: country.name
  }));

  const handleAmountChange = (text) => {
    // Sadece numara girişine izin verme kontrolü
    if (/^\d+$/.test(text) || text === '') {
      setAmount(text);
    }
  };

  const handleSubmit = () => {
    // API'ye tutarı gönderme işlemi
    console.log(selectedCountry, amount); // tutarı konsola yazdır
  };

  const renderSelectedItem = () => {
    if (selectedCountry) {
      return (
        <Text style={{ color: "#163E6C", fontSize: 12 }}>{selectedCountry.dropdownValue}</Text>
      );
    }
    return null;
  };

  return (
    <View>
      <View style={{ margin: 15, left: 0 }}>
        <View style={{ top: 0, left: 0, borderColor: "#B7C3D1" }}>
          <SelectList
            setSelected={val => setSelectedCountry(val)}
            data={countryData}
            save="key"
            dropdownTextStyles={{ color: "#163E6C", fontSize: 12, borderColor: "#B7C3D1" }}
            inputStyles={{ color: "#163E6C", fontSize: 12, borderColor: "#B7C3D1", fontFamily:"OpenSans-Regular", fontWeight:"500" }}
            dropdownStyles={{ borderColor: "#B7C3D1" }}
            boxStyles={{ borderColor: "#B7C3D1", borderTopEndRadius: 0, borderBottomRightRadius: 0, height: 60, width: 85 }}
            renderSelectedItem={renderSelectedItem}
            placeholder="Ülke Seçiniz"
          />
        </View>
      </View>
      <View style={{ width: SCREEN_WIDTH - 115, position: "absolute", height: 60, right: 0, margin: 15, borderRadius: 10, borderColor: "#B7C3D1", borderWidth: 1, borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}>
        <Text style={{ fontFamily: "OpenSans-Regular", fontSize: 14, fontWeight: 700, color: "#163E6C", marginTop: 5, left: 15 }}>Telefon No</Text>
        <TextInput
          style={{ textAlignVertical: "center", fontSize: 14, left: 15, paddingBottom: 5, height: 30, width: SCREEN_WIDTH - 100, color: "black" }}
          placeholder="Telefon Numarası Giriniz"
          placeholderTextColor={"#B7C3D1"}
          value={amount}
          onChangeText={handleAmountChange}
          keyboardType="numeric"
        />
      </View>
      
    </View>
  );
}
