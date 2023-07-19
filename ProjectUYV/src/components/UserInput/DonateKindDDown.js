import React from "react";
import { View,Dimensions, Image } from "react-native";
import { SelectList } from 'react-native-dropdown-select-list';
const SCREEN_WIDTH = Dimensions.get('window').width;
export default function DonateKindDDown(){

    const [selected, setSelected] = React.useState("Bireysel bağış");
  
    
    const data = [
        {key:'1', value:'Bireysel Bağış'},
        {key:'2', value:'Kurumsal Bağış'}]

        
    return(
    <View>
      <View style={{ margin: 7.5, left: 0, borderColor: "#B7C3D1",alignSelf:"center"}}>
      <SelectList 
          setSelected={(val) => setSelected(val)} 
          data={data} 
          save="value"
          placeholder={selected}
          dropdownTextStyles={{ color: "#163E6C", fontSize: 15, borderColor: "#B7C3D1" }}
          dropdownStyles={{ borderColor: "#B7C3D1",height:100 }}
          inputStyles={{ color: "#163E6C", fontSize: 16, borderColor: "#B7C3D1", fontFamily:"OpenSans-Regular", fontWeight:"400" }}
          boxStyles={{ borderColor: "#B7C3D1", height: 60, width: SCREEN_WIDTH -30 }}
          onSelect={() => console.log(selected)} 
          arrowicon={<Image source={require('../../images/down.png')} style={{position:"absolute",right:0,marginRight:15,alignSelf:"center"}}></Image>}
      />
      </View>
      </View>
    )
  
}
