import React from "react";
import { View, Dimensions, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HatimKartButonlu({ content,wayto }) {
  const shadowStyle =
    Platform.OS === "ios"
      ? {
          shadowOffset: { width: 0, height: 0 },
          shadowColor: "rgba(41, 23, 79, 0.1)",
          shadowOpacity: 0.5,
          shadowRadius: 0,
        }
      : {
          elevation: 4,
        };

  const SCREEN_WIDTH = Dimensions.get('window').width;

      const navigation = useNavigation();

      function wayto1(){
        navigation.navigate("HatimJoin");
      }
 

  return (
    <TouchableOpacity activeOpacity={1} onPress={wayto1}>
      <View style={{ width: SCREEN_WIDTH - 30, height: 132, alignSelf: "center", backgroundColor: "white", borderRadius: 10, justifyContent: "space-between", marginTop: 15, ...shadowStyle }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ marginHorizontal: 15, marginVertical: 15 }}>
            <Text style={{ color: "#163E6C", fontFamily: "OpenSans-Regular", fontSize: 16, fontWeight: "700" }}> Hatim Adı</Text>
            <View style={{ marginTop: 15, marginLeft: 5, flexDirection: "row", alignItems: "center" }}>
              <Image source={require("../../images/hesabim/calendar.png")} style={{ width: 13, height: 14 }}></Image>
              <Text style={{ color: "#163E6C", fontFamily: "OpenSans-Regular", fontSize: 14, fontWeight: "400" }}> 12.Mayıs.2023</Text>
              <View style={{ marginLeft: 15, flexDirection: "row", alignItems: "center" }}>
                <Image source={require("../../images/hatim/users.png")} style={{ width: 18, height: 14 }} ></Image>
                <Text style={{ color: "#163E6C", fontFamily: "OpenSans-Regular", fontSize: 14, fontWeight: "400" }}> 24</Text>
              </View>
            </View>
          </View>
          <View style={{ height: 60, width: 60, backgroundColor: "black", alignSelf: "center", marginLeft: 20 }}>
          </View>
          <View style={{ position: "absolute", right: 0, alignSelf: "flex-end", alignSelf: "center", marginRight: 15 }}>
            <Image source={require("../../images/hesabim/right.png")} style={{ width: 9, height: 12 }} ></Image>
          </View>
        </View>
        <View style={{ backgroundColor: "#163E6C", width: SCREEN_WIDTH - 30, height: 42, borderBottomLeftRadius: 10, borderBottomEndRadius: 10, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ color: "white", fontFamily: "OpenSans-Regular", fontSize: 14, fontWeight: "600" }}>{content}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
