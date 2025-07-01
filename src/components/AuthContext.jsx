import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem("token") || null); //recupera valor do localStorage
  const [usuario, setUsuario] = useState(() => localStorage.getItem("usuario"));

  const login = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken); //salva o valor no localStorage
  };

  const User = (newUser)=> {
    setUsuario(newUser);
    localStorage.setItem("usuario", newUser); //salva o valor no localStorage
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ token, usuario, login, logout, User }}>
      {children}
    </AuthContext.Provider>
  );
}
