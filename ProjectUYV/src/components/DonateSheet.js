import React from "react";
import { View, Image, Text, TouchableOpacity , Dimensions,TextInput,KeyboardAvoidingView} from 'react-native';
import Modal from "react-native-modal";
import { SelectList } from 'react-native-dropdown-select-list';
import phonecodes from "./phonecodes.json";
import Userdatastring from "./UserInput/userdata_string";
import Userdataint from "./UserInput/userdata_int";

const SCREEN_WIDTH = Dimensions.get('window').width;
export default function DonateSheet({ isVisible, toggleDonateItemsList, itemBaslik }) {
  const [selectedCountry, setSelectedCountry] = React.useState("");

  const countryData = phonecodes.map(country => ({
    key: country.dial_code,
    value: `${country.name} (${country.dial_code})`
  }));

  console.log(selectedCountry);

  return (
    <Modal isVisible={isVisible} style={{ justifyContent: 'flex-end', margin: 0 }}>
      <View style={{ width: "100%", height: 584, backgroundColor: "white", borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
        <View style={{ height: 50, width: "100%", backgroundColor: "#163E6C", borderTopLeftRadius: 15, borderTopRightRadius: 15, position: "absolute", justifyContent: "center" }}>
          <Text style={{ fontFamily: "OpenSans-SemiBold", fontSize: 16, fontWeight: 700, color: "white", marginLeft: 15 }}>{itemBaslik}</Text>
          <TouchableOpacity style={{ position: "absolute", right: 0, marginRight: 15 }} onPress={toggleDonateItemsList}>
            <Image source={require("../images/xmark.png")} />
          </TouchableOpacity>
        </View>

        <View style={{ backgroundColor: "white", position: "absolute", width: "100%", height: 534, bottom: 0, alignContent: "center", flexDirection: "column" }}>
          
          <Userdataint></Userdataint>
          <Userdatastring></Userdatastring>
          

        </View>
      </View>
    </Modal>
  );
}
