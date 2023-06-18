import React, { useEffect, useState } from 'react';
import { View, Image, Dimensions, ScrollView, Text } from 'react-native';
import axios from 'axios';
import MainTemp from './MainTemp';
import Carousel from '../Carousel';
import BagisList from '../BagisList';
import DonateItemsList from '../DonateItemsList';
import { SCREEN_WIDTH } from '@gorhom/bottom-sheet';

export default function MainScreen() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isSticky, setIsSticky] = useState(false);  // Sticky durumu için yeni durum değişkeni

  useEffect(() => {
    axios.get('https://websolist.com/testapi')
      .then(response => {
        setCategories(response.data.donateCategories);
        if (response.data.donateCategories.length > 0) {
          setSelectedCategory(response.data.donateCategories[0]);
        }
      })
      .catch(error => console.error(error));
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  }

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setIsSticky(offsetY > 220);  // Sticky durumunu güncelle
  };

  const SCREEN_WIDTH = SCREEN_WIDTH;

  return (
    <>
      <MainTemp />
      
      <View >
        <Image source={require('../../images/Vector.png')} 
          style={{ 
          flex: 1, 
          position: 'absolute', 
          resizeMode:"cover",
          width:"100%",
          backgroundColor: 'white'
        }}/>
      </View>

      
      
      <ScrollView 
        contentContainerStyle={{ flexGrow: 1 }} 
        bounces={false} 
        stickyHeaderIndices={[1]}
        onScroll={handleScroll}  // onScroll özelliği ekle
      >
        <View style={{flex:1}}>
          <Carousel />
        </View>
        
        <View style={{flex:1,backgroundColor: isSticky ? "white" : "transparent"}}>  
          <BagisList categories={categories} selectedCategory={selectedCategory} onCategorySelect={handleCategorySelect} />
        </View>

        <View style={{flex:1}}>
          <DonateItemsList items={selectedCategory?.donateItems} />
        </View>
      </ScrollView>

      <View style={{position:"absolute",width:"100%", height:155,backgroundColor:"white",bottom:0,borderTopLeftRadius:15,borderTopRightRadius:15,}}>
        <View style={{height:50,width:"100%",backgroundColor:"#163E6C",borderTopLeftRadius:15,borderTopRightRadius:15,position:"absolute"}}>
          <Text style={{ fontFamily: "OpenSans-SemiBold",fontSize: 16, fontWeight: 700, color:"white",margin:15}}>Destek Hattı</Text>
        </View>
      </View>
     
    </>
  );
}
