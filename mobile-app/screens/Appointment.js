import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { doctorsData } from '../mocks/doctorsData';

const Appointment = () => {
  // Estado para o campo de busca
  const [searchText, setSearchText] = useState('');
  // Estado para o filtro que estiver expandido (null se nenhum)
  const [expandedFilter, setExpandedFilter] = useState(null);
  // Estado para os valores selecionados em cada filtro
  const [selectedFilters, setSelectedFilters] = useState({});

  // Definindo os filtros disponíveis
  const filters = [
    { id: 'distance', label: 'Distância' },
    { id: 'specialty', label: 'Especialidade' },
    { id: 'rating', label: 'Nota' },
  ];

  // Opções para cada filtro:
  const filterOptions = {
    distance: ['Até 1 km', '1-3 km', '3-5 km', 'Acima de 5 km'],
    specialty: ['Cardiologia', 'Dermatologia', 'Pediatria', 'Ortopedia', 'Ginecologia', 'Neurologia', 'Psiquiatria'],
    rating: ['1', '2', '3', '4', '5'],
  };

  // Filtra os médicos de acordo com o campo de busca e os filtros selecionados
  const filteredDoctors = doctorsData.filter(doctor => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchText.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchText.toLowerCase()) ||
      doctor.crm.toLowerCase().includes(searchText.toLowerCase());

    let matchesFilters = true;
    if (selectedFilters.distance) {
      const distance = doctor.distance;
      const filterValue = selectedFilters.distance;
      switch (filterValue) {
        case 'Até 1 km':
          matchesFilters = matchesFilters && distance <= 1;
          break;
        case '1-3 km':
          matchesFilters = matchesFilters && distance > 1 && distance <= 3;
          break;
        case '3-5 km':
          matchesFilters = matchesFilters && distance > 3 && distance <= 5;
          break;
        case 'Acima de 5 km':
          matchesFilters = matchesFilters && distance > 5;
          break;
        default:
          break;
      }
    }
    if (selectedFilters.specialty) {
      matchesFilters = matchesFilters && doctor.specialty === selectedFilters.specialty;
    }
    if (selectedFilters.rating) {
      matchesFilters = matchesFilters && Math.floor(doctor.rating) == selectedFilters.rating;
    }

    return matchesSearch && matchesFilters;
  });

  // Função para alternar o estado expandido de um filtro
  const toggleFilter = (filterId) => {
    setExpandedFilter(expandedFilter === filterId ? null : filterId);
  };

  // Função para selecionar uma opção de filtro e fechar o dropdown
  const selectFilterOption = (filterId, option) => {
    setSelectedFilters({ ...selectedFilters, [filterId]: option });
    setExpandedFilter(null);
  };

  // Função para resetar os filtros
  const resetFilters = () => {
    setSelectedFilters({});
    setExpandedFilter(null);
  };

  // Calcula se há algum filtro selecionado
  const hasFiltersSelected = Object.keys(selectedFilters).length > 0;

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Marcar Consulta</Text>
      
      {/* Campo de Busca */}
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar por médico, CRM ou tipo..."
        value={searchText}
        onChangeText={setSearchText}
      />

      {/* Botão de Reset de Filtros (aparece se houver algum filtro selecionado) */}
      {hasFiltersSelected && (
        <TouchableOpacity style={styles.resetButton} onPress={resetFilters}>
          <Text style={styles.resetButtonText}>Zerar Filtros</Text>
        </TouchableOpacity>
      )}

      {/* Filtros dispostos verticalmente */}
      <View style={styles.filtersContainer}>
        {filters.map(filter => (
          <TouchableOpacity
            key={filter.id}
            style={styles.filterButton}
            onPress={() => toggleFilter(filter.id)}
          >
            <Text style={styles.filterButtonText}>
              {filter.label}{selectedFilters[filter.id] ? `: ${selectedFilters[filter.id]}` : ''}
            </Text>
            <Ionicons
              name={expandedFilter === filter.id ? 'chevron-up-outline' : 'chevron-down-outline'}
              size={16}
              color="#333"
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Caixa expansível do filtro selecionado */}
      {expandedFilter && (
        <View style={styles.expandedFilterBox}>
          {filterOptions[expandedFilter].map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.filterOptionButton}
              onPress={() => selectFilterOption(expandedFilter, option)}
            >
              <Text style={styles.filterOptionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Texto para separar os filtros da lista de médicos */}
      <Text style={styles.sectionTitle}>Médicos Parceiros</Text>

      {/* Lista rolável de Médicos (única parte rolável) */}
      <ScrollView style={styles.doctorsList} contentContainerStyle={styles.doctorsListContent}>
        {filteredDoctors.map(doctor => (
          <View key={doctor.id} style={styles.doctorCard}>
            <View style={styles.doctorInfo}>
              <Text style={styles.doctorName}>{doctor.name}</Text>
              <Text style={styles.doctorSpecialty}>{doctor.specialty}</Text>
              <Text style={styles.doctorCRM}>CRM: {doctor.crm}</Text>
            </View>
            <View style={styles.doctorDetails}>
              <Text style={styles.doctorDetail}>Distância: {doctor.distance} km</Text>
              <Text style={styles.doctorDetail}>Nota: {doctor.rating}</Text>
            </View>
            <Text style={styles.doctorAddress}>{doctor.address}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Appointment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  resetButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  filtersContainer: {
    // Disposição vertical dos filtros
    marginBottom: 10,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    marginBottom: 8,
  },
  filterButtonText: {
    fontSize: 14,
    color: '#333',
  },
  expandedFilterBox: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
  filterOptionButton: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  filterOptionText: {
    fontSize: 14,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  doctorsList: {
    flex: 1,
  },
  doctorsListContent: {
    paddingBottom: 20,
  },
  doctorCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  doctorInfo: {
    marginBottom: 8,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  doctorSpecialty: {
    fontSize: 14,
    color: '#555',
  },
  doctorCRM: {
    fontSize: 12,
    color: '#999',
  },
  doctorDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  doctorDetail: {
    fontSize: 12,
    color: '#555',
  },
  doctorAddress: {
    fontSize: 12,
    color: '#777',
  },
});
