import React,{useState} from "react";
import { View, Text,Image,StatusBar,TouchableOpacity,Dimensions,TextInput } from "react-native";
import PhoneNum from "../UserInput/userdata_phonenum";
import PasswordBox from "../UserInput/PasswordBox";
import CheckBoxComponent from "../CheckBox1";
import { useNavigation } from "@react-navigation/native";
const SCREEN_WIDTH = Dimensions.get('window').width;
const RegistrationScreen = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState("");
  const [isChecked, setChecked] = useState(false);
  const handleToggle = () => {
    setChecked(!isChecked);
  };
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
        <View>
        <Image
          source={require('../../images/Vector.png')}
          style={{
            flex: 1,
            position: 'absolute',
            resizeMode: "cover",
            width: "100%",
            backgroundColor: 'white'
          }}
        />
        </View>
        <View style={{ top: 0, height: 210 }}>
        <Image source={require("../../images/hesabim/ustpng.png")} style={{ width: "100%", top: 0 }} />
        <View style={{ position: "absolute", top: 50, flexDirection: "column", width: "100%" }}>
          <View style={{ flexDirection: "row", margin: 15, alignItems: "center" }}>
            <Image source={require("../../images/hesabim/user-plus.png")} style={{ width: 38, height: 30 }} />
            <Text style={{ fontFamily: "OpenSans-Regular", color: "white", fontSize: 24, fontWeight: 700, marginLeft: 15 }}>Hesap Oluştur</Text>
          </View> 
        </View>
        <View>
          <View style={{alignItems:'center'}}>
            <Image
            source={require("../../images/hesabim/Middle.png")}
            style={{width:255,height:64.27,marginTop:30}}
            />
          </View>
          <View>
          <View style={{ alignSelf: "center",width:"100%",marginTop:60}}>
            <PhoneNum></PhoneNum>
          </View>
          <PasswordBox></PasswordBox>
          <View style={{ margin: 7.5, alignSelf: "center" }}>
      <View style={{ width: SCREEN_WIDTH - 30, height: 60, borderRadius: 10, borderColor: "#B7C3D1", borderWidth: 1, fontFamily: "OpenSans-Regular" }}>
        <Text style={{ fontFamily: "OpenSans-Regular", fontSize: 14, fontWeight: 700, color: "#163E6C", marginTop: 5, left: 15 }}>Şifre Doğrula</Text>
        <TextInput
          style={{ textAlignVertical: "center", fontSize: 14, left: 15, paddingBottom: 5, height: 30, width: SCREEN_WIDTH - 100, color: "black" }}
          placeholder="Şifrenizi giriniz"
          placeholderTextColor={"#B7C3D1"}
          secureTextEntry // Bu özelliği ekleyerek şifrenin gizli kalmasını sağlarız
          value={password}
          onChangeText={setPassword} // Şifre güncellendiğinde state'i güncelleyen fonksiyon
        /> 
      </View>
    </View>
    <CheckBoxComponent onToggle={handleToggle} isChecked={isChecked}></CheckBoxComponent>
            <TouchableOpacity onPress={() => navigation.navigate('Verification')}>
            <View style={{width:SCREEN_WIDTH-30,height:60,borderRadius:10,borderColor:'#163E6C',borderWidth:1,backgroundColor:'#163E6C',alignSelf:'center',marginTop:70,justifyContent:'center',alignContent:'center',flexDirection:'row'}}>
            <Image
              source={require("../../images/hesabim/userx.png")}
              style={{alignSelf:'center',margin:7.5}}
              />
              <Text style={{color:'#FFFFFF',fontFamily:'OpenSans-Regular',fontSize:16,fontWeight:600,alignSelf:'center',margin:7.5}}>Hesabı Oluştur</Text>
              </View>
              </TouchableOpacity>
          <View>
            </View>  
          </View>
          </View>  
      </View>
    </>
  );
};
export default RegistrationScreen;
