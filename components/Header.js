import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { headerStyles } from "../utils/Helper";

export default function Header() {
  return (
    <View style={headerStyles.header}>
      <Text style={headerStyles.headerText}>Welcome</Text>
    </View>
  );
}
