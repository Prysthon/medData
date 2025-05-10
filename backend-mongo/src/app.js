const express = require('express');

const { errors } = require('celebrate');

const { userRouter, protectedRouter, doctorRouter } = require('./routes')

const connectDB = require('./database/index');

connectDB();   
const app = express();

// Middlewares
app.use(express.json());

// Rotas
app.get('/', (_request, response) => { response.status(200).json('api funcionando') });
app.use('/', userRouter);
app.use('/protected', protectedRouter);
app.use('/doctors', doctorRouter);

app.use(errors());


module.exports = app;
