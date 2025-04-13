import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { TouchableOpacity } from 'react-native';

// Importa as telas
import HomeScreen from '../screens/HomeScreen';
import Settings from '../screens/Settings'

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = '';
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
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
            <TouchableOpacity style={{ marginRight: 15 }} onPress={() => { console.log('Notificações clicadas'); }}>
              <Ionicons name="notifications-outline" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
