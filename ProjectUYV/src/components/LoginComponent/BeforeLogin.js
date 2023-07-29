import React from "react";
import { View, Text, Image, StatusBar,TouchableOpacity,Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
const SCREEN_WIDTH = Dimensions.get('window').width;
const BeforeLogin = () => {
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
      
     
   
   

      <View style={{ top: 52, height: 210 }}>
        <TouchableOpacity>
        <Image 
        source={require('../../images/back0.png')}
        style={{width:42,height:42}}
        />
        </TouchableOpacity>
        
      <Image source={require('../../images/hesabim/Middle.png')}
        style={{width:166,height:42,alignItems:'center',justifyContent:'center',marginLeft:120,top:-42}}
        />
        <Image source={require("../../images/hesabim/ustpng.png")} style={{ width: "100%", top: -30 }} />
        <View style={{ position: "absolute", top: 50, flexDirection: "column", width: "100%" }}>
          <View style={{ flexDirection: "row", marginTop:-10,marginLeft:10, alignItems: "center" }}>
            <Image source={require("../../images/hesabim/userx.png")} style={{ width: 27, height: 30,marginTop:40 }} />
            <Text style={{ fontFamily: "OpenSans-Regular", color: "white", fontSize: 24, fontWeight: 700, marginLeft: 15,marginTop:40 }}>Hesabım</Text>
          </View>
          
          
        </View>
        <View>
          <View>
            
          <View style={{ alignSelf: "center",width:"100%",marginTop:60}}>
           </View>
           <Image 
        source={require('../../images/UyeOl.png')}
        style={{width:345,height:243,top:-170,marginLeft:30}}
        
        /><View>
          <Text style={{top:-100,marginLeft:150,fontFamily:'OpenSans',fontSize:18,fontWeight:700,color:'#163E6C'}}>Üye Olmalısın!</Text>
          <View style={{padding:10,alignItems:'flex-start',borderRadius:5,borderWidth:2,borderStyle:'dashed',color:'#F1F6EA',top:-70,marginLeft:40,marginRight:40}}>
          <Text style={{top:-5,marginLeft:20}}>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.Lorem Ipsum,adlı bilinmeyen bir matbaacının bir hurufat numune</Text>
          </View>

        </View>
        <Image source={require('../../images/hesabim/arrow-down.png')}
        style={{alignContent:'center',width:15,height:20,marginLeft:200,marginTop:-50}}
        />
        <TouchableOpacity>
        <Image source={require('../../images/Destek.png')}
        style={{width:50,height:50,top:-655,marginLeft:350}}
        
        />
        </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            
            <View style={{width:SCREEN_WIDTH-30,height:60,borderRadius:10,borderColor:'#163E6C',borderWidth:1,backgroundColor:'#163E6C',alignSelf:'center',marginTop:30,justifyContent:'center',alignContent:'center',flexDirection:'row',top:-50}}>
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

export default BeforeLogin;