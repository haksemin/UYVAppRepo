import React from 'react';
import { View, Image, Text, Dimensions, ScrollView } from 'react-native';
import MainTemp from './MainTemp';
import Mainstyles from './MainStyles';
import Carousel from '../Carousel';
import BagisList from '../BagisList';

export default function MainScreen() {
  return (
    <>
      <MainTemp />
      
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} bounces={false}>
        <View style={Mainstyles.content}>
          <Image source={require('../../images/Vector.png')} style={{ flex: 1, position: 'absolute' }} />
          <View style={{ flex: 1 }}>
            <Carousel />
            <BagisList />
            
          </View>
        </View>
      </ScrollView>
     
    </>
  );
}
