import { StatusBar } from "expo-status-bar";
import { ImageComponent, StyleSheet, Text, View, Button } from "react-native";
import { useEffect, useState } from "react";

import Btnavigator from "./btnavigator";

const Result = ({ route, navigation }) => {
  const { salario, valor } = route.params;

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Btnavigator navigation={navigation} salario={salario} />
      <Text>{valor}</Text>
    </View>
  );
};
export default Result;
