import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import LoginScreen from "../screen/LoginScreen";
import RegisterScreen from "../screen/RegisterScreen";
import ListScreen from "../screen/ListScreen";

const Stack = createStackNavigator();

const LoginStackNavigator= ()=>{
    return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={LoginScreen}  />
        <Stack.Screen name="IndexScreen" component={TabNavigator}  />
      </Stack.Navigator>
    );
}

const RegisterStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ title: "Registrar" }} />
      </Stack.Navigator>
    );
}

const ListStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="ListScreen" component={ListScreen} options={{ title: "Listar" }} />
      </Stack.Navigator>
    );
}
  
export { 
    LoginStackNavigator,
    RegisterStackNavigator,
    ListStackNavigator
}; 