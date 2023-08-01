import React, { useRef } from "react";
import { View, Image, Text, Dimensions } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  runOnJS,
} from "react-native-reanimated";

export default function EklenenKisiComponent() {
  const SCREEN_WIDTH = Dimensions.get("window").width;
  const deleteButtonWidth = 45;

  const translateX = useSharedValue(0);

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = translateX.value;
    },
    onActive: (event, ctx) => {
      translateX.value = ctx.startX + event.translationX;
    },
    onEnd: (event) => {
      if (event.translationX > deleteButtonWidth / 2) {
        translateX.value = withSpring(deleteButtonWidth);
      } else {
        translateX.value = withSpring(0);
      }
    },
  });

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  const onDeleteButtonPress = () => {
    console.log("Delete button pressed!");
  };

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}
    activeOffsetX={[-30, 30]} 
    >
      <Animated.View style={[{ width: SCREEN_WIDTH-30 }, animatedStyles]}>
        <View style={{marginVertical:10}}>
          <Image
            source={require("../../images/hesabim/Line.png")}
            style={{ width: SCREEN_WIDTH - 30, alignSelf: "center" }}
          />
          <View style={{ justifyContent: "center", marginTop: 15 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ marginHorizontal: 5 }}>
                <Image
                  source={require("../../images/adamuser.png")}
                  style={{ width: 46, height: 46 }}
                />
              </View>
              <View style={{ flexDirection: "column", marginHorizontal: 5 }}>
                <Text
                  style={{
                    color: "#163E6C",
                    fontFamily: "OpenSans-Regular",
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                >
                  Fatma GEDİK
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 5,
                  }}
                >
                  <Image
                    source={require("../../images/mobilegreen.png")}
                    style={{ width: 11, height: 14 }}
                  />
                  <Text
                    style={{
                      color: "#163E6C",
                      fontFamily: "OpenSans-Regular",
                      fontSize: 12,
                      fontWeight: 400,
                      marginHorizontal: 5,
                    }}
                  >
                    +90 555 368 2666
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                right: 0,
                position: "absolute",
                alignSelf: "center",
                justifyContent: "center",
                flexDirection: "column",
                alignContent: "center",
                marginHorizontal: 5,
              }}
            >
              <Text
                style={{
                  color: "#77A52C",
                  fontFamily: "OpenSans-Regular",
                  fontSize: 18,
                  fontWeight: 700,
                }}
              >
                1.-4. Cüz
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            left: -60,
            top: 15,
            bottom: 0,
            width: deleteButtonWidth,
            backgroundColor: "#E74C3C",
            justifyContent: "center",
            alignItems: "center",
          }}
          onTouchEnd={() => {
            runOnJS(onDeleteButtonPress)();
          }}
        >
          <Text style={{ color: "white",fontFamily:"OpenSans-Regular",fontSize:14 }}>Sil</Text>
        </View>
      </Animated.View>
    </PanGestureHandler>
  );
}