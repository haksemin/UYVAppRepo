import React, { useState } from "react";
import { View, Text, TextInput, Dimensions, Button,TouchableOpacity,Image} from "react-native";


export default function PasswordBox() {
  const SCREEN_WIDTH = Dimensions.get('window').width;
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibilty = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handleSubmit = () => {
    // Şifreyi API'ye gönderme işlemini burada gerçekleştirin
    console.log(password); // Örneğin, şifreyi konsola yazdırabilirsiniz
  };

  return (
    <View style={{ margin: 7.5, alignSelf: "center" }}>
        
      
      <View style={{ width: SCREEN_WIDTH - 30, height: 60, borderRadius: 10, borderColor: "#B7C3D1", borderWidth: 1, fontFamily: "OpenSans-Regular" }}>
     
      
        <Text style={{ fontFamily: "OpenSans-Regular", fontSize: 14, fontWeight: 700, color: "#163E6C", marginTop: 5, left: 15 }}>Şifre</Text>
        <TextInput
          style={{ textAlignVertical: "center", fontSize: 14, left: 15, paddingBottom: 5, height: 30, width: SCREEN_WIDTH - 100, color: "black" }}
          placeholder="Şifrenizi giriniz"
          placeholderTextColor={"#B7C3D1"}
          secureTextEntry={isPasswordVisible}
          value={password}
          onChangeText={setPassword} // Şifre güncellendiğinde state'i güncelleyen fonksiyon
        />
         <TouchableOpacity onPress={togglePasswordVisibilty} style={{paddingRight:15,marginLeft:350,bottom:35}}>
          <Image
          source={isPasswordVisible ? require("../../images/eye.png"): require("../../images/eye.png")}
          style={{width:18,height:16}}
          
          />
        
        </TouchableOpacity>
        
        
        


        
        
      </View>
    </View>
  );
}

