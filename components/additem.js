import { StatusBar } from "expo-status-bar";
import {
  ImageComponent,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  SafeAreaView,
} from "react-native";
import { useEffect, useState, createContext } from "react";
import Homesty from "../syles/homesty";
import Addsty from "../syles/addsty";
import Btnavigator from "./btnavigator";
import areacontext from "../contexts/contextarea";

import { StackActions } from "@react-navigation/native";
import DropdownComponent from "./dropcomponent";

const Additem = ({ route, navigation }) => {
  const { salario } = route.params;
  const [valor, Setvalor] = useState(undefined);
  const [itemName, setItemName] = useState(undefined);

  const handlevalue = (it) => {
    Setvalor(it);
  };
  return (
    <SafeAreaView style={Addsty.contanier}>
      <areacontext.Provider value={{ itemName, setItemName, valor }}>
        <Btnavigator navigation={navigation} salario={salario} />
        <View style={Addsty.inputview}>
          <Text>{itemName}</Text>
          <Text>item</Text>
          <TextInput
            placeholder="adicione o valor"
            value={valor}
            onChangeText={handlevalue}
            keyboardType="numeric"
          ></TextInput>
          <DropdownComponent navigation={navigation} salario={salario} />
        </View>
      </areacontext.Provider>
    </SafeAreaView>
  );
};
export default Additem;
