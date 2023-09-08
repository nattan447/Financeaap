import { StatusBar } from "expo-status-bar";
import { ImageComponent, StyleSheet, Text, View } from "react-native";
import Login from "./components/login";
import Home from "./components/home";
import Salary from "./components/salary";
import Result from "./components/result";
import Additem from "./components/additem";

import Salaryctx from "./contexts/contextsalary"; // importa o contexto
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import Btnavigator from "./components/btnavigator";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// const Threebarshome = ({ route }) => {
//   return (
//     <Salaryctx.Provider value={{ salario: route.params }}>
//       <NavigationContainer independent={true}>
//         <Tab.Navigator
//           screenOptions={{
//             tabBarLabelStyle: {
//               fontSize: 14,
//             },
//           }}
//         >
//           <Tab.Screen name="home" component={Home} />
//           <Tab.Screen name="resultado" component={Result} />
//           <Tab.Screen name="adicionar item" component={Additem} />
//         </Tab.Navigator>
//       </NavigationContainer>
//     </Salaryctx.Provider>
//   );
// };

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          options={{ title: null }}
          component={Login}
        />
        <Stack.Screen name="Salary" options={{}} component={Salary} />
        <Stack.Screen
          name="home"
          options={{
            headerBackVisible: false,
          }}
          component={Home}
        />
        <Stack.Screen name="additem" options={{}} component={Additem} />
        <Stack.Screen name="resultado" options={{}} component={Result} />
        <Stack.Screen name="btnavigator" options={{}} component={Btnavigator} />
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
