import React, { useEffect, useState } from "react";
import { FaEdit, FaSearch, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const UsuarioIndex = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [userIdParaExcluir, setUserIdParaExcluir] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchUsuarios();
  }, [token]);

  const fetchUsuarios = async () => {
    try {
      const response = await fetch("http://localhost:8080/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Erro ao buscar usuários: ${response.status}`);
      }

      const data = await response.json();
      setUsuarios(data);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const confirmarExclusao = (id) => {
    setUserIdParaExcluir(id);
    setShowModal(true);
  };

  const excluirUsuario = async () => {
    if (!userIdParaExcluir) return;

    try {
      const response = await fetch(
        `http://localhost:8080/user/delete/${userIdParaExcluir}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Erro ao excluir usuário: ${response.status} - ${errorText}`
        );
      }

      toast.success("Usuário excluído com sucesso!");
      fetchUsuarios();
    } catch (error) {
      console.error("Erro ao excluir usuário:", error.message);
      toast.error("Erro ao excluir usuário: " + error.message);
    } finally {
      setShowModal(false);
      setUserIdParaExcluir(null);
    }
  };

  const formatarData = (data) => {
    if (!data) return "";
    const [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
  };

  const usuariosFiltrados = usuarios.filter((user) => {
    const termo = search.toLowerCase();
    return (
      user.name.toLowerCase().includes(termo) ||
      user.email.toLowerCase().includes(termo) ||
      (user.cpf && user.cpf.toLowerCase().includes(termo)) ||
      (user.birthday && formatarData(user.birthday).includes(termo))
    );
  });

  if (loading) return <p className="p-6">Carregando usuários...</p>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-indigo-600">Usuários</h1>
        <Link
          to="/user/criar"
          className="rounded-lg bg-green-600 px-4 py-2 text-white font-medium hover:bg-green-700"
        >
          Criar Usuário
        </Link>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Buscar por nome, email, CPF ou data"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded px-3 py-1 w-full max-w-sm"
        />
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Nome</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Email</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">CPF</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Nascimento</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {usuariosFiltrados.map((user) => (
              <tr key={user.id}>
                <td className="px-4 py-2 text-sm text-gray-800">{user.name}</td>
                <td className="px-4 py-2 text-sm text-gray-800">{user.email}</td>
                <td className="px-4 py-2 text-sm text-gray-800">{user.cpf}</td>
                <td className="px-4 py-2 text-sm text-gray-800">{formatarData(user.birthday)}</td>
                <td className="px-4 py-2 flex gap-3 items-center">
                  <Link
                    to={`/user/editar/${user.id}`}
                    className="text-indigo-600 hover:text-indigo-800"
                    title="Editar"
                  >
                    <FaEdit />
                  </Link>
                  <button
                    onClick={() => confirmarExclusao(user.id)}
                    className="text-red-600 hover:text-red-800"
                    title="Excluir"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-xl shadow-xl max-w-sm w-full">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              Confirmar Exclusão
            </h2>
            <p className="text-gray-600 mb-6">
              Tem certeza que deseja excluir este usuário?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 text-gray-800"
              >
                Cancelar
              </button>
              <button
                onClick={excluirUsuario}
                className="px-4 py-2 rounded bg-red-600 hover:bg-red-700 text-white"
              >
                Excluir
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsuarioIndex;
