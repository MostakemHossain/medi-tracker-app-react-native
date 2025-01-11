import Colors from "@/ constant/Colors";
import ConstantString from "@/ constant/ConstantString";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function EmptyState() {
  return (
    <View
      style={{
        marginTop: 80,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../assets/images/medicine.png")}
        style={{
          width: 120,
          height: 120,
        }}
      />
      <Text
        style={{
          fontSize: 35,
          fontWeight: "bold",
          marginTop: 30,
        }}
      >
        {ConstantString.NoMedication}
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: Colors.DARK_GRAY,
          textAlign: "center",
          marginTop: 20,
        }}
      >
        {ConstantString.MedicationSubText}
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: Colors.PRIMARY,
          padding: 15,
          borderRadius: 10,
          width: "100%",
          marginTop: 30,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 17,
          }}
        >
          {ConstantString.AddNewMedicationBtn}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
