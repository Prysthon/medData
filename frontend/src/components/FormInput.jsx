import React from 'react';

export default function FormInput({
  id,
  name,
  label,
  type = 'text',
  value,
  onChange,
  required = true,
}) {
  return (
    <div>
      <label htmlFor={id} className="block mb-1 font-medium">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
      />
    </div>
  );
}
