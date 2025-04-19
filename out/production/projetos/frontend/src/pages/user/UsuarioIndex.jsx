import React, { useEffect, useState } from "react";
import { Edit, Trash2, Search } from "lucide-react";
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

      if (!response.ok) throw new Error("Erro ao buscar usuários");

      const data = await response.json();
      setUsuarios(data);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error.message);
      toast.error("Erro ao carregar usuários");
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
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (!response.ok) throw new Error("Erro ao excluir");

      toast.success("Usuário excluído com sucesso!");
      fetchUsuarios();
    } catch (error) {
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

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500">
        Carregando usuários...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Gestão de Usuários</h1>
        <Link
          to="/user/criar"
          className="rounded-xl bg-green-600 px-5 py-2.5 text-white font-medium shadow hover:bg-green-700 transition-all"
        >
          Criar Usuário
        </Link>
      </div>

      <div className="flex items-center gap-3 mb-6 max-w-md">
        <Search className="text-gray-500" />
        <input
          type="text"
          placeholder="Buscar por nome, email, CPF ou data"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <div className="overflow-x-auto rounded-2xl shadow border border-gray-200 bg-white">
        <table className="min-w-full divide-y divide-gray-100">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Nome</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Email</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">CPF</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Nascimento</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {usuariosFiltrados.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-3 text-sm text-gray-800">{user.name}</td>
                <td className="px-6 py-3 text-sm text-gray-800">{user.email}</td>
                <td className="px-6 py-3 text-sm text-gray-800">{user.cpf}</td>
                <td className="px-6 py-3 text-sm text-gray-800">{formatarData(user.birthday)}</td>
                <td className="px-6 py-3 flex items-center gap-4">
                  <Link
                    to={`/user/editar/${user.id}`}
                    className="text-blue-600 hover:text-blue-800 transition"
                    title="Editar"
                  >
                    <Edit size={18} />
                  </Link>
                  <button
                    onClick={() => confirmarExclusao(user.id)}
                    className="text-red-500 hover:text-red-700 transition"
                    title="Excluir"
                  >
                    <Trash2 size={18} />
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
          <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md animate-fade-in">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Confirmar exclusão
            </h2>
            <p className="text-gray-600 mb-6">
              Deseja realmente excluir este usuário? Essa ação não poderá ser desfeita.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-800"
              >
                Cancelar
              </button>
              <button
                onClick={excluirUsuario}
                className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white shadow"
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
