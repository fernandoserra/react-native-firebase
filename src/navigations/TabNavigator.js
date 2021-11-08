import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RegisterStackNavigator, ListStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Agregar" component={RegisterStackNavigator} />
			<Tab.Screen name="Listar" component={ListStackNavigator} />
		</Tab.Navigator>
	);
};

export default BottomTabNavigator;