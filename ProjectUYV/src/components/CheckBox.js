import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Dimensions, Text } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const CheckBoxComponent = ({ onToggle,checkBoxText }) => {
  const [isChecked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!isChecked);
    onToggle(!isChecked); // Notify the parent component about the state change
  };

  return (
    <View style={{ flexDirection: "row", width: screenWidth - 30, left: 15, marginVertical: 7.5 }}>
      <TouchableOpacity onPress={handleToggle}>
        {isChecked ? (
          <Image source={require('../images/CheckBoxFuLL.png')} />
        ) : (
          <Image source={require('../images/CheckBoxEmpty.png')} />
        )}
      
      <Text style={{ fontFamily: "OpenSans-Regular", fontWeight: "400", color: "#163E6C", marginLeft: 15, fontSize: 14, alignSelf: "center" }}>{checkBoxText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CheckBoxComponent;
