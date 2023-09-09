import { StatusBar } from "expo-status-bar";
import {
  Button,
  ImageComponent,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { useEffect, useState, useContext } from "react";
import Contextsalario from "../contexts/contextsalary";
import areacontext from "../contexts/contextarea";
// import Homestyle from "../syles/homesty";

export default function Btnavigator({ salario, route, navigation }) {
  return (
    <View style={buttonstyle.contanier}>
      <View style={{ marginTop: 100 }}>
        <Text style={{ textAlign: "center" }}>atual salário </Text>
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>
          {Number(salario).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </Text>
      </View>
      <View style={buttonstyle.selectscreen}>
        <TouchableOpacity
          style={buttonstyle.btns}
          onPress={() => {
            navigation.navigate("home", {
              salario: salario,
            });
          }}
        >
          <Image
            source={require("../assets/home.png")}
            style={{ height: 40, width: 40 }}
          ></Image>
        </TouchableOpacity>

        <TouchableOpacity
          style={buttonstyle.btns}
          onPress={() => {
            navigation.navigate("additem", {
              salario: salario,
            });
          }}
        >
          <Image
            source={require("../assets/plus.png")}
            style={{ height: 40, width: 40 }}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={buttonstyle.btns}
          onPress={() => {
            navigation.navigate("resultado", {
              salario: salario,
            });
          }}
        >
          <Image
            source={require("../assets/money.png")}
            style={{ height: 40, width: 40 }}
          ></Image>
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
    height: 100,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "40%",
    borderRadius: 10,
  },
  btns: {
    marginHorizontal: 10,
    backgroundColor: "#D3D3D3",
    height: 60,
    justifyContent: "center",
    borderRadius: 10,
    width: 80,
    alignItems: "center",
  },
});
