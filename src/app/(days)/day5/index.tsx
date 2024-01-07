import { View, Text, Button } from "react-native";
import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Stack } from "expo-router";

const DayDetailsScreen = () => {
  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 5: Airbnd" }} />

      <Link href="/day5/airbnb" asChild>
        <Button title="smart" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;
