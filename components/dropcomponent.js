import React, { useState, useContext } from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
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

  const renderLabel = () => {
    if (value || isFocus) {
      return <Text style={[styles.label, isFocus && { color: "blue" }]}></Text>;
    }
    return null;
  };

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
  }

  function navigateResult() {
    // quero pegar o array de lazer e ir para a outra página
    navigation.navigate("resultado", {
      itenslazer: arraylazer,
      valorsaude: arraySaude,
      valorcomida: arrayComida,
      valoroutros: arrayOutros,
      salario: salario,
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
