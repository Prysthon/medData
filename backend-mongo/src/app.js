const express = require('express');

const { userRouter, protectedRouter } = require('./routes')

const connectDB = require('./database/index');

connectDB();   
const app = express();

// Middlewares
app.use(express.json());

// Rotas
app.get('/', (_request, response) => { response.status(200).json('api funcionando') });
app.use('/', userRouter);
app.use('/protected', protectedRouter);


module.exports = app;
