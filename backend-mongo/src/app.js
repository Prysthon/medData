const express = require('express');

const authRoutes = require('./routes/auth');
const protectedRoutes = require('./routes/protected');

const app = express();

// Middlewares
app.use(express.json());

// Rotas
app.use('/', authRoutes);
app.use('/protected', protectedRoutes);


module.exports = app;
