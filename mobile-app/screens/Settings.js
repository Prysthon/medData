import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const settingsData = [
  { id: '1', title: 'Dados da Conta', iconName: 'person-outline' },
  { id: '2', title: 'Notificações', iconName: 'notifications-outline' },
  { id: '3', title: 'Privacidade', iconName: 'lock-closed-outline' },
  { id: '4', title: 'Idioma', iconName: 'language-outline' },
  { id: '5', title: 'Sobre o App', iconName: 'information-circle-outline' },
];

const Settings = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Configurações</Text>
      <ScrollView style={styles.listContainer}>
        {settingsData.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.itemContainer}
            onPress={() => console.log(`${item.title} clicado`)}
          >
            <View style={styles.itemLeft}>
              <Ionicons
                name={item.iconName}
                size={24}
                color="#007BFF"
                style={styles.itemIcon}
              />
              <Text style={styles.itemTitle}>{item.title}</Text>
            </View>
            <Ionicons name="chevron-forward-outline" size={24} color="#ccc" />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Botão Sair */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  listContainer: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemIcon: {
    marginRight: 10,
  },
  itemTitle: {
    fontSize: 16,
  },
  logoutButton: {
    marginTop: 20,
    paddingVertical: 15,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  logoutText: {
    fontSize: 16,
    color: '#FF0000',
  },
});
