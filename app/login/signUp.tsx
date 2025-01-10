import Colors from "@/ constant/Colors";
import { auth } from "@/config/FirebaseConfig";
import { setLocalStorage } from "@/service/Storage";
import { useRouter } from "expo-router";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";

export default function signUp() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userName, setUserName] = useState<string>("");

  const onCreateAccount = () => {
    if (!email || !password || !userName) {
      ToastAndroid.show("Please fill in all fields", ToastAndroid.SHORT);
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        await updateProfile(user, {
          displayName: userName,
        });
      await  setLocalStorage("userDetail", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode == "auth/email-already-in-use") {
          ToastAndroid.show("Email already in use", ToastAndroid.SHORT);
        }
      });
  };

  return (
    <View
      style={{
        padding: 25,
      }}
    >
      <Text style={styles.textHeader}>Create New account</Text>

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
          Full Name
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Full Name"
          onChangeText={(value) => setUserName(value)}
        />
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
          Email
        </Text>
        <TextInput
          onChangeText={(value) => setEmail(value)}
          style={styles.textInput}
          placeholder="Email"
        />
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
          onChangeText={(value) => setPassword(value)}
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={onCreateAccount}>
        <Text
          style={{
            color: "white",
            fontSize: 17,
            textAlign: "center",
          }}
        >
          Create Account
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonCreate}
        onPress={() => router.push("/login/signin")}
      >
        <Text
          style={{
            color: Colors.PRIMARY,
            fontSize: 17,
            textAlign: "center",
          }}
        >
          Already Account? Sign In
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
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
  },
});
