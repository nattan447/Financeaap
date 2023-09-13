import { StatusBar } from 'expo-status-bar';
import { ImageComponent, StyleSheet, Text, View, Button } from 'react-native';
import { useEffect, useState } from 'react';

import Btnavigator from './btnavigator';

const Result = ({ route, navigation }) => {
  const { salario, valor, itenslazer, valorcomida, valorsaude, valoroutros } =
    route.params;

  function retornar() {
    navigation.navigate('home', { salario: salario });
  }

  const somalazer = itenslazer.reduce(
    (acc, current) => acc + Number(current),
    0,
  );
  const somacomida = valorcomida.reduce(
    (acc, current) => acc + Number(current),
    0,
  );
  const somasaude = valorsaude.reduce(
    (acc, current) => acc + Number(current),
    0,
  );
  const somaoutros = valoroutros.reduce(
    (acc, current) => acc + Number(current),
    0,
  );
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Button title="clique aqui" onPress={retornar}></Button>
      <Text>{somalazer}</Text>
      <Text>{somacomida}</Text>
      <Text>{somasaude}</Text>
      <Text>{somaoutros}</Text>
    </View>
  );
};
export default Result;
