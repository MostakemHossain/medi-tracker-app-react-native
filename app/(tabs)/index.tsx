import { auth } from "@/config/FirebaseConfig";
import { signOut } from "firebase/auth";
import React from "react";
import { Button, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Logout" onPress={() => signOut(auth)} />
    </View>
  );
}
