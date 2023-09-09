import { StatusBar } from "expo-status-bar";
import {
  Button,
  ImageComponent,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState, useContext } from "react";
import Contextsalario from "../contexts/contextsalary";
// import Homestyle from "../syles/homesty";
import Btnavigator from "./btnavigator";

export default function Home({ route, navigation }) {
  if (route.params != undefined) {
    var { salario } = route.params;
  }
  return (
    <View style={currenstyle.contanier}>
      <Btnavigator navigation={navigation} salario={salario} />
    </View>
  );
}

const currenstyle = StyleSheet.create({
  contanier: {
    justifyContent: "center",
    alignItems: "center",
  },
  salarytxt: {
    fontSize: 60,
  },
  selectscreen: {
    backgroundColor: "white",
    height: 200,
    justifyContent: "center",
  },
});
