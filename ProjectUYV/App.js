import React, { useEffect, useState } from "react";
import { SafeAreaView, StatusBar, View, StyleSheet, Platform } from "react-native";

const iosStatsBarColor = 'red';


export default function App() {
    return (
        <>
            <StatusBar backgroundColor={"white"} barStyle="dark-content" />
            <SafeAreaView style={styles.topSafeArea}>
            <View style={{backgroundColor:"black",height:72}}></View>
            </SafeAreaView >
            
            
            
            
            
        </>
    );
}


const styles = StyleSheet.create({
    topSafeArea: {
        flex: 0, 
        backgroundColor: iosStatsBarColor
    },
 
})

