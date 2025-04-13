// src/screens/HistoryScreen.js

import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { quickAccessItems } from '../mocks/quickAcessData';

const HistorySection = ({ title, cards, type, onCardPress }) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {cards.map((card) => (
        <TouchableOpacity key={card.id} style={styles.card} onPress={() => onCardPress(card, type)}>
          <Text style={styles.cardDate}>{card.date}</Text>
          {type === 'historico' || type === 'agendamentos' ? (
            <Text style={styles.cardTitle}>Médico: {card.doctor}</Text>
          ) : null}
          {type === 'prescricoes' ? (
            <Text style={styles.cardTitle}>Medicamento: {card.medication}</Text>
          ) : null}
          {type === 'procedimentos' ? (
            <Text style={styles.cardTitle}>Procedimento: {card.procedure}</Text>
          ) : null}
          {type === 'cirurgias' ? (
            <Text style={styles.cardTitle}>Cirurgia: {card.surgery}</Text>
          ) : null}
          <Text style={styles.cardLocation}>Local: {card.location}</Text>
          <Text numberOfLines={2} style={styles.cardDescription}>{card.description}</Text>
          <Ionicons name="chevron-forward-outline" size={16} color="#007BFF" style={styles.cardIcon} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const HistoryScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedType, setSelectedType] = useState('');

  // Encontra as seções usando as chaves definidas no mock
  const historico = quickAccessItems.find(item => item.key === 'historico');
  const procedimentos = quickAccessItems.find(item => item.key === 'procedimentos');
  const agendamentos = quickAccessItems.find(item => item.key === 'agendamentos');
  const prescricoes = quickAccessItems.find(item => item.key === 'prescricoes');
  const cirurgias = quickAccessItems.find(item => item.key === 'cirurgias');
  const medicamentos = quickAccessItems.find(item => item.key === 'medicamentos');
  const exames = quickAccessItems.find(item => item.key === 'exames');

  const handleCardPress = (card, type) => {
    setSelectedCard(card);
    setSelectedType(type);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedCard(null);
    setSelectedType('');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.headerTitle}>Histórico do Paciente</Text>
        {historico && (
          <HistorySection title="Consultas Realizadas" cards={historico.cards} type="historico" onCardPress={handleCardPress} />
        )}
        {procedimentos && (
          <HistorySection title="Procedimentos Realizados" cards={procedimentos.cards} type="procedimentos" onCardPress={handleCardPress} />
        )}
        {agendamentos && (
          <HistorySection title="Agendamentos" cards={agendamentos.cards} type="agendamentos" onCardPress={handleCardPress} />
        )}
        {prescricoes && (
          <HistorySection title="Prescrições" cards={prescricoes.cards} type="prescricoes" onCardPress={handleCardPress} />
        )}
        {cirurgias && cirurgias.cards.length > 0 && (
          <HistorySection title="Cirurgias" cards={cirurgias.cards} type="cirurgias" onCardPress={handleCardPress} />
        )}
        {medicamentos && medicamentos.cards.length > 0 && (
          <HistorySection title="Medicamentos Recorrentes" cards={medicamentos.cards} type="medicamentos" onCardPress={handleCardPress} />
        )}
        {exames && exames.cards.length > 0 && (
          <HistorySection title="Exames" cards={exames.cards} type="exames" onCardPress={handleCardPress} />
        )}
      </ScrollView>

      {/* Modal com informações detalhadas */}
      {selectedCard && (
        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={closeModal}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <TouchableOpacity style={styles.modalCloseButton} onPress={closeModal}>
                <Ionicons name="close" size={24} color="#333" />
              </TouchableOpacity>
              <ScrollView>
                <Text style={styles.modalHeader}>{selectedCard.date}</Text>
                {selectedType === 'historico' || selectedType === 'agendamentos' ? (
                  <Text style={styles.modalTitle}>Médico: {selectedCard.doctor}</Text>
                ) : null}
                {selectedType === 'procedimentos' ? (
                  <Text style={styles.modalTitle}>Procedimento: {selectedCard.procedure}</Text>
                ) : null}
                {selectedType === 'prescricoes' ? (
                  <Text style={styles.modalTitle}>Medicamento: {selectedCard.medication}</Text>
                ) : null}
                {selectedType === 'cirurgias' ? (
                  <Text style={styles.modalTitle}>Cirurgia: {selectedCard.surgery}</Text>
                ) : null}
                <Text style={styles.modalSubTitle}>Local: {selectedCard.location}</Text>
                <Text style={styles.modalDescription}>{selectedCard.description}</Text>
                <Text style={styles.modalDetails}>{selectedCard.details}</Text>
              </ScrollView>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 5,
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    position: 'relative',
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
  cardIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  /* Modal Styles */
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    maxHeight: '80%',
    padding: 20,
  },
  modalCloseButton: {
    alignSelf: 'flex-end',
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  modalSubTitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  modalDetails: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
});
