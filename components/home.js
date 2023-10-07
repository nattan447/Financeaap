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
import Homestyle from "../syles/homesty";
import Btnavigator from "./btnavigator";
export default function Home({ route, navigation }) {
  //estou tentando passar os valores do input da outra tela para a home e da home para outra tela dnv, pois quando eu entro na home dps de utilizar a segunda tela a segunda tela se destroi e os dados se perdem , então tenho que descobrir uma maneira de armezar esses dados em algum lugar sem o banco
  const [couter, Setcounter] = useState(0);
  if (route.params != undefined) {
    var { salario, user } = route.params;
  }
  return (
    <View style={Homestyle.contanier}>
      <Btnavigator navigation={navigation} salario={salario} />
      <View style={Homestyle.userpainel}>
        <Text style={Homestyle.Txtuser}>OLá, {user}</Text>
        <Image
          source={require("./imgs/user.png")}
          style={{ height: 50, width: 50, margin: 20, borderRadius: 10 }}
        ></Image>
      </View>
    </View>
  );
}
