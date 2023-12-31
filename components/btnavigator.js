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

export default function Btnavigator({ listlazer, salario, route, navigation }) {
  return (
    <View style={buttonstyle.contanier}>
      <View style={{ marginTop: 60 }}>
        <Text style={{ textAlign: "center", fontSize: 20 }}>
          atual salário{" "}
        </Text>
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
      </View>
    </View>
  );
}
const buttonstyle = StyleSheet.create({
  contanier: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },

  salarytxt: {
    fontSize: 60,
  },
  selectscreen: {
    backgroundColor: "#333333",
    height: 100,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "20%",
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
    width: 270,
  },
  btns: {
    marginHorizontal: 10,
    backgroundColor: "white",
    height: 60,
    justifyContent: "center",
    borderRadius: 10,
    width: 80,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "black",
  },
});
