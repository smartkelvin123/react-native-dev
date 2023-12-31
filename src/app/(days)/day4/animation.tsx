import { View, Text, Button } from "react-native";
import React, { useRef } from "react";
import LottieView from "lottie-react-native";

const AnimationScreen = () => {
  const animation = useRef<LottieView>(null);

  return (
    <View>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "#eee",
        }}
        source={require("../../../../assets/lottie/netflix.json")}
      />
      <Button title="play" onPress={() => animation.current?.play()} />
      <Button title="play" onPress={() => animation.current?.pause()} />
      <Button title="play" onPress={() => animation.current?.reset()} />

      <Text>animation</Text>
    </View>
  );
};

export default AnimationScreen;
