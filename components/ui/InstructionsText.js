import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const InstructionsText = ({ children, style }) => {
  return <Text style={[styles.instrText, style]}>{children}</Text>;
};

export default InstructionsText;

const styles = StyleSheet.create({
  instrText: {
    fontFamily: "open-sans",
    color: Colors.accent500,
    fontSize: 24,
  },
});
