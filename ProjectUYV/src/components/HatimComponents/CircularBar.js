import React,{useState} from "react";
import { StyleSheet, View } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";


export default function CircularBar(){
    const [value, setValue] = useState(0);
    const valueCircle= 50;
    return(
        <View style={styles.container}>
        <View style={{width:50,height:50}}>
            <CircularProgress
        radius={90}
        
        activeStrokeColor="#77A52C"
        progressValueColor="#163E6C"
        inActiveStrokeColor="#F1F6EA"
        value={valueCircle}
        textColor="#222"
        valuePrefix="%"
        
        ></CircularProgress>
            </View>
        
        </View>
    )
}



const styles = StyleSheet.create(
   {
    container:{
        
        
        alignItems:"center",
        justifyContent:"center"
    } 
   } 
);