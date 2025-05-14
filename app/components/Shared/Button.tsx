import React from "react";
import { Text, TouchableOpacity } from "react-native";

type ButtonProps = {
  text: string;
  onPress: () => void;
};

export default function Button({ text, onPress }: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "#b8007e",
        paddingVertical: 15,
        paddingHorizontal: 140,
        borderRadius: 9,
        marginBottom: 20,
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontWeight: "600",
          fontSize: 16
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}
