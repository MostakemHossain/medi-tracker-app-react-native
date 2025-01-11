import EmptyState from "@/components/EmptyState";
import Header from "@/components/Header";
import React from "react";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <View
      style={{
        padding: 25,
        backgroundColor: "white",
        height: "100%",
        width: "100%",
      }}
    >
      <Header />
      <EmptyState />
    </View>
  );
}
