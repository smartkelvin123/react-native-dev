import { View, Text, Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import MarkdownDisplay from "../../../components/MarkdownDisplay";
import { SafeAreaView } from "react-native-safe-area-context";

const description = `
# Authentication
AWS Amplify v6 Authentication`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 9: Auth" }} />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href="/(days)/day9/protected/" asChild>
        <Button title="Go to Protected App" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;
