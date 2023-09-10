import { StatusBar } from 'expo-status-bar';
import {
  Button,
  ImageComponent,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './home';
import Loginstys from '../syles/loginsty';

export default function Salary({ navigation, route }) {
  const { user } = route.params;
  const [salary, Setsalary] = useState(undefined);
  function hanldesalary(number) {
    Setsalary(number);
  }
  function gohome() {
    if (salary != undefined) {
      navigation.navigate('home', { salario: salary });
    } else alert('cade o salario');
  }

  return (
    <View style={Loginstys.container}>
      <View style={Loginstys.loginview}>
        <Text>qual o seu salário</Text>
        <View style={Loginstys.inputs}>
          <TextInput
            value={salary}
            onChangeText={hanldesalary}
            placeholder="ex:2000$"
            keyboardType="numeric"
          ></TextInput>
        </View>
        <TouchableOpacity style={Loginstys.loginbtn} onPress={gohome}>
          <Text style={{ color: 'white' }}>Ir em frente</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
