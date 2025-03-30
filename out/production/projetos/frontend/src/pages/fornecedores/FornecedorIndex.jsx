import React, { useEffect, useState } from "react";
import { FaEdit, FaSearch, FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"; // Adicionei useNavigate
import { toast } from "react-toastify";

const FornecedoresIndex = () => {
  const [fornecedores, setFornecedores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    fetchFornecedores();
  }, [token]);

  const fetchFornecedores = async () => {
    try {
      console.log("Buscando lista de fornecedores...");
      const response = await fetch("http://localhost:8080/suppliers", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Erro ao buscar fornecedores: ${response.status}`);
      }

      const data = await response.json();
      console.log("Fornecedores recebidos:", data);
      setFornecedores(data);
    } catch (error) {
      console.error("Erro ao buscar fornecedores:", error.message);
    } finally {
      setLoading(false);
      console.log("Carregamento concluído, loading:", false);
    }
  };

  const excluirFornecedor = async (id) => {
    if (!window.confirm("Tem certeza que deseja excluir este fornecedor?"))
      return;

    try {
      console.log(`Excluindo fornecedor com ID: ${id}`);
      const response = await fetch(
          `http://localhost:8080/suppliers/delete/${id}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Resposta do servidor:", errorText);
        throw new Error(
            `Erro ao excluir fornecedor: ${response.status} - ${errorText}`
        );
      }

      console.log("Fornecedor excluído com sucesso!");
      toast.success("Fornecedor excluído com sucesso!");

      setFornecedores((prevFornecedores) =>
          prevFornecedores.filter((fornecedor) => fornecedor.id !== id)
      );
    } catch (error) {
      console.error("Erro ao excluir fornecedor:", error.message);
      toast.error("Erro ao excluir fornecedor: " + error.message);
    }
  };


  const handleEdit = (fornecedor) => {
    navigate(`/fornecedores/editar/${fornecedor.id}`, {
      state: { fornecedor }
    });
  };

  const fornecedoresFiltrados = fornecedores.filter((fornecedor) => {
    const termo = search.toLowerCase();
    return (
        fornecedor.socialname.toLowerCase().includes(termo) ||
        (fornecedor.cnpj && fornecedor.cnpj.toLowerCase().includes(termo)) ||
        (fornecedor.cep && fornecedor.cep.toLowerCase().includes(termo)) ||
        (fornecedor.category?.name &&
            fornecedor.category.name.toLowerCase().includes(termo))
    );
  });

  if (loading) return <p className="p-6">Carregando fornecedores...</p>;

  return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-indigo-600">Fornecedores</h1>
          <Link
              to="/fornecedores/criar"
              className="rounded-lg bg-green-600 px-4 py-2 text-white font-medium hover:bg-green-700"
          >
            Criar Fornecedor
          </Link>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <FaSearch className="text-gray-500" />
          <input
              type="text"
              placeholder="Buscar por razão social, CNPJ, CEP ou categoria"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-gray-300 rounded px-3 py-1 w-full max-w-sm"
          />
        </div>

        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Razão Social
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                CNPJ
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                CEP
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Categoria
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Ações
              </th>
            </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
            {fornecedoresFiltrados.map((fornecedor) => (
                <tr key={fornecedor.id}>
                  <td className="px-4 py-2 text-sm text-gray-800">
                    {fornecedor.socialname}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-800">
                    {fornecedor.cnpj}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-800">
                    {fornecedor.cep}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-800">
                    {fornecedor.category?.name || "Sem categoria"}
                  </td>
                  <td className="px-4 py-2 flex gap-3 items-center">
                    <button
                        onClick={() => handleEdit(fornecedor)}
                        className="text-indigo-600 hover:text-indigo-800"
                        title="Editar"
                    >
                      <FaEdit />
                    </button>
                    <button
                        onClick={() => excluirFornecedor(fornecedor.id)}
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
      </div>
  );
};

export default FornecedoresIndex;