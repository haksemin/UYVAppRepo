import React from "react";
import { Text , ScrollView, useEffect, Image,Dimensions} from "react-native"; 
import MainTemp from "./AnaSayfaComponent/MainTemp";
import HTML from "react-native-render-html"
import CardBagis from "./CardBagis";
import dummyhtnl from "./dummyhtml.json"

const screenWidth = Dimensions.get('window').width;


const HTMLContent = dummyhtnl.dummy
//bu kısımda gelen html datası APIdan gelecek. Şu an dummy data olarak geliyor.


export default function BagisDetay({route}){

    const { itemId, itemImage } = route.params;

    return(
        <>
      <MainTemp></MainTemp>
      <ScrollView style={{marginLeft:15, marginRight:15}}>
      <Image source={{ uri: itemImage }} style={{width: screenWidth -30,
        height: 215,
        margin:15,
        alignSelf:"center",
        borderRadius: 10,}} />
        <HTML source={{ html: HTMLContent }}></HTML>
      </ScrollView>
    </>

        
    )
}