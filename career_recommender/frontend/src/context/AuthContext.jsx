import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("career_token"));
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("career_user");
    if (!stored) return null;

    try {
      return JSON.parse(stored);
    } catch {
      localStorage.removeItem("career_user");
      return null;
    }
  });

  useEffect(() => {
    if (token) {
      localStorage.setItem("career_token", token);
    } else {
      localStorage.removeItem("career_token");
    }
  }, [token]);

  useEffect(() => {
    if (user) {
      localStorage.setItem("career_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("career_user");
    }
  }, [user]);

  const login = (payload) => {
    setToken(payload.access_token);
    setUser(payload.user);
  };

  const logout = () => {
    setToken(null);
    setUser(null);
  };

  return <AuthContext.Provider value={{ token, user, login, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
