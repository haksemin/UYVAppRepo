import React,{useState} from "react";
import { View, Dimensions, Platform, Image,Text,TouchableOpacity} from "react-native";
import KayitliKartlarBottomSheet from "./KayitliKartlarBottomSheet";


const screenWidth = Dimensions.get("window").width;
export default function SavedCardsButton() {
  const shadowStyle =
    Platform.OS === "ios"
      ? {
          shadowOffset: { width: 0, height: 0 },
          shadowColor: "rgba(41, 23, 79, 0.05)",
          shadowOpacity: 1,
          shadowRadius: 10,
        }
      : {
          elevation: 1,
        };

        const [modalVisible, setModalVisible] = useState(false);

        const toggleModal = () => {
          setModalVisible(!modalVisible);
        }

  return (
    <>
    <View
      style={{
        width: screenWidth - 30,
        height: 70,
        backgroundColor: "white",
        alignSelf: "center",
        margin: 7.5,
        borderRadius: 10,
        borderColor: "#DCE2E9",
        borderWidth: 1,
        flexDirection:"row",
        ...shadowStyle, // Spread the shadow style here
      }}
    >
        <TouchableOpacity style={{flexDirection:"row",alignItems:"center",width:"100%"}} onPress={toggleModal}>
            <Image source={require("../../images/hesabim/frame1.png")} style={{marginHorizontal:15}}></Image>
            <Text style={{fontFamily:"OpenSans-Regular",fontSize:16,fontWeight:400,color:"#163E6C"}}>Kayıtlı Kartlarım</Text>
            <Image source={require("../../images/hesabim/right.png")} style={{position:"absolute",right:0,marginHorizontal:15,width:9,height:12}}></Image>
        </TouchableOpacity>

    </View>
    <KayitliKartlarBottomSheet isVisible={modalVisible} toggleModal={toggleModal}></KayitliKartlarBottomSheet>
    </>
  );
}
