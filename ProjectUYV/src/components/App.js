import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreen from "./AnaSayfaComponent/MainScreen";
import BagisDetay from "./BagisComponent/BagisDetay";
import HatimMain from "./HatimComponents/HatimMain";
import UserAccount from "./Account/UserAccount";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false  }} />
      <Stack.Screen name="BagisDetay" component={BagisDetay} options={{ headerShown: false  , animationEnabled:false}} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="AnaSayfa">
        <Tab.Screen
          name="AnaSayfa"
          component={MainStack}
          options={{ headerShown:false, animationEnabled:false, tabBarIcon: () => <Image source={require(".././images/Destek.png")}  /> }}
        />
        <Tab.Screen name="Hatim Main" component={HatimMain} options={{ headerShown: false , animationEnabled:false }} />
        <Tab.Screen name="Hesabım" component={UserAccount} options={{ headerShown: false  , animationEnabled:false}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
