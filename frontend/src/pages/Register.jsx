import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import FormInput from '../components/FormInput';
import LoadingButton from '../components/LoadingButton';
import { registerUser } from '../api/admin';

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      await registerUser(form);
      toast.success('Cadastro realizado com sucesso!');
      navigate('/login');
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Cadastre-se</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput
            id="name"
            name="name"
            label="Nome"
            value={form.name}
            onChange={handleChange}
          />
          <FormInput
            id="email"
            name="email"
            label="E-mail"
            type="email"
            value={form.email}
            onChange={handleChange}
          />
          <FormInput
            id="password"
            name="password"
            label="Senha"
            type="password"
            value={form.password}
            onChange={handleChange}
          />
          <LoadingButton
            type="submit"
            loading={loading}
            className="bg-green-600 text-white hover:bg-green-700"
          >
            Cadastrar
          </LoadingButton>
        </form>
        <div className="mt-4 text-center">
          <button
            onClick={() => navigate('/login')}
            className="text-blue-600 hover:underline"
          >
            Já tem conta? Faça login
          </button>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
