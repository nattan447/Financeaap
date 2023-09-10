import { StatusBar } from 'expo-status-bar';
import { ImageComponent, StyleSheet, Text, View, Button } from 'react-native';
import { useEffect, useState } from 'react';

import Btnavigator from './btnavigator';

const Result = ({ route, navigation }) => {
  const { salario, valor, itenslazer } = route.params;

  const somalazer = itenslazer.reduce(
    (acc, current) => acc + Number(current),
    0,
  );

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text>{somalazer}</Text>
    </View>
  );
};
export default Result;
