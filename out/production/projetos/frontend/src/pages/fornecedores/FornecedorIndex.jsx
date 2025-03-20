import React from "react";
import { FaEdit, FaSearch } from "react-icons/fa"; // Importando ícones de lápis e lupa

const FornecedoresIndex = () => {
  return (
    <div>

      <div className="flex items-center gap-4">
        {/* Título */}
        <h1 className="text-lg font-medium">CADASTRAR FORNECEDORES</h1>

        {/* Botão de Criar Fornecedor */}
        <a
          className="inline-block min-w-[120px] px-6 py-3 text-center rounded-sm border border-indigo-600 bg-indigo-600 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden"
          href="/fornecedorcriar"
        >
          Criar Fornecedor
        </a>

        {/* Botão de Voltar (vermelho) */}
        <a
          className="inline-block min-w-[120px] px-6 py-3 text-center rounded-sm border border-red-600 bg-red-600 text-sm font-medium text-white hover:bg-transparent hover:text-red-600 focus:ring-3 focus:outline-hidden"
          href="/dashboard"
        >
          Voltar
        </a>
      </div>

      {/* Campo de filtro */}
      <div className="mt-8"> {/* Aumentei o margin-top para 2rem */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Filtrar fornecedor..."
            className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-l-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          <button
            className="px-4 py-2 bg-indigo-600 text-white rounded-r-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          >
            <FaSearch className="inline-block" /> {/* Ícone de lupa */}
          </button>
        </div>
      </div>

      {/* Tabela */}
      <div className="mt-12"> {/* Aumentei o margin-top para 3rem */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr className="bg-blue-600"> {/* Fundo azul */}
                <th className="px-4 py-2 font-medium whitespace-nowrap text-white">Nome do Fornecedor</th>
                <th className="px-4 py-2 font-medium whitespace-nowrap text-white">CNPJ</th>
                <th className="px-4 py-2 font-medium whitespace-nowrap text-white">Contato</th>
                <th className="px-4 py-2 font-medium whitespace-nowrap text-white">Categoria</th>
                <th className="px-4 py-2"></th> {/* Coluna para o botão editar */}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">Saúde Total LTDA</td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">11.222.333/0001-44</td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">(11) 99999-1234</td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">Materiais Hospitalares</td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <a
                    href="/fornecedoreditar"
                    className="inline-block rounded-sm bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    <FaEdit className="inline-block" /> {/* Ícone de lápis */}
                  </a>
                </td>
              </tr>

              <tr>
                <td className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">Farmácia Educacional</td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">44.555.666/0001-88</td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">(21) 98888-5678</td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">Medicamentos</td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <a
                    href="/fornecedoreditar"
                    className="inline-block rounded-sm bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    <FaEdit className="inline-block" /> {/* Ícone de lápis */}
                  </a>
                </td>
              </tr>

              <tr>
                <td className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">MediPlus</td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">77.888.999/0001-55</td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">(31) 97777-4321</td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">Equipamentos Médicos</td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <a
                    href="/fornecedoreditar"
                    className="inline-block rounded-sm bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    <FaEdit className="inline-block" /> {/* Ícone de lápis */}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FornecedoresIndex;
