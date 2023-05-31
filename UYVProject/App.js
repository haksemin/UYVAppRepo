import React, { useEffect, useState } from "react";
import { SafeAreaView, StatusBar, View, StyleSheet, Platform } from "react-native";
import SafeViewAndroid from "./src/components/SafeViewAndroid";



export default function App() {
    return (
        <>
            <SafeAreaView />
            <StatusBar backgroundColor={"red"} barStyle="dark-content" />
            <View style={{backgroundColor:"red",flex:1}}></View>
            
        </>
    );
}


