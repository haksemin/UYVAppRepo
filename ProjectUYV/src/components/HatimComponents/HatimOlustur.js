import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, Dimensions, ScrollView } from "react-native";
import MainTemp from "../AnaSayfaComponent/MainTemp";
import HelpDeskSheet from '../HelpDeskSheet';
import BenimHatimComponent from "./BenimHatimCard";
import InputBoxNew from "../UserInput/newUserInput/InputBoxNew";
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import HatimDavetModal from "./HatimDavetModal";
import { useNavigation } from "@react-navigation/native";

export default function HatimOlustur() {
  const SCREEN_WIDTH = Dimensions.get('window').width;
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleM,setModalVisibleM] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const navigation = useNavigation();

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const toggleModalM = () => {
    setModalVisibleM(!modalVisibleM);
  };

  const toggleDatePicker = () => {
    setDatePickerVisibility(!isDatePickerVisible);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };





  function goBacktoMain() {
    navigation.navigate("Hatim Main");
  }

  const formatDate = (date) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return date.toLocaleDateString("tr-TR", options);
  };

  return (
    <>
      <MainTemp toggleModal={toggleModal} goBack={goBacktoMain} />

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

      <View style={{ top: 0, height: 210 }}>
        <Image source={require("../../images/hatim/ustsari.png")} style={{ width: "100%", top: 0 }} />
        <View style={{ position: "absolute", top: 15, flexDirection: "column", width: "100%" }}>
          <View style={{ flexDirection: "row", margin: 15, alignItems: "center" }}>
            <Image source={require("../../images/hatim/book-open.png")} style={{ width: 34, height: 30 }} />
            <Text style={{ fontFamily: "OpenSans-Regular", color: "white", fontSize: 24, fontWeight: 700, marginLeft: 15 }}>Hatim Paylaş</Text>
          </View>

          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} bounces={false} >
            <View style={{ marginTop: 60 }}>
              <InputBoxNew contenttext={"Hatim Adı"} aciklama={"Hatim Adı Giriniz"}></InputBoxNew>
            </View>
            

            <View>
              <TouchableOpacity onPress={toggleDatePicker}>
                <View style={{ margin: 7.5, alignSelf: "center" }}>
                  <View style={{ width: SCREEN_WIDTH - 30, height: 60, borderRadius: 10, borderColor: "#B7C3D1", borderWidth: 1, backgroundColor: "white", justifyContent: "center" }}>
                    <Text style={{ fontFamily: "OpenSans-Regular", fontSize: 16, fontWeight: 400, color: "#163E6C", marginTop: 0, left: 15 }}>Bitiş Tarihi</Text>
                    <View style={{ marginLeft: 15 }}>
                      {selectedDate && (
                        <Text style={{ fontFamily: "OpenSans-Regular", fontSize: 14, fontWeight: 600, color: "#163E6C" }}>
                          {`Seçilen: ${formatDate(selectedDate)}`}
                        </Text>
                      )}
                    </View>
                    <View style={{ position: "absolute", right: 0, marginRight: 15 }}>
                      <Image source={require("../../images/down.png")}></Image>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>

              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="datetime"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />

            </View>
            <View style={{ width: SCREEN_WIDTH - 30, margin: 15 }}>
              <Text style={{ color: "#163E6C", fontFamily: "OpenSans-Regular", fontSize: 14, fontWeight: "700" }}>Hatim Paylaşılacak Kişiler</Text>
              <TouchableOpacity onPress={toggleModalM}>
                <View style={{ backgroundColor: "#E8ECF0", width: SCREEN_WIDTH - 30, height: 60, marginVertical: 15, borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                  <Text style={{ color: "#163E6C", fontFamily: "OpenSans-Regular", fontSize: 16, fontWeight: "600" }}>Kişi Ekle +</Text>
                </View>
              </TouchableOpacity>
              <View style={{ borderStyle: "dashed", borderColor: "#77A52C", height: 60, width: SCREEN_WIDTH - 30, backgroundColor: "#F1F6EA", borderWidth: 2, borderRadius: 5, marginTop: 15, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ color: "#163E6C", fontFamily: "OpenSans-Regular", fontSize: 14, fontWeight: "400" }}>Hatim paylaşılan kişiler SMS ile bilgilendirilecektir. Lütfen bilgileri doğru girdiğinizden emin olunuz.</Text>
              </View>
            </View>
          </ScrollView>
        </View>

      </View>

      <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
        <TouchableOpacity >
          <View style={{ backgroundColor: "#163E6C", width: SCREEN_WIDTH - 30, height: 60, marginVertical: 15, borderRadius: 10, justifyContent: "center", alignItems: "center", alignSelf: "center", }}>
            <Text style={{ color: "white", fontFamily: "OpenSans-Regular", fontSize: 16, fontWeight: "600" }}>Hatim Oluştur / Paylaş</Text>
          </View>
        </TouchableOpacity>
      </View>

      <HelpDeskSheet isVisible={modalVisible} toggleModal={toggleModal} />
      <HatimDavetModal isVisibleM={modalVisibleM} toggleDonateItemsList={toggleModalM}></HatimDavetModal>
    </>
  )
}
