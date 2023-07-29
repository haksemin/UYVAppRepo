import React, { useRef, useEffect } from "react";
import { View, Text, Image, StatusBar, TouchableOpacity, Dimensions } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Timer from "./Timer";

const SCREEN_WIDTH = Dimensions.get("window").width;

const Verification = () => {
  const PhoneNumber = '+90 (543) 432 11 34'
  const VerificationText = 'Numaralı telefona gönderilen doğrulama kodunu yukarıdaki alana yazmalısın.'
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleInputChange = (text, index) => {
    if (text.length > 0 && index < inputRefs.length - 1 && inputRefs[index + 1].current) {
      inputRefs[index + 1].current.focus();
    }
  };

  useEffect(() => {
    // İlk input'a odaklan
    if (inputRefs[0].current) {
      inputRefs[0].current.focus();
    }
  }, []);

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
            <Image source={require("../../images/envelope.png")} style={{ width: 30, height: 30 }} />
            <Text style={{ fontFamily: "OpenSans-Regular", color: "white", fontSize: 24, fontWeight: 700, marginLeft: 15 }}>SMS Doğrulama</Text>
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
            
          </View>
          
          
          <View>
            <Timer></Timer>
            <Text style={{top:195,justifyContent:'center',width:345,left:50,color:'#163E6C'}}>Numaralı telefona gönderilen doğrulama kodunu yukarıdaki alana yazmalısın.</Text>
          
          
          <TouchableOpacity>
            
          <View style={{width:SCREEN_WIDTH-30,height:60,borderRadius:10,borderColor:'#163E6C',borderWidth:1,backgroundColor:'#163E6C',alignSelf:'center',marginTop:255,justifyContent:'center',alignContent:'center',flexDirection:'row'}}>
          
            <Text style={{color:'#FFFFFF',fontFamily:'OpenSans-Regular',fontSize:16,fontWeight:600,alignSelf:'center',margin:7.5}}>Doğrula</Text>
          
            
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            
            <View style={{width:SCREEN_WIDTH-30,height:60,borderRadius:10,borderColor:'#E8ECF0',borderWidth:1,backgroundColor:'#E8ECF0',alignSelf:'center',marginTop:10,justifyContent:'center',alignContent:'center',flexDirection:'row'}}>
    
            <Image
              source={require("../../images/file.png")}
              style={{alignSelf:'center',margin:7.5}}
              />
              <Text style={{color:'#163E6C',fontFamily:'OpenSans-Regular',fontSize:16,fontWeight:600,alignSelf:'center',margin:7.5}}>Yeniden Gönder</Text>
            
              
              </View>
              </TouchableOpacity>
          <View>
            
            
            

          
            
          
          <View style={{width:60,height:70,flexDirection:'column',justifyContent:'center',alignItems:'center',borderRadius:10,borderWidth:1,borderColor:'#B7C3D1',marginTop:-405,marginLeft:50}}>
            <TextInput
            style={{textAlignVertical:'center',fontSize:28,padding:0}}
            placeholder=""
            onChangeText={(text) => handleInputChange(text, 0)}
            ref={inputRefs[0]}
            maxLength={1}
            keyboardType="numeric"
            
            />
           

</View>
<View style={{width:60,height:70,flexDirection:'column',justifyContent:'center',alignItems:'center',borderRadius:10,borderWidth:1,borderColor:'#B7C3D1',marginTop:-70,marginLeft:135}}>
<TextInput
            style={{textAlignVertical:'center',fontSize:28,padding:0}}
            placeholder=""
            onChangeText={(text) => handleInputChange(text, 1)}
            ref={inputRefs[1]}
            maxLength={1}
            keyboardType="numeric"
            
            />
</View>
<View style={{width:60,height:70,flexDirection:'column',justifyContent:'center',alignItems:'center',borderRadius:10,borderWidth:1,borderColor:'#B7C3D1',marginTop:-70,marginLeft:220}}>
<TextInput
            style={{textAlignVertical:'center',fontSize:28,padding:0}}
            placeholder=""
            onChangeText={(text) => handleInputChange(text, 2)}
            ref={inputRefs[2]}
            maxLength={1}
            keyboardType="numeric"
            
            />
</View>
<View style={{width:60,height:70,flexDirection:'column',justifyContent:'center',alignItems:'center',borderRadius:10,borderWidth:1,borderColor:'#B7C3D1',marginTop:-70,marginLeft:305}}>
<TextInput
            style={{textAlignVertical:'center',fontSize:28,padding:0}}
            placeholder=""
            onChangeText={(text) => handleInputChange(text, 2)}
            ref={inputRefs[3]}
            maxLength={1}
            keyboardType="numeric"
            />
</View>
<View>
<Text style={{color:'#163E6C',fontSize:16,fontWeight:600,fontFamily:'Open Sans',width:146,height:22,marginLeft:130,marginTop:26}}>{PhoneNumber}</Text>
</View>


<Image
source={require('../../images/mobile.png')}
style={{width:12,height:16,marginTop:30,marginLeft:115}}
/>



            </View>
            
            

            
          </View>
         
          </View>
          
      </View>
    </>
  );
};

export default Verification;