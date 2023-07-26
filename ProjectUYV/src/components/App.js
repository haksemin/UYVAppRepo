import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreen from "./AnaSayfaComponent/MainScreen";
import BagisDetay from "./BagisComponent/BagisDetay";
import HatimMain from "./HatimComponents/HatimMain";
import UserAccount from "./Account/UserAccount";
import Login from "./LoginComponent/Login";
import BagisGecmisi from "./Account/BagisGecmisi";
import { createStackNavigator } from "@react-navigation/stack";
import Sepet from "./BagisComponent/Sepet";
import RegistrationScreen from "./LoginComponent/RegistrationScreen"
import BeforeLogin from "./LoginComponent/BeforeLogin";
import Verification from "./LoginComponent/Verification";
import { Image } from "react-native";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false  }} />
      <Stack.Screen name="BagisDetay" component={BagisDetay} options={{ headerShown: false  , animationEnabled:false}} />
      <Stack.Screen name="BeforeLogin" component={BeforeLogin} options={{headerShown:false, animationEnabled:false}}/>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false  , animationEnabled:false}} />

      <Stack.Screen name="BagisGecmisi" component={BagisGecmisi} options={{ headerShown: false  , animationEnabled:false}} />

      <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} options={{headerShown: false , animationEnabled:false}}/>
      <Stack.Screen name="Verification" component={Verification} options={{headerShown:false ,animationEnabled:false}}/>

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
        <Tab.Screen name="Bağış Sepetim" component={Sepet} options={{ headerShown: false  , animationEnabled:false}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
