import React from "react";
import { Text, View } from "react-native";
import CardBagis from "./CardBagis";
import BagisListCards from "./BagisListButtons";


export default function BagisList(){



    return(
        <View style={{padding:15}}>
            <Text  style={{ fontFamily: "OpenSans-Bold", color: "#163E6C", fontSize: 14, fontWeight: 700 }}>Bağış Listesi</Text>
            <View style={{height:50}}>
                
                <BagisListCards></BagisListCards>
                
            </View>
        </View>

    )
}