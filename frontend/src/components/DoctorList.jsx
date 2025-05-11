import React from 'react';

export default function DoctorList({ doctors, onEdit, onDelete }) {
  return (
    <ul className="space-y-4">
      {doctors.map(doc => (
        <li
          key={doc._id}
          className="border p-4 rounded flex justify-between items-start"
        >
          <div>
            <p className="font-medium">
              {doc.name} ({doc.crm})
            </p>
            <p className="text-sm text-gray-600">{doc.specialty}</p>
            <p className="text-sm text-gray-600">{doc.email}</p>
            <p className="text-sm text-gray-500">ID: {doc._id}</p>
          </div>
          <div className="space-x-2">
            <button
              onClick={() => onEdit(doc)}
              className="px-3 py-1 bg-yellow-400 rounded hover:bg-yellow-500"
            >
              Editar
            </button>
            <button
              onClick={() => onDelete(doc._id)}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Deletar
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
