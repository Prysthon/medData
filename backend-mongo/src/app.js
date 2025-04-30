const express = require('express');

const authRoutes = require('./routes/auth');


const app = express();

// Middlewares
app.use(express.json());

// Rotas
app.get('/', (req, res) => {
  res.send('API working');
});

app.use('/register', authRoutes);

module.exports = app;
