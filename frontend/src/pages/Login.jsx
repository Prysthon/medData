import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import FormInput from '../components/FormInput';
import LoadingButton from '../components/LoadingButton';
import { loginUser } from '../api/admin';

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const { token } = await loginUser(form);
      localStorage.setItem('token', token);
      toast.success('Login realizado com sucesso!');
      navigate('/dashboard'); // já vai para a nova rota
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Faça seu Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
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
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            Entrar
          </LoadingButton>
        </form>
        <div className="mt-4 text-center">
          <button
            onClick={() => navigate('/register')}
            className="text-blue-600 hover:underline"
          >
            Não tem uma conta? Cadastre-se
          </button>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
