import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export async function loginUser({ email, password }) {
  try {
    const response = await api.post('/login', { email, password });
    return response.data; 
  } catch (err) {
    console.log(err)
    throw new Error(err.response?.data?.error || 'Erro ao autenticar');
  }
}

export async function registerUser({ name, email, password }) {
  try {
    const response = await api.post('/register', { name, email, password });
    return response.data; 
  } catch (err) {
    throw new Error(err.response?.data?.error || 'Erro ao cadastrar');
  }
}
