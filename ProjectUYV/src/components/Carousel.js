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
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = activeIndex + 1;
      if (nextIndex === carouselItems.length) {
        nextIndex = 0;
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
    const activeIndex = Math.floor(contentOffset.x / slideSize);
    setActiveIndex(activeIndex);
  };

  const handleScrollEnd = (event) => {
    const slideSize = width;
    const { contentOffset } = event.nativeEvent;
    const pageIndex = Math.floor(contentOffset.x / slideSize);

    if (pageIndex === carouselItems.length - 1) {
      scrollViewRef.current.scrollTo({ x: 0, animated: false });
      setActiveIndex(0);
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
        onMomentumScrollEnd={handleScrollEnd}
        scrollEventThrottle={16}
      >
        {carouselItems.map((item, index) => (
          <View key={index}>
            <Image
              style={{ width: width, height: 220, top: 15, resizeMode: "contain" }}
              source={item.image}
            />
          </View>
        ))}
      </ScrollView>
      <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10 }}>
        {carouselItems.map((item, index) => (
          <View
            key={index}
            style={[
              {
                opacity: index === activeIndex ? 1 : 0.3,
              },
              {
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 5,
                backgroundColor: "gray",
                top: -450,
              },
              index === activeIndex && { backgroundColor: "white" },
            ]}
          />
        ))}
      </View>
    </View>
  );
}
