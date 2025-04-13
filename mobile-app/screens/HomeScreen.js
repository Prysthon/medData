import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { quickAccessItems } from '../mocks/quickAcessData';

const HomeScreen = () => {
  // Estado para controlar o item selecionado no Acesso Rápido
  const [selectedAccess, setSelectedAccess] = useState(quickAccessItems[0].key);
  const selectedItem = quickAccessItems.find((item) => item.key === selectedAccess);

  return (
    <View style={styles.container}>
      {/* Cabeçalho fixo: Informações do paciente e Acesso Rápido */}
      <View style={styles.headerContainer}>
        <View style={styles.profileContainer}>
          <View style={styles.infoContainer}>
            <Text style={styles.name}>Tiago Gadelha Prysthon de Mello</Text>
            <Text style={styles.info}>082.156.580-08</Text>
            <Text style={styles.info}>Bradesco Saúde</Text>
            <Text style={styles.info}>1284934938948394</Text>
          </View>
          <View style={styles.photoContainer}>
            <Image
              source={require('../assets/profile-placeholder.png')}
              style={styles.profileImage}
            />
            <View style={styles.keyContainer}>
              <Ionicons name="key-outline" size={20} color="black" />
              <Text style={styles.tokenText}>Token</Text>
            </View>
          </View>
        </View>

        <View style={styles.quickAccessSection}>
          <Text style={styles.quickAccessTitle}>Acesso Rápido</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.quickAccessScroll}
          >
            {quickAccessItems.map((item) => (
              <TouchableOpacity
                key={item.key}
                style={[
                  styles.quickAccessItem,
                  selectedAccess === item.key && styles.quickAccessItemSelected,
                ]}
                onPress={() => setSelectedAccess(item.key)}
              >
                <Text
                  style={[
                    styles.quickAccessItemText,
                    selectedAccess === item.key && styles.quickAccessItemTextSelected,
                  ]}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>

      {/* Área rolável: Cards (conteúdo do mock) */}
      <ScrollView style={styles.cardsScroll} contentContainerStyle={styles.cardsContainer}>
        {selectedItem?.cards.map((card) => (
          <View style={styles.card} key={card.id}>
            <Text style={styles.cardDate}>{card.date}</Text>
            {selectedAccess === 'procedimentos' ? (
              <Text style={styles.cardTitle}>Procedimento: {card.procedure}</Text>
            ) : (
              <Text style={styles.cardTitle}>Médico: {card.doctor}</Text>
            )}
            <Text style={styles.cardLocation}>Local: {card.location}</Text>
            <Text style={styles.cardDescription}>{card.description}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    // Área fixa para o header (perfil e acesso rápido)
    padding: 20,
    backgroundColor: '#fff',
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  infoContainer: {
    flex: 1,
    marginRight: 10,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  photoContainer: {
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  keyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  tokenText: {
    marginLeft: 5,
    fontSize: 12,
    color: '#555',
  },
  quickAccessSection: {
    // Pode incluir marginBottom para espaçamento entre header e cards
    marginBottom: 10,
  },
  quickAccessTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  quickAccessScroll: {
    flexDirection: 'row',
  },
  quickAccessItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    marginRight: 10,
  },
  quickAccessItemSelected: {
    backgroundColor: '#007BFF',
  },
  quickAccessItemText: {
    fontSize: 14,
    color: '#333',
  },
  quickAccessItemTextSelected: {
    color: '#fff',
  },
  cardsScroll: {
    flex: 1, // Ocupa o restante da tela
  },
  cardsContainer: {
    padding: 20,
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  cardDate: {
    fontSize: 12,
    color: '#999',
    marginBottom: 5,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardLocation: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#333',
  },
});
