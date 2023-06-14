import React, { useEffect, useState } from 'react';
import { View, Image, Dimensions, ScrollView } from 'react-native';
import axios from 'axios';
import MainTemp from './MainTemp';
import Mainstyles from './MainStyles';
import Carousel from '../Carousel';
import BagisList from '../BagisList';
import DonateItemsList from '../DonateItemsList';

export default function MainScreen() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    axios.get('https://websolist.com/testapi')
      .then(response => {
        setCategories(response.data.donateCategories);
        // Kategoriler yüklendiğinde, ilk kategoriyi seç
        if (response.data.donateCategories.length > 0) {
          setSelectedCategory(response.data.donateCategories[0]);
        }
      })
      .catch(error => console.error(error));
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  }

  return (
    <>
      <MainTemp />
      
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} bounces={false} stickyHeaderIndices={[2]}>
        <View>
          
          <Image source={require('../../images/Vector.png')} style={{ flex: 1, position: 'absolute' }} />
          
        </View>
        <View style={{flex:1}}>
        <Carousel />
        </View>
        
        <View style={{flex:1}}>
          <BagisList categories={categories} selectedCategory={selectedCategory} onCategorySelect={handleCategorySelect} />
        </View>
        <View style={{flex:1}}>
          <DonateItemsList items={selectedCategory?.donateItems} />
        </View>
      </ScrollView>
     
    </>
  );
}
