import React, { useState, useEffect, useRef } from "react";
import { Image, ScrollView, View, Dimensions, Text, Button } from "react-native";
import axios from "axios";

const { width } = Dimensions.get("window");

export default function Carousel() {
  const [data, setData] = useState(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const scrollViewRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://websolist.com/testapi/");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (data) {
      const interval = setInterval(() => {
        let nextIndex = activeIndex + 1;
        if (nextIndex === data.mainCarousel.length + 1) {
          nextIndex = 1;
        }
        scrollViewRef.current.scrollTo({
          x: nextIndex * width,
          y: 0,
          animated: true,
        });
        setActiveIndex(nextIndex);
      }, 10000);

      return () => clearInterval(interval);
    }
  }, [activeIndex, data]);

  const handleScroll = (event) => {
    const slideSize = width;
    const { contentOffset } = event.nativeEvent;
    const pageIndex = Math.floor(contentOffset.x / slideSize);

    if (pageIndex === 0) {
      scrollViewRef.current.scrollTo({
        x: data.mainCarousel.length * width,
        animated: false,
      });
      setActiveIndex(data.mainCarousel.length);
    } else if (pageIndex === data.mainCarousel.length + 1) {
      scrollViewRef.current.scrollTo({ x: width, animated: false });
      setActiveIndex(1);
    } else {
      setActiveIndex(pageIndex);
    }
  };

  if (!data) {
    return null; // veya bir yüklenme göstergesi
  }

  const carouselItems = data.mainCarousel;

  return (
    <View style={{ height:230 ,top:25,justifyContent:"center"}}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={{ flex: 1 }}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <Image
          style={{ width: width, height: 215, top: 15, resizeMode: "contain" }}
          source={{ uri: carouselItems[carouselItems.length - 1].image }}
        />
        {carouselItems.map((item, index) => (
          
          <View key={index} style={{alignItems:"center", justifyContent:"flex-end"}}>
          
            
          <Image
            key={index}
            style={{ width: width, height: 215, top: 15, resizeMode: "contain" }}
            source={{ uri: item.image }}
          />
          <Text style ={{position:"absolute",bottom:50,left:30,fontSize:18,color:"white"}}>{item.name}</Text>
          <Button style ={{position:"absolute"}} title={item.buttonName}></Button>
          
          </View>
        ))}
        <Image
          style={{ width: width, height: 215, top: 15, resizeMode: "contain" }}
          source={{ uri: carouselItems[0].image }}
        />
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        {carouselItems.map((item, index) => (
          <View
            key={index}
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 5,
              backgroundColor: index === activeIndex - 1 ? "white" : "gray",
            }}
          />
        ))}
      </View>
    </View>
  );
}