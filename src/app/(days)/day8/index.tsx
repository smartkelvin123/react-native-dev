import { Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import MarkdownDisplay from "../../../components/MarkdownDisplay";
import { SafeAreaView } from "react-native-safe-area-context";

const description = `
# weather app
`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 8: weather app" }} />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href="/day8/weather" asChild>
        <Button title="Go to weather app" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;
