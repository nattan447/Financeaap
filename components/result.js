import { StatusBar } from 'expo-status-bar';
import {
  ImageComponent,
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useEffect, useState } from 'react';
import Resultsty from '../syles/resultsty';
import Btnavigator from './btnavigator';
import {
  VictoryTheme,
  VictoryChart,
  VictoryBar,
  VictoryPie,
} from 'victory-native';

const Result = ({ route, navigation }) => {
  const {
    salario,
    valor,
    itenslazer,
    valorcomida,
    valorsaude,
    valoroutros,
    tasks,
  } = route.params;
  const [tasksmaped, SetTaksmaped] = useState([]);

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
  const somatotal = somacomida + somaoutros + somalazer + somasaude;
  function tranformtoporcent(value) {
    return ((value * 100) / somatotal).toFixed(1);
  }
  function tranformtoporcentsalario(valor) {
    return (valor * 100) / salario;
  }

  useEffect(() => {}, []);
  const data = [
    tranformtoporcent(somacomida) == 0
      ? { x: null, y: null }
      : {
          x: 'Comida (' + tranformtoporcent(somacomida) + ') %',
          y: tranformtoporcent(somacomida),
        },
    tranformtoporcent(somasaude) == 0
      ? { x: null, y: null }
      : {
          x: 'Saúde (' + tranformtoporcent(somasaude) + ') %',
          y: tranformtoporcent(somasaude),
        },
    tranformtoporcent(somalazer) == 0
      ? { x: null, y: null }
      : {
          x: 'Lazer  (' + tranformtoporcent(somalazer) + ')%',
          y: tranformtoporcent(somalazer),
        },
    tranformtoporcent(somaoutros) == 0
      ? { x: null, y: null }
      : {
          x: 'Outros (' + tranformtoporcent(somaoutros) + ') %',
          y: tranformtoporcent(somaoutros),
        },
  ];
  const rendertasks = ({ item }) => {
    const taskstyle = item.completed
      ? Resultsty.completedTask
      : Resultsty.taskItem;

    return (
      <View>
        <Text style={taskstyle}>{item.label}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={Resultsty.contanier}>
      <View style={Resultsty.btnvoltardiv}>
        <TouchableOpacity onPress={retornar} style={Resultsty.btn}>
          <Text style={Resultsty.txtbtn}>Voltar</Text>
        </TouchableOpacity>
      </View>
      <Text style={Resultsty.textosgastos}>
        Seus gastos foram de :
        {somatotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </Text>
      {/* <Text>{somalazer}</Text>
      <Text>{somacomida}</Text>
      <Text>{somasaude}</Text>
      <Text>{somaoutros}</Text> */}
      <View style={Resultsty.graphqview}>
        <VictoryPie
          data={data}
          colorScale={['red', 'blue', 'green']} // Cores para as fatias (opcional)
          innerRadius={80}
          height={350} // Define o raio interno (opcional)
        ></VictoryPie>
      </View>

      {tasks[0] ? (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.value}
          renderItem={rendertasks}
        ></FlatList>
      ) : undefined}
    </SafeAreaView>
  );
};
export default Result;
