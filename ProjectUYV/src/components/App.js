import React  from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreen from "./AnaSayfaComponent/MainScreen";
import NewScript from "./BagisDetay";
import { Image } from "react-native";



const Tab = createBottomTabNavigator();
export default function App(){

    return(
        <NavigationContainer>
            <Tab.Navigator initialRouteName="AnaSayfa">
                <Tab.Screen name= "AnaSayfa" component={MainScreen} options={{headerShown:false,tabBarIcon: ()=> <Image source={require(".././images/Destek.png")}></Image> }}></Tab.Screen>
                <Tab.Screen name= "Feed" component={NewScript} options={{headerShown:false}}></Tab.Screen>
                
            </Tab.Navigator>
        </NavigationContainer>

    )
}




