import React from "react";
import { useState } from "react";
import { View, Image, Text, TouchableOpacity, Dimensions } from "react-native";
import CheckBoxComponent from "../CheckBox";
const SCREEN_WIDTH = Dimensions.get('window').width;

export default function HatimCheckBox() {
  const [color, setColor] = useState(false);

  const handleCheckBoxToggle = (isChecked) => {
    setColor(isChecked);
  };

  // Set the background color based on the state of the checkbox
  const viewBackgroundColor = color ? "#F1F6EA" : "#FFFFFF"; // Green when checked, white when unchecked

  return (
    <View style={{}}>
      <Image
        source={require("../../images/hesabim/Line.png")}
        style={{ width: SCREEN_WIDTH - 30, alignSelf: "center" }}
      />
      <View style={{ flexDirection: "column", backgroundColor: viewBackgroundColor }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: SCREEN_WIDTH }}>
          <View style={{ marginLeft: 15, width: 320 }}>
            <Text
              style={{
                color: "#163E6C",
                fontFamily: "OpenSans-Regular",
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              1 - 4. Cüz
            </Text>
          </View>
          <View style={{ marginTop: 10, marginRight: 15 }}>
            <CheckBoxComponent onToggle={handleCheckBoxToggle} />
          </View>
        </View>
      </View>
    </View>
  );
}
