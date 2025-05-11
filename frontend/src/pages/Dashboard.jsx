// src/pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import DoctorForm from '../components/DoctorForm';
import DoctorList from '../components/DoctorList';
import EditDoctorModal from '../components/EditDoctorModal';
import LoadingButton from '../components/LoadingButton';
import {
  getDoctors,
  getDoctorById,
  createDoctor,
  updateDoctor,
  deleteDoctor,
} from '../api/doctor';

export default function Dashboard() {
  const navigate = useNavigate();
  const [allDoctors, setAllDoctors] = useState([]);
  const [display, setDisplay] = useState([]);
  const [loadingList, setLoadingList] = useState(true);
  const [loadingForm, setLoadingForm] = useState(false);
  const [searchId, setSearchId] = useState('');
  const [searchLoading, setSearchLoading] = useState(false);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem('token')) return navigate('/login');
    loadAll();
  }, [navigate]);

  const loadAll = async () => {
    setLoadingList(true);
    try {
      const docs = await getDoctors();
      setAllDoctors(docs);
      setDisplay(docs);
    } catch (e) {
      toast.error(e.message);
      navigate('/login');
    } finally {
      setLoadingList(false);
    }
  };

  const handleSearch = async () => {
    if (!searchId) return loadAll();
    setSearchLoading(true);
    try {
      const doc = await getDoctorById(searchId);
      setDisplay([doc]);
    } catch (e) {
      toast.error(e.message);
      setDisplay([]);
    } finally {
      setSearchLoading(false);
    }
  };

  const handleCreate = async data => {
    setLoadingForm(true);
    try {
      await createDoctor(data);
      toast.success('Médico criado');
      loadAll();
    } catch (e) {
      toast.error(e.message);
    } finally {
      setLoadingForm(false);
    }
  };

  const handleDelete = async id => {
    if (!confirm('Confirma exclusão?')) return;
    try {
      await deleteDoctor(id);
      toast.success('Médico deletado');
      loadAll();
    } catch (e) {
      toast.error(e.message);
    }
  };

  const openModal = doc => setEditData(doc);
  const closeModal = () => setEditData(null);

  const handleModalSubmit = async (id, fields) => {
    setLoadingForm(true);
    try {
      await updateDoctor(id, fields);
      toast.success('Médico atualizado');
      closeModal();
      loadAll();
    } catch (e) {
      toast.error(e.message);
    } finally {
      setLoadingForm(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold">Dashboard de Médicos</h1>
          <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Logout
          </button>
        </header>

        <DoctorForm onSubmit={handleCreate} loading={loadingForm} submitLabel="Criar Médico" />

        <div className="mb-4 flex">
          <input
            type="text"
            placeholder="Buscar por ID"
            value={searchId}
            onChange={e => setSearchId(e.target.value)}
            className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring"
          />
          <LoadingButton
            onClick={handleSearch}
            loading={searchLoading}
            className="ml-2 bg-blue-600 text-white hover:bg-blue-700"
          >
            Buscar
          </LoadingButton>
        </div>

        {loadingList ? (
          <p>Carregando lista...</p>
        ) : (
          <DoctorList doctors={display} onEdit={openModal} onDelete={handleDelete} />
        )}

        <EditDoctorModal
          isOpen={Boolean(editData)}
          initialData={editData}
          onClose={closeModal}
          onSubmit={handleModalSubmit}
          loading={loadingForm}
        />
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
