import React from 'react';

export default function LoadingButton({
  children,
  loading,
  className = '',
  ...props
}) {
  return (
    <button
      disabled={loading}
      {...props}
      className={`w-full py-2 rounded disabled:opacity-50 ${className}`}
    >
      {loading ? `${children}...` : children}
    </button>
  );
}
