const express = require('express');

const app = express();

// Middlewares
app.use(express.json());

// Rotas
app.get('/', (req, res) => {
  res.send('API working');
});

// aqui você poderia importar um router separado, ex:
// const usersRouter = require('./routes/users');
// app.use('/users', usersRouter);

module.exports = app;
