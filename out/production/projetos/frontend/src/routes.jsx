import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Estoque from './pages/Estoque';
import Produtos from './pages/Produtos';
import Relatorio from './pages/Relatorio';
import Error from './pages/Error';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/estoque" element={<Estoque />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/relatorios" element={<Relatorio />} />
      <Route path="/error" element={<Error />} />
    </Routes>
  );
};

export default RoutesComponent;