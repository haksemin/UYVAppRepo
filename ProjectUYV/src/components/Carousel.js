import React, { useState, useEffect, useRef } from "react";
import { Image, ScrollView, View, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const carouselItems = [
  {
    image: require("../images/CardSlider.png"),
    text: "Card0",
  },
  {
    image: require("../images/CardSlider.png"),
    text: "Card1",
  },
  {
    image: require("../images/CardSlider.png"),
    text: "Card2",
  },
];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(1);
  const scrollViewRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = activeIndex + 1;
      if (nextIndex === carouselItems.length + 1) {
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
  }, [activeIndex]);

  const handleScroll = (event) => {
    const slideSize = width;
    const { contentOffset } = event.nativeEvent;
    const pageIndex = Math.floor(contentOffset.x / slideSize);

    if (pageIndex === 0) {
      scrollViewRef.current.scrollTo({
        x: carouselItems.length * width,
        animated: false,
      });
      setActiveIndex(carouselItems.length);
    } else if (pageIndex === carouselItems.length + 1) {
      scrollViewRef.current.scrollTo({ x: width, animated: false });
      setActiveIndex(1);
    } else {
      setActiveIndex(pageIndex);
    }
  };

  return (
    <View style={{ flex: 1 }}>
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
          style={{ width: width, height: 220, top: 15, resizeMode: "contain" }}
          source={carouselItems[carouselItems.length - 1].image}
        />
        {carouselItems.map((item, index) => (
          <Image
            key={index}
            style={{ width: width, height: 220, top: 15, resizeMode: "contain" }}
            source={item.image}
          />
        ))}
        <Image
          style={{ width: width, height: 220, top: 15, resizeMode: "contain" }}
          source={carouselItems[0].image}
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
