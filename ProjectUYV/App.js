import React, { useEffect, useState } from "react";
import { SafeAreaView, StatusBar, View, StyleSheet, Platform } from "react-native";
import SafeViewAndroid from "./src/components/SafeViewAndroid";


export default function App() {
  const statusBarHeight = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
        <View style={{ backgroundColor: "black", height: 72 }} />
       
        {/* Diğer içerikler */}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
});
