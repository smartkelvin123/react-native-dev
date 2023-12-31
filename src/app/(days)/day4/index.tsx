import { View, Text, Button } from "react-native";
import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Stack } from "expo-router";

const DayDetailsScreen = () => {
  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 4: Animation" }} />

      <Link href="/day4/animation" asChild>
        <Button title="Go to animation screen" />
      </Link>
      <Link href="/day4/splash" asChild>
        <Button title="Go to splash screen" />
      </Link>
      {/* <Link href="/(days)/day4/splash" asChild>
        <Button title="Go to onboarding" />
      </Link> */}
    </SafeAreaView>
  );
};

export default DayDetailsScreen;
