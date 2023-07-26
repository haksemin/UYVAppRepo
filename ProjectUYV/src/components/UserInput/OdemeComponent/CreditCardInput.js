import React, { useState } from "react";
import { View, Text, TextInput, Dimensions, Button } from "react-native";

export default function CreditCardInput() {
  const SCREEN_WIDTH = Dimensions.get("window").width;
  const [cardNumber, setCardNumber] = useState("");

  const handleCardNumberChange = (text) => {
    // Only keep digits and remove any non-numeric characters
    let cardNumberOnlyDigits = text.replace(/\D/g, "");
    
    // Limit the input to 16 characters
    if (cardNumberOnlyDigits.length <= 16) {
      // Format the card number with spaces after every four digits
      let formattedCardNumber = "";
      for (let i = 0; i < cardNumberOnlyDigits.length; i += 4) {
        formattedCardNumber += cardNumberOnlyDigits.slice(i, i + 4) + " ";
      }
      setCardNumber(formattedCardNumber.trim());
    }
  };

  const handleSubmit = () => {
    // API call or any other processing can be done here
    console.log(cardNumber); // For example, you can log the card number to the console
  };

  return (
    <View>
      <View
        style={{
          width: SCREEN_WIDTH - 30,
          height: 60,
          margin: 7.5,
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
          Kart Numarası
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
          placeholder="Kart Numarası"
          placeholderTextColor={"#B7C3D1"}
          value={cardNumber}
          onChangeText={handleCardNumberChange}
          keyboardType="numeric"
          maxLength={19} // Set the max length to 19 to include spaces in the 16 characters format
        />
      </View>
    </View>
  );
}
