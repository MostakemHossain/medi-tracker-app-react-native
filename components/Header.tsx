import Colors from "@/ constant/Colors";
import { getLocalStorage } from "@/service/Storage";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";

interface User {
  displayName: string;
  [key: string]: any;
}

export default function Header() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    getUserDetail();
  }, []);

  const getUserDetail = async () => {
    const userInfo = await getLocalStorage("userDetail");
    setUser(userInfo);
  };

  return (
    <View
      style={{
        marginTop: 20,
        width: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/images/smiley.png")}
            style={{
              width: 45,
              height: 45,
            }}
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 30,
            }}
          >
            Hello {user?.displayName || "Guest"} 👋{" "}
          </Text>
        </View>
        <Ionicons name="settings-outline" size={34} color={Colors.DARK_GRAY} />
      </View>
    </View>
  );
}
