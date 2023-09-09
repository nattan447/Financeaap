import { StatusBar } from "expo-status-bar";
import { ImageComponent, StyleSheet, Text, View, Button } from "react-native";
import { useEffect, useState } from "react";

import Btnavigator from "./btnavigator";

const Result = ({ route, navigation }) => {
  const { salario } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Btnavigator navigation={navigation} salario={salario} />
    </View>
  );
};
export default Result;
