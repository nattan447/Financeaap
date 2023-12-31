import { StatusBar } from "expo-status-bar";
import { ImageComponent, StyleSheet, Text, View } from "react-native";
import Login from "./components/login";
import Home from "./components/home";
import Salary from "./components/salary";
import Result from "./components/result";
import Additem from "./components/additem";
import Joincout from "./components/joincount";
import DropdownComponent from "./components/dropcomponent";
import { VictoryTheme, VictoryChart, VictoryBar } from "victory-native";

import Salaryctx from "./contexts/contextsalary"; // importa o contexto
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import Btnavigator from "./components/btnavigator";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          options={{
            title: "Financee",
            headerStyle: {
              backgroundColor: "black",
            },
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerTitleStyle: {
              fontSize: 34,
              fontWeight: "bold",
            },
          }}
          component={Login}
        />
        <Stack.Screen
          name="joincount"
          options={{
            title: "Financee",
            headerStyle: {
              backgroundColor: "black",
            },
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerTitleStyle: {
              fontSize: 34,
              fontWeight: "bold",
            },
          }}
          component={Joincout}
        />
        <Stack.Screen
          name="Salary"
          options={{
            title: "salario",
          }}
          component={Salary}
        />
        <Stack.Screen
          name="home"
          options={{
            headerBackVisible: false,
            headerShown: false,
          }}
          component={Home}
        />
        <Stack.Screen
          name="additem"
          options={{
            headerShown: false,
          }}
          component={Additem}
        />
        <Stack.Screen
          name="resultado"
          options={{ headerShown: false }}
          component={Result}
        />
        <Stack.Screen
          name="btnavigator"
          options={{ headerShown: false }}
          component={Btnavigator}
        />
        <Stack.Screen
          name="drop"
          options={{ headerShown: false }}
          component={DropdownComponent}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
