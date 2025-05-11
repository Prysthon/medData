// src/contexts/AuthContext.jsx
import { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem('token');
    }
    return null;
  });

  const login = newToken => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('token', newToken);
    }
    setToken(newToken);
  };

  const logout = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem('token');
    }
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
