import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

// Importa as telas
import HomeScreen from '../screens/HomeScreen';
import HistoryScreen from '../screens/HistoryScreen'; // Nova tela de Histórico
import Appointment from '../screens/Appointment';       // Tela de Marcar Consulta
import Settings from '../screens/Settings';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, // Configuramos headers individualmente se necessário
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = '';
          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Histórico':
              iconName = focused ? 'time' : 'time-outline';
              break;
            case 'Marcar':
              iconName = focused ? 'calendar' : 'calendar-outline';
              break;
            case 'Perfil':
              iconName = focused ? 'settings' : 'settings-outline';
              break;
            default:
              iconName = 'ellipse';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarInactiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: '#222',
        },
      })}
    >
      <Tab.Screen 
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: true,
          headerTitle: 'Histórico Médico',
          headerLeft: () => null,
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 15 }} onPress={() => console.log('Notificações clicadas')}>
              <Ionicons name="notifications-outline" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen 
        name="Histórico"
        component={HistoryScreen}
        options={{
          headerShown: true,
          headerTitle: 'Histórico do Paciente',
          headerLeft: () => null,
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 15 }} onPress={() => console.log('Notificações clicadas')}>
              <Ionicons name="notifications-outline" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen 
        name="Marcar"
        component={Appointment}
        options={{
          headerShown: true,
          headerTitle: 'Marcar Consulta',
        }}
      />
      <Tab.Screen 
        name="Perfil"
        component={Settings}
        options={{
          headerShown: true,
          headerTitle: 'Configurações',
          headerLeft: () => null,
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 15 }} onPress={() => console.log('Notificações clicadas')}>
              <Ionicons name="notifications-outline" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
