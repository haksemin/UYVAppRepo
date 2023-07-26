import React, { useState } from "react";
import { View, Text, TextInput, Dimensions, Button } from "react-native";

export default function CVVComponent() {
  const SCREEN_WIDTH = Dimensions.get("window").width;
  const [cvvNumber, setCVVNumber] = useState("");

  const handleCVVNumberChange = (text) => {
    // Only keep digits and remove any non-numeric characters
    let cvvNumberOnlyDigits = text.replace(/\D/g, "");

    // Limit the input to 3 characters
    if (cvvNumberOnlyDigits.length <= 3) {
      setCVVNumber(cvvNumberOnlyDigits);
    }
  };

  const handleSubmit = () => {
    // API call or any other processing can be done here
    console.log(cvvNumber); // For example, you can log the CVV number to the console
  };

  return (
    <View>
      <View
        style={{
          width: SCREEN_WIDTH - 260,
          height: 60,
          borderRadius: 10,
          borderColor: "#B7C3D1",
          borderWidth: 1,
          alignSelf: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "OpenSans-Regular",
            fontSize: 14,
            fontWeight: 700,
            color: "#163E6C",
            marginTop: 5,
            left: 15,
          }}
        >
          Güvenlik Kodu
        </Text>
        <TextInput
          style={{
            textAlignVertical: "center",
            fontSize: 14,
            left: 15,
            paddingBottom: 5,
            height: 30,
            width: SCREEN_WIDTH - 100,
            color: "black",
            fontFamily: "OpenSans-Regular",
          }}
          placeholder="CVV"
          placeholderTextColor={"#B7C3D1"}
          value={cvvNumber}
          onChangeText={handleCVVNumberChange}
          keyboardType="numeric"
          maxLength={3}
        />
      </View>
    </View>
  );
}
