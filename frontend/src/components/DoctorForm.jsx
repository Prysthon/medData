import React, { useState, useEffect } from 'react';
import FormInput from './FormInput';
import LoadingButton from './LoadingButton';

export default function DoctorForm({
  initialData,
  onSubmit,
  loading,
  onCancel,
  submitLabel,
}) {
  const emptyData = { name: '', email: '', specialty: '', password: '', crm: '' };
  const [form, setForm] = useState(initialData || emptyData);

  useEffect(() => {
    // só reseta quando initialData mudar de verdade
    if (initialData) {
      setForm(initialData);
    } else {
      setForm(emptyData);
    }
  }, [initialData]);

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FormInput id="d-name"      name="name"      label="Nome"         value={form.name}      onChange={handleChange} />
        <FormInput id="d-email"     name="email"     label="E-mail"       type="email" value={form.email}     onChange={handleChange} />
        <FormInput id="d-specialty" name="specialty" label="Especialidade" value={form.specialty} onChange={handleChange} />
        <FormInput id="d-password"  name="password"  label="Senha"        type="password" value={form.password}  onChange={handleChange} />
        <FormInput id="d-crm"       name="crm"       label="CRM"          value={form.crm}       onChange={handleChange} />
      </div>
      <div className="flex space-x-2">
        <LoadingButton
          type="submit"
          loading={loading}
          className="bg-green-600 text-white hover:bg-green-700"
        >
          {submitLabel}
        </LoadingButton>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}
