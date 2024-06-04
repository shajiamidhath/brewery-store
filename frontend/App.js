import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { BreweryProvider } from './context/BreweryContext';
import Navbar from './components/Navbar';
import Auth from './components/Auth';
import Search from './components/Search';
import BreweryDetails from './components/BreweryDetails';
import './styles.css';

const App = () => {
  return (
    <AuthProvider>
      <BreweryProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/brewery/:id" element={<BreweryDetails />} />
          </Routes>
        </Router>
      </BreweryProvider>
    </AuthProvider>
  );
};

export default App;
