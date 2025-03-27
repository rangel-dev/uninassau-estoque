import React, { useEffect, useState } from "react";
import { FaEdit, FaSearch } from "react-icons/fa"; // Ícones de edição e pesquisa

const UsuarioIndex = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const token = localStorage.getItem("token"); // Pegando o token JWT

  useEffect(() => {
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
          throw new Error("Erro ao buscar usuários");
        }

        const data = await response.json();
        setUsuarios(data); // Salvando os usuários no estado
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsuarios();
  }, [token]);

  // Formatar a data de nascimento para o formato dd/mm/yyyy
  const formatarData = (data) => {
    if (!data) return "";
    const [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
  };

  // Filtrar usuários pelo nome
  const usuariosFiltrados = usuarios.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <p>Carregando usuários...</p>;
  }

  return (
    <div>
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-medium">CADASTRAR USUÁRIOS</h1>

        <a
          className="inline-block min-w-[120px] px-6 py-3 text-center rounded-sm border border-indigo-600 bg-indigo-600 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600"
          href="/user/criar"
        >
          Criar Usuário
        </a>

        <a
          className="inline-block min-w-[120px] px-6 py-3 text-center rounded-sm border border-red-600 bg-red-600 text-sm font-medium text-white hover:bg-transparent hover:text-red-600"
          href="/dashboard"
        >
          Voltar
        </a>
      </div>

      {/* Campo de filtro */}
      <div className="mt-8">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Filtrar usuário..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-l-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-r-sm hover:bg-indigo-700">
            <FaSearch className="inline-block" />
          </button>
        </div>
      </div>

      {/* Tabela */}
      <div className="mt-12">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr className="bg-blue-600">
                <th className="px-4 py-2 font-medium whitespace-nowrap text-white">
                  Nome
                </th>
                <th className="px-4 py-2 font-medium whitespace-nowrap text-white">
                  Nascimento
                </th>
                <th className="px-4 py-2 font-medium whitespace-nowrap text-white">
                  CPF
                </th>
                <th className="px-4 py-2 font-medium whitespace-nowrap text-white">
                  Papel
                </th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {usuariosFiltrados.length > 0 ? (
                usuariosFiltrados.map((user) => (
                  <tr key={user.id}>
                    <td className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                      {user.name}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                      {formatarData(user.birthday)}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                      {user.cpf}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                      {user.userType}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      <a
                        href="#"
                        className="inline-block rounded-sm bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                      >
                        <FaEdit className="inline-block" />
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="px-4 py-2 text-center text-gray-700"
                  >
                    Nenhum usuário encontrado
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsuarioIndex;
