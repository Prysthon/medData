// src/mocks/quickAccessData.js

export const quickAccessItems = [
  {
    key: 'historico',
    label: 'Histórico',
    cards: [
      {
        id: '1',
        date: '15/02/2025',
        doctor: 'Dr. Carlos Souza',
        location: 'Clínica Vida',
        description:
          'Consulta de rotina com avaliação geral, revisão de medicamentos e indicação de novos exames de sangue.',
      },
      {
        id: '2',
        date: '10/03/2025',
        doctor: 'Dra. Maria Fernanda',
        location: 'Hospital Central',
        description:
          'Avaliação cardiológica com solicitação de ecocardiograma e holter para investigação de arritmias.',
      },
      {
        id: '3',
        date: '28/04/2025',
        doctor: 'Dr. João Martins',
        location: 'Centro Médico São Lucas',
        description:
          'Consulta para dor nas articulações, com encaminhamento para fisioterapia e exames de imagem.',
      },
    ],
  },
  {
    key: 'procedimentos',
    label: 'Procedimentos',
    cards: [
      {
        id: '1',
        date: '30/01/2025',
        procedure: 'Exame de Sangue Completo',
        location: 'Laboratório Bio',
        description:
          'Procedimento realizado para avaliação de hemograma completo e perfil metabólico, incluindo colesterol e triglicerídeos.',
      },
      {
        id: '2',
        date: '18/02/2025',
        procedure: 'Vacinação Antitetânica',
        location: 'Centro de Saúde Municipal',
        description:
          'Aplicação de vacina antitetânica como parte do esquema de atualização vacinal anual.',
      },
      {
        id: '3',
        date: '10/04/2025',
        procedure: 'Ultrassonografia Abdominal',
        location: 'Diagnóstico Avançado',
        description:
          'Procedimento de ultrassonografia realizado para investigação de desconforto abdominal, sem alterações significativas encontradas.',
      },
    ],
  },
  {
    key: 'agendamentos',
    label: 'Agendamentos',
    cards: [
      {
        id: '1',
        date: '20/05/2025 - 09:00',
        doctor: 'Dra. Fernanda Lima',
        location: 'Hospital Central',
        description:
          'Consulta agendada para acompanhamento de hipertensão e revisão medicamentosa.',
      },
      {
        id: '2',
        date: '25/05/2025 - 14:30',
        doctor: 'Dr. Eduardo Ribeiro',
        location: 'Clínica São Marcos',
        description:
          'Avaliação para perda de peso e orientações nutricionais.',
      },
      {
        id: '3',
        date: '30/05/2025 - 11:00',
        doctor: 'Dra. Letícia Araújo',
        location: 'Policlínica Vida Nova',
        description:
          'Consulta para avaliação de resultados de exames recentes e planejamento de tratamentos.',
      },
    ],
  },
  {
    key: 'prescricoes',
    label: 'Prescrições',
    cards: [
      {
        id: '1',
        date: '15/02/2025',
        medication: 'Losartana 50mg',
        location: 'Farmácia da Clínica Vida',
        description:
          'Prescrição para controle da pressão arterial; tomar uma vez ao dia pela manhã.',
      },
      {
        id: '2',
        date: '10/03/2025',
        medication: 'Metformina 850mg',
        location: 'Farmácia Central',
        description:
          'Prescrição para controle da glicemia; tomar duas vezes ao dia com as refeições.',
      },
      {
        id: '3',
        date: '28/04/2025',
        medication: 'Atorvastatina 20mg',
        location: 'Farmácia São Lucas',
        description:
          'Prescrição para redução do colesterol; tomar à noite antes de dormir.',
      },
    ],
  },
];
