import React, { useEffect, useState } from "react";
import { SafeAreaView, StatusBar, View, StyleSheet, Platform } from "react-native";
import SafeViewAndroid from "./src/components/SafeViewAndroid";



export default function App() {
    return (
        <>
            <SafeAreaView style={SafeViewAndroid.AndroidSafeArea} />
            <StatusBar barStyle="dark-content" />
            <View style={{backgroundColor:"#F5F5F5",flex:1}}></View>
            
        </>
    );
}


