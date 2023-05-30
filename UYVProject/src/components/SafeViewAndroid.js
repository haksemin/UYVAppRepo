import { StyleSheet, Platform, StatusBar } from "react-native";

const THEME_COLOR = '#FFFFFF';
export default StyleSheet.create({
  AndroidSafeArea: {
    topSafeArea: {
      flex: 0, 
      backgroundColor: THEME_COLOR
  }, 
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    
  }
});