import React, { useState, useEffect } from 'react';
import FormInput from './FormInput';
import LoadingButton from './LoadingButton';

export default function EditDoctorModal({
  isOpen,
  initialData, 
  onClose,
  onSubmit,
  loading,
}) {
  const empty = { name: '', email: '', specialty: '', password: '', crm: '' };
  const [form, setForm] = useState(empty);

  // ao abrir, pré-preenche com initialData
  useEffect(() => {
    if (isOpen && initialData) {
      setForm({
        name: initialData.name || '',
        email: initialData.email || '',
        specialty: initialData.specialty || '',
        crm: initialData.crm || '',
      });
    } else {
      setForm(empty);
    }
  }, [isOpen, initialData]);

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    // só envia campos não-vazios
    const fields = Object.fromEntries(
      Object.entries(form).filter(([_, v]) => v.trim() !== '')
    );
    onSubmit(initialData._id, fields);
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow p-6 w-full max-w-md">
        <h2 className="text-lg font-bold mb-4">Editar Médico</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput id="e-name"      name="name"      label="Nome"         value={form.name}      onChange={handleChange} required={false} />
          <FormInput id="e-email"     name="email"     label="E-mail"       type="email" value={form.email}     onChange={handleChange} required={false} />
          <FormInput id="e-specialty" name="specialty" label="Especialidade" value={form.specialty} onChange={handleChange} required={false} />
          <FormInput id="e-crm"       name="crm"       label="CRM"          value={form.crm}       onChange={handleChange} required={false} />
          <div className="flex justify-end space-x-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancelar
            </button>
            <LoadingButton
              type="submit"
              loading={loading}
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              Salvar
            </LoadingButton>
          </div>
        </form>
      </div>
    </div>
  );
}
