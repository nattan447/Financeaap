import { StyleSheet } from "react-native";

const Resultsty = StyleSheet.create({
  contanier: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "white",
    marginTop: "5%",
  },
  btnvoltardiv: {
    alignSelf: "flex-start",
    padding: 20,
  },
  btn: {
    backgroundColor: "black",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: 100,
  },
  txtbtn: {
    color: "white",
    fontWeight: "bold",
  },
  graphqview: {},
  textosgastos: {
    fontSize: 20,
    fontWeight: "bold",
  },
  taskItem: {
    color: "black",
  },
  completedTask: {
    color: "green",
  },
});
export default Resultsty;
