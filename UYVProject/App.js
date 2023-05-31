import React, { useEffect, useState } from "react";
import { SafeAreaView, StatusBar, View, StyleSheet, Platform, Dimensions } from "react-native";
import SafeViewAndroid from "./src/components/SafeViewAndroid";
import DeviceInfo from "react-native-device-info";

export default function App() {
  const [hasNotch, setHasNotch] = useState(false);

  useEffect(() => {
    checkDeviceNotch();
  }, []);

  const checkDeviceNotch = async () => {
    const deviceHasNotch = await DeviceInfo.hasNotch();
    setHasNotch(deviceHasNotch);
  };

  const statusBarHeight = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea, styles.container]}>
        <View style={[styles.topBar, { backgroundColor: "white", height: statusBarHeight +8}]} />
        {hasNotch && <View style={[styles.notchContainer, { backgroundColor: "white", marginTop: -statusBarHeight }]} />}
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
  topBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  notchContainer: {
    height: 72,
  },
});
