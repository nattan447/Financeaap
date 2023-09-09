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

export default function Btnavigator({ salario, route, navigation }) {
  return (
    <View style={buttonstyle.contanier}>
      <View style={buttonstyle.selectscreen}>
        <Text style={{ color: "black" }}>{salario}R$</Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("home", { salario: salario });
          }}
        >
          <Text>home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("additem", { salario: salario });
          }}
        >
          <Text>adicionar gastos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("resultado", { salario: salario });
          }}
        >
          <Text>resultado</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const buttonstyle = StyleSheet.create({
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
