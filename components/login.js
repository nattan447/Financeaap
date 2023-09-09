import { StatusBar } from "expo-status-bar";
import {
  Button,
  ImageComponent,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Loginsty from "../syles/loginsty";

export default function Login({ navigation, route }) {
  const [user, Setuser] = useState(undefined);
  const [pass, Setpass] = useState(undefined);

  const handleuser = (userr) => {
    Setuser(userr);
  };
  const handlepass = (pin) => {
    Setpass(pin);
  };

  const login = () => {
    if (user === "admin" && pass == "123") {
      navigation.navigate("Salary", { user: user });
    } else alert("deu erro");
  };
  return (
    <View style={Loginsty.container}>
      <View style={Loginsty.loginview}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Login</Text>
        <View style={Loginsty.inputsview}>
          <View style={Loginsty.inputs}>
            <Text>Email</Text>
            <TextInput
              placeholder="oisounovo@gmail.com"
              value={user}
              onChangeText={handleuser}
            ></TextInput>
          </View>
          <View style={Loginsty.inputs}>
            <Text>Senha</Text>
            <TextInput
              keyboardType="numeric"
              secureTextEntry={true}
              placeholder="********"
              value={pass}
              onChangeText={handlepass}
            ></TextInput>
          </View>
          <TouchableOpacity onPress={login} style={Loginsty.loginbtn}>
            <Text style={{ color: "white" }}>Logar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
