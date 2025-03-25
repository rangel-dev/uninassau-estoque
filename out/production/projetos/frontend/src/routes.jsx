import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Estoque from "./pages/Estoque";
import Produtos from "./pages/Produtos";
import RelatorioEstoque from "./pages/RelatorioEstoque";
import Error from "./pages/Error";
import Login from "./pages/Login";
import EsqueciSenha from "./pages/EsqueciSenha";
import UsuarioCriar from "./pages/user/UsuarioCriar";
import UsuarioIndex from "./pages/user/UsuarioIndex";
import UsuarioEditar from "./pages/user/UsuarioEditar";
import FornecedorIndex from "./pages/fornecedores/FornecedorIndex";
import FornecedorCriar from "./pages/fornecedores/FornecedorCriar";
import FornecedorEditar from "./pages/fornecedores/FornecedorEditar";
import EstoqueIndex from "./pages/estoque/EstoqueIndex";
import EstoqueCriar from "./pages/estoque/EstoqueCriar";
import EstoqueEditar from "./pages/estoque/EstoqueEditar";
import RelatoriosPedidos from "./pages/RelatorioPedidos";
import Userperfil from "./pages/userperfil/Userperfil";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/esquecisenha" element={<EsqueciSenha />} />
      <Route path="/estoque" element={<Estoque />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/relatorioestoque" element={<RelatorioEstoque />} />
      <Route path="/relatoriopedidos" element={<RelatoriosPedidos />} />
      <Route path="/usuariocriar" element={<UsuarioCriar />} />
      <Route path="/usuarioindex" element={<UsuarioIndex />} />
      <Route path="/usuarioeditar" element={<UsuarioEditar />} />
      <Route path="/fornecedorindex" element={<FornecedorIndex />} />
      <Route path="/fornecedorcriar" element={<FornecedorCriar />} />
      <Route path="/fornecedoreditar" element={<FornecedorEditar />} />
      <Route path="/estoqueindex" element={<EstoqueIndex />} />
      <Route path="/estoquecriar" element={<EstoqueCriar />} />
      <Route path="/estoqueeditar" element={<EstoqueEditar />} />
      <Route path="/Userperfil" element={<Userperfil />} />
      <Route path="/error" element={<Error />} />
    </Routes>
  );
};

export default RoutesComponent;
