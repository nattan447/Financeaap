import React, { useState, useContext, useEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import areacontext from "../contexts/contextarea";

const data = [
  { label: "Lazer", value: "1" },
  { label: "Comida", value: "2" },
  { label: "Saúde", value: "3" },
  { label: "Outros", value: "4" },
];

const DropdownComponent = ({ salario, navigation }) => {
  const { valor, Setvalor, Spendsinlazer } = useContext(areacontext);
  const [value, setValue] = useState(undefined);
  const [isFocus, setIsFocus] = useState(false);
  const [arraylazer, Setarraylazer] = useState([]);
  const [arrayComida, SetarrayComida] = useState([]);
  const [arraySaude, SetarraySaude] = useState([]);
  const [arrayOutros, SetarrayOutros] = useState([]);
  const [isFocustask, setIsFocusTask] = useState(false);
  const [valueTask, SetvalueTask] = useState(undefined);
  const [arrayTask, SetarrayTask] = useState([]);
  const [taskchek, Settaskcheck] = useState(false);

  //estou tentando fazer uma task especifica ficar verde quando a meta é batida

  useEffect(() => {
    // to no caminho certo
    // const somalazer = arraylazer.reduce(
    //   (acc, current) => acc + Number(current),
    //   0
    // );
    // const somacomida = arrayComida.reduce(
    //   (acc, current) => acc + Number(current),
    //   0
    // );
    // const somaoutros = arrayOutros.reduce(
    //   (acc, current) => acc + Number(current),
    //   0
    // );
    // if (salarioporcent(somalazer).toFixed(2) <= 50 && value === "Lazer") {
    //   Settaskcheck(() => true);
    // }
    // if (salarioporcent(somacomida).toFixed(2) <= 30) {
    //   Settaskcheck(true);
    //   setTimeout(() => {
    //     Settaskcheck(false);
    //   }, 10000);
    // }
    // if (salarioporcent(somaoutros).toFixed(2) <= 20) {
    //   Settaskcheck(true);
    //   setTimeout(() => {
    //     Settaskcheck(false);
    //   }, 10000);
    // }
  }, [arraylazer, arrayComida, arrayOutros]);
  // useEffect(() => {
  //   const mytime = setTimeout(() => {
  //     Settaskcheck(false);
  //   }, 10000);
  //   return () => {
  //     clearTimeout(mytime);
  //   };
  // }, [taskchek]);

  // no array datatask tenho que colocar uma key chamada completed task e o valor dela será o taskcheck
  const datatask = [
    {
      label: "Gastos com lazer 50% do salário",
      value: 50,
      completed: taskchek,
    },
    {
      label: "Gastos com comida 30% do salaŕio",
      value: 30,
      completed: taskchek,
    },
    {
      label: "Gastos com outras coisas em 20% do salário",
      value: 20,
      completed: taskchek,
    },
  ];

  const salarioporcent = (valor) => (valor * 100) / salario;

  const renderLabel = () => {
    if (value || isFocus) {
      return <Text style={[styles.label, isFocus && { color: "blue" }]}></Text>;
    }
    return null;
  };

  //essa função tem o papel de não permitir que a mesma task se repita

  function isrepeat(numbertask) {
    // if (arrayTask[0]) {
    //   arrayTask.map((elemeto) => alert(elemeto.value));
    //   for (let i = 0; i < arrayTask.length; i++) {
    //     if (arrayTask[i].value == datatask[numbertask].value) {
    //       return true;
    //     } else return false;
    //   }
    // } else return false;

    if (arrayTask[0]) {
      const norepeattask = arrayTask.filter(
        (elemento) => elemento.value == datatask[numbertask].value
      );
      if (norepeattask[0]) {
        return true;
      } else return false;
    }
    return false;
    // const norepeattask = arrayTask.map((elemento) => {
    //   if (elemento) {
    //     if (elemento.value == datatask[numbertask].value) {
    //       return true;
    //     } else return false;
    //   }
    // });
    // if (norepeattask[numbertask]) {
    //   return true;
    // } else return false;
  }

  function handlevalues() {
    if (value === "Lazer") {
      //o valor é uma variavel que vem do add items
      Setarraylazer((current) => [...current, valor]); // pego os items que estão na categoria lazer
      Setvalor(undefined);
    } else if (value === "Comida") {
      SetarrayComida((current) => [...current, valor]);
      Setvalor(undefined);
    } else if (value === "Saúde") {
      SetarraySaude((current) => [...current, valor]);
      Setvalor(undefined);
    } else if (value === "Outros") {
      SetarrayOutros((current) => [...current, valor]);
      Setvalor(undefined);
    } else alert("selecione um campo");

    if (valueTask === 50 && isrepeat(0) === false) {
      SetarrayTask((current) => [...current, datatask[0]]);
    } else if (valueTask === 30 && isrepeat(1) === false) {
      SetarrayTask((current) => [...current, datatask[1]]);
    } else if (valueTask === 20 && isrepeat(2) === false) {
      SetarrayTask((current) => [...current, datatask[2]]);
    }
  }

  function navigateResult() {
    // quero pegar o array de lazer e ir para a outra página

    navigation.navigate("resultado", {
      itenslazer: arraylazer,
      valorsaude: arraySaude,
      valorcomida: arrayComida,
      valoroutros: arrayOutros,
      salario: salario,
      tasks: arrayTask,
    });
  }

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        data={data}
        labelField="label"
        valueField="value"
        placeholder={value}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.label);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={isFocus ? "gray" : "black"}
            name="Safety"
            size={20}
          />
        )}
      />
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        data={datatask}
        labelField="label"
        valueField="value"
        placeholder={valueTask}
        value={valueTask}
        onFocus={() => setIsFocusTask(true)}
        onBlur={() => setIsFocusTask(false)}
        onChange={(item) => {
          SetvalueTask(item.value);
          setIsFocusTask(false);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={isFocustask ? "gray" : "black"}
            name="Safety"
            size={20}
          />
        )}
      />

      <TouchableOpacity onPress={handlevalues} style={styles.btn}>
        <Text style={styles.txtbtn}>Adicionar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateResult} style={styles.btn}>
        <Text style={styles.txtbtn}>Ver resultado do mês</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: 200,
    marginTop: 16,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  btn: {
    backgroundColor: "#333333",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 200,
    marginTop: 16,
    borderRadius: 10,
  },
  txtbtn: {
    color: "white",
  },
});
