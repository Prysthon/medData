# MedData 🏥
O **MedData** é uma aplicação fullstack voltada ao armazenamento e visualização descentralizada de históricos médicos, facilitando o acesso por novos profissionais de saúde. O projeto inclui três camadas: backend com Express + MongoDB, frontend com React, e uma aplicação mobile em React Native (em desenvolvimento).

## 🚀 Habilidades
> Para esse projeto, foi necessário:
- Criar uma API RESTful completa com autenticação JWT e persistência em MongoDB;
- Desenvolver uma interface web responsiva com React e integração ao backend via Axios;
- Estruturar uma base para o app mobile utilizando React Native e navegação com React Navigation.

## 🤖 Tecnologias
> Este projeto foi desenvolvido com as seguintes tecnologias:
- Node.js + Express
- MongoDB + Mongoose
- JWT (JSON Web Token)
- React + Vite
- React Native (em construção)
- Docker (para ambientes isolados)
- Vercel (deploy)

## 🧑‍💻 Como executar

> Siga os passos para executar o projeto corretamente:

1. **Clone** o repositório:
```bash
git clone https://github.com/Prysthon/medData.git
cd medData
```

2. **Backend** (`/backend-mongo`):
```bash
cd backend-mongo
npm install
npm run dev
```

- Certifique-se de que o MongoDB está rodando localmente ou configure as variáveis de ambiente adequadamente.
- A API será servida em `http://localhost:3000`.

3. **Frontend** (`/frontend`):
```bash
cd frontend
npm install
npm run dev
```

- O frontend será servido em `http://localhost:5173` e se comunica com o backend via Axios.

4. **Mobile (opcional)**:
```bash
cd mobile-app
yarn install
npx expo start
```

- Certifique-se de ter o Expo Go instalado no celular ou use um emulador Android/iOS.

## 📦 Estrutura do Projeto

```
.
├── backend-mongo
│   ├── Dockerfile
│   ├── docker-compose.yml
│   ├── package.json
│   ├── src/ (controllers, routes, models, middlewares)
├── frontend
│   ├── index.html
│   ├── package.json
│   ├── src/ (páginas, componentes, serviços)
├── mobile-app
│   ├── App.js
│   ├── screens/
│   ├── navigation/
└── README.md (esse arquivo)
```

## 📌 Funcionalidades

- [x] Autenticação com login e token JWT
- [x] CRUD de médicos
- [x] Armazenamento de token no localStorage
- [ ] Visualização e edição do histórico médico (em desenvolvimento)
- [ ] App mobile com navegação e visualização (em construção)

## 🧪 Testes

*<br> 🚧 Em construção 🚧 <br>*

## 📧 Contatos
> Caso tenha alguma dúvida sobre o projeto ou verifique algum erro, entre em contato por:

<div align="center" style="display: inline_block">
  <a href="https://www.linkedin.com/in/tiagoprysthon" target="_blank"><img height="28rem" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a> 
  <a href = "mailto:tiagoprysthon14@gmail.com"><img height="28rem" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
</div>
