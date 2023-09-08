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
import Homestyle from "../syles/homesty";

export default function Btnavigator({ salario, route, navigation }) {
  return (
    <View style={Homestyle.contanier}>
      <View style={Homestyle.selectscreen}>
        <Text style={{ color: "black" }}>{salario}R$</Text>
        <Button
          title="home"
          onPress={() => {
            navigation.navigate("home", { salario: salario });
          }}
        ></Button>
        <Button
          title="adicionar items"
          onPress={() => {
            navigation.navigate("additem", { salario: salario });
          }}
        ></Button>
        <Button
          title="resultado"
          onPress={() => {
            navigation.navigate("resultado", { salario: salario });
          }}
        ></Button>
      </View>
    </View>
  );
}
