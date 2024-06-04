import { createContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signup = async (userData) => {
    const res = await axios.post('/api/auth/signup', userData);
    setUser(res.data.user);
    localStorage.setItem('token', res.data.token);
  };

  const login = async (userData) => {
    const res = await axios.post('/api/auth/login', userData);
    setUser(res.data.user);
    localStorage.setItem('token', res.data.token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
