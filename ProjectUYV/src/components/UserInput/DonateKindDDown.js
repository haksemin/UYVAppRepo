import React from "react";
import { View,Dimensions } from "react-native";
import { SelectList } from 'react-native-dropdown-select-list';
const SCREEN_WIDTH = Dimensions.get('window').width;
export default function DonateKindDDown(){

    const [selected, setSelected] = React.useState("Bireysel bağış");
  
    
    const data = [
        {key:'1', value:'Bireysel Bağış'},
        {key:'2', value:'Kurumsal Bağış'}]

        
    return(
    <View>
      <View style={{ width: SCREEN_WIDTH - 95,alignSelf:"center", height: 60, top: 15,margin:15, borderRadius: 10, borderColor: "#B7C3D1", borderWidth: 1 ,borderTopLeftRadius:0,borderBottomLeftRadius:0,position:"absolute"}}>
      <SelectList 
          setSelected={(val) => setSelected(val)} 
          data={data} 
          save="value"
          placeholder={selected}
          boxStyles={{borderColor:"#B7C3D1",borderRadius:10,backgroundColor:"white",position:"absolute",width:SCREEN_WIDTH-30,height:60,alignSelf:"center"}}
          dropdownStyles={{borderColor:"#B7C3D1",borderRadius:10,backgroundColor:"white",position:"absolute",marginTop:70,width:SCREEN_WIDTH-30,alignSelf:"center"}}
          
      />
      </View>
      </View>
    )
  
}
