import { StyleSheet } from "react-native";
const Loginsty = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  inputsview: {},
  inputs: {
    backgroundColor: "#CCCCCC",
    width: 270,
    height: 50,
    marginTop: 30,
    borderRadius: 10,
    paddingLeft: 15,
    paddingTop: 4,
  },
  loginview: {
    backgroundColor: "white",
    width: 400,
    height: 400,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  loginbtn: {
    backgroundColor: "black",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 50,
    width: 200,
    alignSelf: "center",
  },
  hascountbtn: {
    backgroundColor: "black",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
    width: 200,
    alignSelf: "center",
  },
});
export default Loginsty;
