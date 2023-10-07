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
  function isemailvalid(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }
  const criar = () => {
    let usuario = user;
    let senha = pass;
    if (usuario.length >= 5 && senha.length >= 3 && isemailvalid(usuario)) {
      alert("cadastro feito com sucesso");
      navigation.navigate("joincount", { usuario: usuario, senha: senha });
    } else if (
      usuario.length < 5 &&
      senha.length < 3 &&
      isemailvalid(usuario)
    ) {
      alert(
        "o nome deve possuir pelo menos 5 digitos e a senha deve possuir pelo menos 3 digitos "
      );
    } else if (senha.length < 3 && isemailvalid(usuario)) {
      alert("a senha deve possuir pelo menos 3 digitos");
    } else {
      alert("modelo de email invalido");
    }
  };
  const entrar = () => {
    navigation.navigate("joincount");
  };
  return (
    <View style={Loginsty.container}>
      <View style={Loginsty.loginview}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Criar conta</Text>
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
          <TouchableOpacity onPress={criar} style={Loginsty.loginbtn}>
            <Text style={{ color: "white" }}>Cadastrar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={entrar} style={Loginsty.hascountbtn}>
            <Text style={{ color: "white" }}>ja possui conta?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
