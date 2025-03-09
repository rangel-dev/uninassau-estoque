import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Estoque from './pages/Estoque';
import Produtos from './pages/Produtos';
import Relatorio from './pages/Relatorio';
import Error from './pages/Error';
import Login from './pages/Login';
import EsqueciSenha from './pages/EsqueciSenha';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} /> {/* Define a rota inicial como Login */}
      <Route path="/dashboard" element={<Dashboard />} /> {/* Adiciona a rota para o Dashboard */}
      <Route path="/login" element={<Login />} />
      <Route path="/esquecisenha" element={<EsqueciSenha />} />
      <Route path="/estoque" element={<Estoque />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/relatorios" element={<Relatorio />} />
      <Route path="/error" element={<Error />} />
    </Routes>
  );
};

export default RoutesComponent;