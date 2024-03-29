import React, { useEffect, useState, useRef } from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import CarouselCard from './CarouselCard';
import axios from 'axios';

const Carousel = () => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef();

  const viewabilityConfig = useRef({ viewAreaCoveragePercentThreshold: 50 });
  const onViewableItemsChangedRef = useRef(({ viewableItems }) => {
    if (viewableItems && viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  });

  useEffect(() => {
    axios
      .get('https://websolist.com/testapi/')
      .then(function (response) {
        setData(response.data.mainCarousel);
      })
      .catch(function (error) {
        console.log(error);
      });

    const interval = setInterval(() => {
      if (currentIndex < data.length - 1) {
        scrollRef.current.scrollToIndex({ index: currentIndex + 1, animated: true });
      } else {
        scrollRef.current.scrollToIndex({ index: 0, animated: true });
        setCurrentIndex(0);
      }
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  const renderItem = ({ item }) => {
    return <CarouselCard item={item} />;
  };

  const screenWidth = Dimensions.get('window').width;

  return (
    <View>
      <FlatList
        ref={scrollRef}
        data={data}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        onViewableItemsChanged={onViewableItemsChangedRef.current}
        viewabilityConfig={viewabilityConfig.current}
      />

      <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
        {data.map((item, index) => (
          <View
            key={index}
            style={{
              height: 10,
              width: 10,
              borderRadius: 5,
              margin: 5,
              backgroundColor: currentIndex === index ? '#163E6C' : '#DCE2E9',
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;
