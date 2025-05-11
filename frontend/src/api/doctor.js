// src/api/doctor.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL?.replace(/\/$/, '') || 'http://localhost:3000';

// Cria instância do Axios com headers dinâmicos
const api = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});

// Interceptor para incluir token automaticamente
api.interceptors.request.use(config => {
  // só acessa localStorage no cliente
  if (typeof window !== 'undefined') {
    const token = window.localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export async function getDoctors() {
  try {
    const res = await api.get('/doctors');
    return res.data;
  } catch (err) {
    throw new Error(err.response?.data?.error || 'Falha ao buscar médicos');
  }
}

export async function getDoctorById(id) {
  try {
    const res = await api.get(`/doctors/${id}`);
    return res.data;
  } catch (err) {
    throw new Error(err.response?.data?.error || 'Falha ao buscar médico');
  }
}

export async function createDoctor({ name, email, specialty, password, crm }) {
  try {
    const res = await api.post('/doctors', { name, email, specialty, password, crm });
    return res.data;
  } catch (err) {
    throw new Error(err.response?.data?.error || 'Falha ao criar médico');
  }
}

export async function updateDoctor(id, { name, email, specialty, crm }) {
  try {
    const res = await api.put(`/doctors/${id}`, { name, email, specialty, crm });
    return res.data;
  } catch (err) {
    throw new Error(err.response?.data?.error || 'Falha ao atualizar médico');
  }
}

export async function deleteDoctor(id) {
  try {
    await api.delete(`/doctors/${id}`);
    return true;
  } catch (err) {
    throw new Error(err.response?.data?.error || 'Falha ao deletar médico');
  }
}
