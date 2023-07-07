import React, { useState } from 'react';
import { Text, ScrollView, Image, Dimensions, View, TouchableOpacity } from "react-native";
import MainTemp from "../AnaSayfaComponent/MainTemp";
import HTML from "react-native-render-html";
import dummyhtml from "../dummyhtml.json";
import HelpDeskSheet from '../HelpDeskSheet';
import DonateSheet from '../DonateSheet';


const screenWidth = Dimensions.get('window').width;
const buttonColorRed = '#E74C3C';

export default function BagisDetay({ route,navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [isDonateSheetVisible, setDonateSheetVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const toggleDonateItemsList = () => {
    setDonateSheetVisible(!isDonateSheetVisible);
  };

  function goBack() {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  }

  const HTMLContent = dummyhtml.dummy;
  //bu kısımda gelen data yer alacak


  //sticky durumu kontrolü ve diğer stickyler
  const [isSticky, setIsSticky] = useState(false);
  
  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setIsSticky(offsetY > 220);
  };

  //hangi item çekilmiş
  const { itemId, itemImage, itemBaslik } = route.params;

  return (
    <>
      <MainTemp toggleModal={toggleModal} goBack={goBack} />

      <View>
        <Image
          source={require('../../images/Vector.png')}
          style={{
            flex: 1,
            position: 'absolute',
            resizeMode: "cover",
            width: "100%",
            backgroundColor: 'white'
          }}
        />
      </View>

      <ScrollView
        style={{ marginLeft: 15, marginRight: 15 }}
        bounces={false}
        stickyHeaderIndices={[1]}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={{ uri: itemImage }}
          style={{
            width: screenWidth - 30,
            height: 215,
            alignSelf: "center",
            borderRadius: 10,
            marginTop: 15
          }}
        />

        <View style={{ flex: 1, backgroundColor: isSticky ? "white" : "transparent" }}>
          <Text
            style={{
              fontFamily: "OpenSans-Bold",
              color: "#163E6C",
              fontSize: 16,
              fontWeight: 'bold',
              marginTop: 15,
              marginBottom: 15
            }}
          >
            {itemBaslik}
          </Text>
        </View>

        <HTML source={{ html: HTMLContent }} contentWidth={screenWidth - 30} />

      </ScrollView>

      <TouchableOpacity
        style={{
          height: 60,
          backgroundColor: buttonColorRed,
          justifyContent: "center",
          borderRadius: 10,
          width: screenWidth - 30,
          alignSelf: "center",
          bottom: 15
        }} onPress={toggleDonateItemsList}
      >
        <Text
          style={{
            fontFamily: "OpenSans-Bold",
            fontSize: 14,
            color: "white",
            fontWeight: 'bold',
            textAlign: "center"
          }}
        >
          {itemBaslik}
        </Text>
      </TouchableOpacity>
      <HelpDeskSheet isVisible={modalVisible} toggleModal={toggleModal} />
      <DonateSheet isVisible={isDonateSheetVisible} toggleDonateItemsList={toggleDonateItemsList} />
    </>
  );
}
