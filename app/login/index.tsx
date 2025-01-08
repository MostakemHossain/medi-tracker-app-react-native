import Colors from "@/ constant/Colors";
import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function LoginScreen() {
  const router = useRouter();
  return (
    <View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: 40,
        }}
      >
        <Image
          source={require("../../assets/images/login.png")}
          style={styles.image}
        />
      </View>
      <View
        style={{
          padding: 25,
          backgroundColor: Colors.PRIMARY,
          height: "100%",
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 30,
            textAlign: "center",
          }}
        >
          Stay on Track ,Stay Healthy
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 17,
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Track your medicine,take control of your health. Stay consistent, Stay
          confident.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text
            style={{ textAlign: "center", fontSize: 16, color: Colors.PRIMARY }}
            onPress={() => router.push("/login/signin")}
          >
            Continue
          </Text>
        </TouchableOpacity>
        <Text style={{ color: "white", marginTop: 8, textAlign: "center" }}>
          Note: By Clicking Continue button,you will agree to our terms &
          conditions
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 210,
    height: 450,
  },
  button: {
    padding: 15,
    backgroundColor: "white",
    borderRadius: 99,
    marginTop: 25,
  },
});
