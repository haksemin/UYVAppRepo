import React, { useEffect, useRef, useState } from 'react';
import { FlatList, View, Dimensions } from 'react-native';
import Card from './CarouselCard';

const Carousel = () => {
  const [data, setData] = useState([]);
  const scrollRef = useRef();

  useEffect(() => {
    fetch('https://websolist.com/testapi/')
      .then((response) => response.json())
      .then((json) => setData(json.mainCarousel))
      .catch((error) => console.error(error));
  }, []);

  const windowWidth = Dimensions.get('window').width;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (data.length > 0) {
      scrollRef.current?.scrollToIndex({ animated: true, index: index % data.length });
    }
  }, [index]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((oldIndex) => oldIndex + 1);
    }, 10000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <View>
      <FlatList
        ref={scrollRef}
        data={data}
        keyExtractor={item => item.productId}
        horizontal
        pagingEnabled
        onEndReached={() => scrollRef.current?.scrollToOffset({ animated: true, offset: 0 })}
        onEndReachedThreshold={0.5}
        renderItem={({ item }) => (
          <View style={{ width: windowWidth }}>
            <Card item={item} />
          </View>
        )}
      />
    </View>
  );
};

export default Carousel;
