import React, { useState } from "react";
import { View, Text, TextInput, Dimensions, Button } from "react-native";

export default function CreditCardBF() {
  const SCREEN_WIDTH = Dimensions.get("window").width;
  const [cardNumber, setCardNumber] = useState("");

  const handleCardNumberChange = (text) => {
    // Only keep digits and remove any non-numeric characters
    let dateOnlyDigits = text.replace(/\D/g, "");
    
    // Format the date with slashes after the day and month
    let formattedDate = "";
    if (dateOnlyDigits.length > 4) {
      formattedDate += dateOnlyDigits.slice(0, 2) + "/";
      formattedDate += dateOnlyDigits.slice(2, 4) + "/";
      formattedDate += dateOnlyDigits.slice(4, 8);
    } else if (dateOnlyDigits.length > 2) {
      formattedDate += dateOnlyDigits.slice(0, 2) + "/";
      formattedDate += dateOnlyDigits.slice(2, 4);
    } else {
      formattedDate += dateOnlyDigits;
    }
    
    setCardNumber(formattedDate);
  };

  const handleSubmit = () => {
    // API call or any other processing can be done here
    console.log(cardNumber); // For example, you can log the card number to the console
  };

  return (
    <View>
      <View
        style={{
          width: SCREEN_WIDTH - 200,
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
          Son Kullanma Tarihi
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
          placeholder="__/__/____"
          placeholderTextColor={"#B7C3D1"}
          value={cardNumber}
          onChangeText={handleCardNumberChange}
          keyboardType="numeric"
          maxLength={10} // Adjusted the max length for the date format
        />
      </View>
    </View>
  );
}
