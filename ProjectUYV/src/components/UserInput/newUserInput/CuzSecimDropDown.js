import React from "react";
import { View, Dimensions, Image } from "react-native";
import { MultipleSelectList } from "react-native-dropdown-select-list";

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function CuzSecimiDropDown() {
  const [selected, setSelected] = React.useState(["Bireysel Bağış"]);

  const data = [
    { key: '1', value: 'Cüz1' },
    { key: '2', value: 'Cüz2' },
  ];

  const handleSelect = (selectedItems) => {
    setSelected(selectedItems);
  };

  return (
    <View>
      <View
        style={{
          margin: 7.5,
          left: 0,
          borderColor: "#B7C3D1",
          alignSelf: "center",
        }}
      >
        <MultipleSelectList
          setSelected={handleSelect}
          data={data}
          placeholder="Cüzler"
          save="value"
          selected={selected}
          dropdownTextStyles={{ color: "#163E6C", fontSize: 15, borderColor: "#B7C3D1" }}
          dropdownStyles={{ borderColor: "#B7C3D1", height: 100 }}
          inputStyles={{ color: "#163E6C", fontSize: 16, borderColor: "#B7C3D1", fontFamily: "OpenSans-Regular", fontWeight: "400", width: SCREEN_WIDTH - 30 }}
          boxStyles={{ borderColor: "#B7C3D1", height: 60, width: SCREEN_WIDTH - 30 }}
          onSelect={() => console.log(selected)}
          arrowicon={<Image source={require('../../../images/down.png')} style={{ position: "absolute", right: 0, marginRight: 15, alignSelf: "center" }}></Image>}
        />
      </View>
    </View>
  );
}
