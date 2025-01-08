import Colors from "@/ constant/Colors";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Signin() {
  return (
    <View
      style={{
        padding: 25,
      }}
    >
      <Text style={styles.textHeader}>Let's Sign you In</Text>
      <Text style={styles.subText}>WelCome back</Text>
      <Text style={styles.subText}>You've been missed!</Text>
      <View
        style={{
          marginTop: 25,
        }}
      >
        <Text
          style={{
            marginLeft: 4,
          }}
        >
          Email
        </Text>
        <TextInput style={styles.textInput} placeholder="Email" />
      </View>
      <View
        style={{
          marginTop: 25,
        }}
      >
        <Text
          style={{
            marginLeft: 4,
          }}
        >
          Password
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text
          style={{
            color: "white",
            fontSize: 17,
            textAlign: "center",
          }}
        >
          Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonCreate}>
        <Text
          style={{
            color: Colors.PRIMARY,
            fontSize: 17,
            textAlign: "center",
          }}
        >
          Create Account
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 15,
  },
  subText: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
    color: Colors.GRAY,
  },
  textInput: {
    marginTop: 5,
    padding: 10,
    borderWidth: 1,
    fontSize: 17,
    borderRadius: 10,
    backgroundColor: "white",
  },
  button: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: Colors.PRIMARY,
    marginTop: 35,
  },
  buttonCreate: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "white",
    marginTop: 20,
    borderWidth:1,
    borderColor: Colors.PRIMARY,
  },
});
