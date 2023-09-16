import { StatusBar } from "expo-status-bar";
import {
  ImageComponent,
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
} from "react-native";
import { useEffect, useState } from "react";
import Resultsty from "../syles/resultsty";
import Btnavigator from "./btnavigator";
import {
  VictoryTheme,
  VictoryChart,
  VictoryBar,
  VictoryPie,
} from "victory-native";

const Result = ({ route, navigation }) => {
  const { salario, valor, itenslazer, valorcomida, valorsaude, valoroutros } =
    route.params;

  function retornar() {
    navigation.navigate("home", { salario: salario });
  }

  const somalazer = itenslazer.reduce(
    (acc, current) => acc + Number(current),
    0
  );
  const somacomida = valorcomida.reduce(
    (acc, current) => acc + Number(current),
    0
  );
  const somasaude = valorsaude.reduce(
    (acc, current) => acc + Number(current),
    0
  );
  const somaoutros = valoroutros.reduce(
    (acc, current) => acc + Number(current),
    0
  );
  const somatotal = somacomida + somaoutros + somalazer + somasaude;

  const tranformtoporcent = (value) => {
    return (value * 100) / somatotal;
  };

  useEffect(() => {
    alert(somacomida);
    alert(somalazer);
    alert(somaoutros);
    alert(somasaude);
  }, []);
  const data = [
    tranformtoporcent(somacomida) == 0
      ? { x: null, y: null }
      : {
          x: "Comida (" + tranformtoporcent(somacomida) + ") %",
          y: tranformtoporcent(somacomida),
        },
    tranformtoporcent(somasaude) == 0
      ? { x: null, y: null }
      : {
          x: "Saúde (" + tranformtoporcent(somasaude) + ") %",
          y: tranformtoporcent(somasaude),
        },
    tranformtoporcent(somalazer) == 0
      ? { x: null, y: null }
      : {
          x: "Lazer  (" + tranformtoporcent(somalazer) + ")%",
          y: tranformtoporcent(somalazer),
        },
    tranformtoporcent(somaoutros) == 0
      ? { x: null, y: null }
      : {
          x: "Outros (" + tranformtoporcent(somaoutros) + ") %",
          y: tranformtoporcent(somaoutros),
        },
  ];
  return (
    <SafeAreaView style={Resultsty.contanier}>
      <Button title="clique aqui" onPress={retornar}></Button>
      {/* <Text>{somalazer}</Text>
      <Text>{somacomida}</Text>
      <Text>{somasaude}</Text>
      <Text>{somaoutros}</Text> */}
      <VictoryPie
        data={data}
        colorScale={["red", "blue", "green"]} // Cores para as fatias (opcional)
        innerRadius={80}
        height={350} // Define o raio interno (opcional)
      ></VictoryPie>
    </SafeAreaView>
  );
};
export default Result;
