import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './Contexts/AuthContext';
import Login from './components/Login/Login';
import MainPage from './components/MainPage/MainPage';
import './App.css';

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/" />;
};

const App = () => (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/portfolio" element={<ProtectedRoute element={<MainPage />} />} />
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
