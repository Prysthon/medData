import React from 'react';

import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen'; 
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      {/* Tela de Login */}
      <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{ headerShown: false }} 
      />
      {/* Tela do home */}
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: 'Histórico Médico',
          // Remove o botão de voltar:
          headerLeft: () => null,
          // Ícone de notificações no lado direito:
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 15 }} onPress={() => { console.log('Notificações clicadas'); }}>
              <Ionicons name="notifications-outline" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
