import React from "react";
import { Routes, Route } from "react-router-dom";

// Páginas públicas
import Login from "./pages/Login";
import EsqueciSenha from "./pages/EsqueciSenha";

// Páginas privadas
import Dashboard from "./pages/Dashboard";
import Estoque from "./pages/Estoque";
import Produtos from "./pages/Produtos";
import RelatorioEstoque from "./pages/RelatorioEstoque";
import RelatoriosPedidos from "./pages/RelatorioPedidos";
import UsuarioCriar from "./pages/user/UsuarioCriar";
import UsuarioIndex from "./pages/user/UsuarioIndex";
import UsuarioEditar from "./pages/user/UsuarioEditar";
import FornecedorIndex from "./pages/fornecedores/FornecedorIndex";
import FornecedorCriar from "./pages/fornecedores/FornecedorCriar";
import FornecedorEditar from "./pages/fornecedores/FornecedorEditar";
import EstoqueIndex from "./pages/estoque/EstoqueIndex";
import EstoqueCriar from "./pages/estoque/EstoqueCriar";
import EstoqueEditar from "./pages/estoque/EstoqueEditar";
import Userperfil from "./pages/userperfil/Userperfil";

// Outros
import Error from "./pages/Error";
import PrivateRoute from "./routes/PrivateRoute";

const RoutesComponent = () => {
  return (
    <Routes>
      {/* Rotas públicas */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/esquecisenha" element={<EsqueciSenha />} />

      {/* Rotas protegidas */}
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/estoque" element={<Estoque />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/relatorioestoque" element={<RelatorioEstoque />} />
        <Route path="/relatoriopedidos" element={<RelatoriosPedidos />} />
        <Route path="/user/criar" element={<UsuarioCriar />} />
        <Route path="/user" element={<UsuarioIndex />} />
        <Route path="/user/editar/:id" element={<UsuarioEditar />} />
        <Route path="/fornecedores" element={<FornecedorIndex />} />
        <Route path="/fornecedores/criar" element={<FornecedorCriar />} />
        <Route path="/fornecedores/editar/:id" element={<FornecedorEditar />} />
        <Route path="/estoqueindex" element={<EstoqueIndex />} />
        <Route path="/estoque/criar" element={<EstoqueCriar />} />
        <Route path="/estoque/editar/:id" element={<EstoqueEditar />} />
        <Route path="/perfil" element={<Userperfil />} />
      </Route>

      {/* Rota de erro 404 */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default RoutesComponent;
