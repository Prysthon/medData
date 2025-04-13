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
        details:
          'Durante a consulta, o Dr. Carlos Souza revisou todo o histórico do paciente, ajustou a medicação para hipertensão leve e solicitou exames laboratoriais para monitoramento do colesterol. O paciente apresentou boa resposta ao tratamento, sem complicações significativas, e foi orientado a realizar uma nova consulta em 6 meses para acompanhamento.'
      },
      {
        id: '2',
        date: '10/03/2025',
        doctor: 'Dra. Maria Fernanda',
        location: 'Hospital Central',
        description:
          'Avaliação cardiológica com solicitação de ecocardiograma e holter para investigação de arritmias.',
        details:
          'A Dra. Maria Fernanda realizou uma avaliação detalhada do sistema cardiovascular do paciente. Foram identificados leves episódios de irregularidade no ritmo cardíaco, o que motivou a solicitação de um ecocardiograma e de um monitoramento holter. O exame confirmou ocorrências esporádicas de arritmia, recomendando um monitoramento contínuo e possivelmente uma modificação na medicação.'
      },
      {
        id: '3',
        date: '28/04/2025',
        doctor: 'Dr. João Martins',
        location: 'Centro Médico São Lucas',
        description:
          'Consulta para dor nas articulações, com encaminhamento para fisioterapia e exames de imagem.',
        details:
          'Durante a consulta, o Dr. João Martins avaliou as queixas de dor nas articulações e descartou complicações articulares graves através de exames de imagem. O paciente foi encaminhado para um programa de fisioterapia, com sessões semanais, para melhorar a mobilidade e reduzir a inflamação, além de orientações para controle da dor com medidas não farmacológicas.'
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
        details:
          'O exame de sangue completo incluiu coleta para avaliação de hemograma, perfil lipídico, níveis glicêmicos e outros marcadores metabólicos. Os resultados possibilitaram ao médico ajustar as doses dos medicamentos e fazer recomendações sobre dieta e estilo de vida para melhorar os índices metabólicos.'
      },
      {
        id: '2',
        date: '18/02/2025',
        procedure: 'Vacinação Antitetânica',
        location: 'Centro de Saúde Municipal',
        description:
          'Aplicação de vacina antitetânica como parte do esquema de atualização vacinal anual.',
        details:
          'A vacinação antitetânica foi administrada sem complicações, cumprindo o calendário de imunizações preventivas. Foram passadas orientações sobre cuidados pós-vacina e a importância da atualização periódica para evitar riscos associados a ferimentos acidentais.'
      },
      {
        id: '3',
        date: '10/04/2025',
        procedure: 'Ultrassonografia Abdominal',
        location: 'Diagnóstico Avançado',
        description:
          'Procedimento de ultrassonografia realizado para investigação de desconforto abdominal, sem alterações significativas encontradas.',
        details:
          'A ultrassonografia abdominal foi realizada para investigar dores persistentes. Os resultados foram normais, sugerindo que a origem do desconforto pode ser funcional. O paciente foi orientado a retornar em caso de agravamento dos sintomas ou caso novas queixas surjam.'
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
        details:
          'A consulta com a Dra. Fernanda Lima foi agendada para monitorar a pressão arterial do paciente, revisar a medicação atual e discutir possíveis ajustes. O paciente deve trazer resultados recentes dos exames e um registro diário de pressão para avaliação detalhada.'
      },
      {
        id: '2',
        date: '25/05/2025 - 14:30',
        doctor: 'Dr. Eduardo Ribeiro',
        location: 'Clínica São Marcos',
        description:
          'Avaliação para perda de peso e orientações nutricionais.',
        details:
          'Dr. Eduardo Ribeiro realizará uma análise do estado nutricional e metabólico do paciente, incluindo medidas antropométricas e avaliação dos hábitos alimentares. O objetivo é definir um plano personalizado para perda de peso, com orientações nutricionais e de atividade física.'
      },
      {
        id: '3',
        date: '30/05/2025 - 11:00',
        doctor: 'Dra. Letícia Araújo',
        location: 'Policlínica Vida Nova',
        description:
          'Consulta para avaliação de resultados de exames recentes e planejamento de tratamentos.',
        details:
          'Nesta consulta, a Dra. Letícia Araújo revisará os resultados de exames laboratoriais e de imagem recentes, buscando identificar alterações que possam demandar ajustes no tratamento. Serão discutidas opções terapêuticas e agendado um acompanhamento para monitorar a evolução do quadro clínico.'
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
        details:
          'A prescrição de Losartana 50mg foi ajustada para auxiliar no controle da pressão arterial. As orientações incluem a importância de manter a regularidade na administração, observar possíveis efeitos colaterais e seguir com o monitoramento periódico da pressão arterial.'
      },
      {
        id: '2',
        date: '10/03/2025',
        medication: 'Metformina 850mg',
        location: 'Farmácia Central',
        description:
          'Prescrição para controle da glicemia; tomar duas vezes ao dia com as refeições.',
        details:
          'Metformina 850mg foi prescrita para ajudar no controle dos níveis de glicose, com a recomendação de ser tomada junto com as refeições para minimizar desconforto gastrointestinal. O paciente deve acompanhar os níveis de glicose periodicamente e ajustar o tratamento conforme orientação médica.'
      },
      {
        id: '3',
        date: '28/04/2025',
        medication: 'Atorvastatina 20mg',
        location: 'Farmácia São Lucas',
        description:
          'Prescrição para redução do colesterol; tomar à noite antes de dormir.',
        details:
          'Atorvastatina 20mg foi prescrita com a finalidade de reduzir os níveis de colesterol. A administração noturna foi escolhida para maximizar sua eficácia, e o paciente recebeu orientações sobre a importância de manter uma dieta saudável e realizar exames de acompanhamento para avaliar a resposta ao tratamento.'
      },
    ],
  },
  {
    key: 'cirurgias',
    label: 'Cirurgias',
    cards: [
      {
        id: '1',
        date: '05/01/2025',
        surgery: 'Apendicectomia',
        location: 'Hospital Santa Luzia',
        description:
          'Cirurgia de emergência para retirada do apêndice inflamado, sem complicações pós-operatórias.',
        details:
          'O paciente foi submetido a uma apendicectomia de emergência devido a uma apendicite aguda. O procedimento foi realizado com sucesso, sem complicações, e o paciente recebeu alta após um período de recuperação adequado e acompanhamento para evitar infecções.'
      }
    ],
  },
  {
    key: 'medicamentos',
    label: 'Medicamentos Recorrentes',
    cards: [
      {
        id: '1',
        date: 'Diário',
        medication: 'Suplemento Multivitamínico',
        location: 'Farmácia XYZ',
        description:
          'Suplemento diário para manter níveis adequados de vitaminas e minerais, auxiliando no bem-estar geral.',
        details:
          'O suplemento multivitamínico é indicado para complementar a dieta e garantir que o paciente receba todas as vitaminas e minerais essenciais. Deve ser ingerido diariamente, preferencialmente no café da manhã, para manter um nível nutricional ideal e apoiar a saúde global.'
      }
    ],
  },
  {
    key: 'exames',
    label: 'Exames',
    cards: [
      {
        id: '1',
        date: '12/12/2024',
        exam: 'Ressonância Magnética',
        location: 'Centro de Imagem Avançada',
        description:
          'Exame de ressonância magnética para investigação de dores crônicas na coluna.',
        details:
          'A ressonância magnética foi realizada para avaliar a coluna vertebral, identificar eventuais alterações degenerativas e inflamações. O exame revelou áreas de leve degeneração e pontos de inflamação, orientando o médico a prescrever tratamentos para alívio da dor e melhora da mobilidade.'
      }
    ],
  }
];
