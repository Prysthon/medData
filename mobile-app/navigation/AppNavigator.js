// src/navigation/AppNavigator.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen'; // certifique-se de que o caminho está correto

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      {/* Use a prop 'component' para registrar a tela */}
      <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{ headerShown: false }} // ou outras opções que desejar
      />
      {/* Outras telas podem ser adicionadas aqui */}
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
