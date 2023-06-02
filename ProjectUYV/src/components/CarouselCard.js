import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';

const CarouselCards = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://websolist.com/testapi/');
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const renderCards = () => {
    if (data && data.mainCarousel) {
      return data.mainCarousel.map((item, index) => (
        <View key={index} style={{ marginBottom: 20 }}>
          <Image source={{ uri: item.image }} style={{ width: 200, height: 200 }} />
          <Text>{item.name}</Text>
          <TouchableOpacity onPress={() => handleButtonPress(item.productId)}>
            <Text>{item.buttonName}</Text>
          </TouchableOpacity>
        </View>
      ));
    }
    return null;
  };

  const handleButtonPress = (productId) => {
    // Bağış yap butonuna basıldığında yapılacak işlemler
    console.log('Bağış yapılacak ürün ID:', productId);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {renderCards()}
    </View>
  );
};

export default CarouselCards;
