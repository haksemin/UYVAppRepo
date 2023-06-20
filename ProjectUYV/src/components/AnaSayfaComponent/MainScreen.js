import React, { useEffect, useState } from 'react';
import { View, Image, ScrollView, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';
import MainTemp from './MainTemp';
import Carousel from '../Carousel';
import BagisList from '../BagisList';
import DonateItemsList from '../DonateItemsList';
import HelpDeskSheet from '../HelpDeskSheet';

export default function MainScreen() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isSticky, setIsSticky] = useState(false);  // Sticky durumu için yeni durum değişkeni
  const [modalVisible, setModalVisible] = useState(false); // New State for modal visibility

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  }

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
      <MainTemp toggleModal={toggleModal} />

      
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

      <HelpDeskSheet isVisible={modalVisible} toggleModal={toggleModal} />
     
    </>
  );
}
