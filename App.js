import React from 'react';
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { View, Text } from 'react-native';

import { LoginStackNavigator } from './src/navigations/StackNavigator';

const App = () => {
	return (
		<NavigationContainer>
		  <LoginStackNavigator/>
		</NavigationContainer>
	);
}
  
export default App;