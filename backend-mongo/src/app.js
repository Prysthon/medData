const express = require('express');

const { errors } = require('celebrate');
const cors = require('cors');
const { userRouter, protectedRouter, doctorRouter } = require('./routes')

const connectDB = require('./database/index');

connectDB();   
const app = express();

const allowedOrigin = (process.env.FRONTEND_URL || 'http://localhost:5173').replace(/\/$/, '');
app.use(cors({ origin: allowedOrigin, credentials: true }));

// Middlewares
app.use(express.json());

// Rotas
app.get('/', (_request, response) => { response.status(200).json('api funcionando') });
app.use('/', userRouter);
app.use('/protected', protectedRouter);
app.use('/doctors', doctorRouter);

app.use(errors());


module.exports = app;
