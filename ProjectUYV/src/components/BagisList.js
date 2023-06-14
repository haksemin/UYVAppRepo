import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

const selectedColorForCard = "#F1F6EA";
const nonselectedColorForCard = "#E8ECF0";
const selectedColorForText = "#77A52C";
const nonselectedColorForText = "#163E6C";

export default function BagisList({ categories, selectedCategory, onCategorySelect }) {
  return (
    <View style={{ padding: 0 }}>
        <View style={{ height: 60, marginBottom: 25 }}>
            <Text style={{left:15}} >Bağış Listesi</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {categories.map((category, index) => (
                <TouchableOpacity key={index} onPress={() => onCategorySelect(category)}>
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
    </View>
  );
}
