import { StatusBar } from 'expo-status-bar';
import {
  Button,
  ImageComponent,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { useEffect, useState, useContext } from 'react';
import Contextsalario from '../contexts/contextsalary';
import areacontext from '../contexts/contextarea';
// import Homestyle from "../syles/homesty";
import Btnavigator from './btnavigator';

export default function Home({ route, navigation }) {
  //estou tentando passar os valores do input da outra tela para a home e da home para outra tela dnv, pois quando eu entro na home dps de utilizar a segunda tela a segunda tela se destroi e os dados se perdem , então tenho que descobrir uma maneira de armezar esses dados em algum lugar sem o banco
  const [couter, Setcounter] = useState(0);
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  salarytxt: {
    fontSize: 60,
  },
  selectscreen: {
    backgroundColor: 'white',
    height: 200,
    justifyContent: 'center',
  },
});
