import { Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import MarkdownDisplay from "../../../components/MarkdownDisplay";
import { SafeAreaView } from "react-native-safe-area-context";

const description = `
# voice Memo's 
work with microphone and audio playback
`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 7:  voice Memos" }} />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href="/day7/memos" asChild>
        <Button title="Go to memos" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;
