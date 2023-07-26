import React from "react";
import { View, Text, Image, StatusBar,TouchableOpacity,Dimensions } from "react-native";
import PhoneNum from "../UserInput/userdata_phonenum";
import PasswordBox from "../UserInput/PasswordBox";
import { useNavigation } from "@react-navigation/native";
const SCREEN_WIDTH = Dimensions.get('window').width;

const Login = () => {
  const navigation = useNavigation();
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
            <Image source={require("../../images/hesabim/bracket.png")} style={{ width: 30, height: 30 }} />
            <Text style={{ fontFamily: "OpenSans-Regular", color: "white", fontSize: 24, fontWeight: 700, marginLeft: 15 }}>Giriş Yap</Text>
          </View>
          
          
        </View>


        <View style={{ alignSelf: "center",width:"100%" }}>
            
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
          <TouchableOpacity>
            
          <View style={{width:SCREEN_WIDTH-30,height:60,borderRadius:10,borderColor:'#77A52C',borderWidth:1,backgroundColor:'#77A52C',alignSelf:'center',marginTop:30,justifyContent:'center',alignContent:'center',flexDirection:'row'}}>
          <Image
            source={require("../../images/hesabim/bracket.png")}
            style={{alignSelf:'center',margin:7.5}}
            />
            <Text style={{color:'#FFFFFF',fontFamily:'OpenSans-Regular',fontSize:16,fontWeight:600,alignSelf:'center',margin:7.5}}>Giriş Yap</Text>
          
            
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('RegistrationScreen')}>
            
            <View style={{width:SCREEN_WIDTH-30,height:60,borderRadius:10,borderColor:'#163E6C',borderWidth:1,backgroundColor:'#163E6C',alignSelf:'center',marginTop:30,justifyContent:'center',alignContent:'center',flexDirection:'row'}}>
            <Image
              source={require("../../images/hesabim/userx.png")}
              style={{alignSelf:'center',margin:7.5}}
              />
              <Text style={{color:'#FFFFFF',fontFamily:'OpenSans-Regular',fontSize:16,fontWeight:600,alignSelf:'center',margin:7.5}}>Üye Ol / Kayıt Ol</Text>
            
              
              </View>
              </TouchableOpacity>
          <View>
            </View>  

          
          </View>

          </View>
          

      </View>
    </>
  );
}

export default Login;