import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CardBagis from './CardBagis';

const selectedColorForCard = "#F1F6EA";
const nonselectedColorForCard = "#E8ECF0";
const selectedColorForText = "#77A52C";
const nonselectedColorForText = "#163E6C";

export default function BagisList() {
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
        <ScrollView style={{ flex: 1 }}>
            <View style={{ padding: 15 }}>
                <View style={{ height: 50, marginBottom: 25 }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {categories.map((category, index) => (
                        <TouchableOpacity key={index} onPress={() => handleCategorySelect(category)}>
                            <View style={{ 
                            height:30, 
                            width:107, 
                            backgroundColor: selectedCategory === category ? selectedColorForCard : nonselectedColorForCard, 
                            margin:10, 
                            borderRadius:5, 
                            alignItems:"center", 
                            justifyContent:"center" 
                            }}>
                            <Text style={{ fontFamily: "OpenSans-SemiBold", color: selectedCategory === category ? selectedColorForText : nonselectedColorForText, fontSize: 14, fontWeight: 600 }}>
                                {category.categoryName}
                            </Text>
                            </View>
                        </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
        
                <View>
                    {selectedCategory?.donateItems.map((item, index) => (
                        <CardBagis key={index} item={item} />
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}
