import React from "react";
import { FaEdit, FaSearch } from "react-icons/fa"; // Ícones de lápis e lupa

const EstoqueIndex = () => {
  return (
    <div>
      {/* Cabeçalho com título e botões */}
      <div className="flex items-center gap-4">
        {/* Título */}
        <h1 className="text-lg font-medium">GERENCIAR ESTOQUE</h1>

        {/* Botão de Adicionar Item */}
        <a
          className="inline-block min-w-[120px] px-6 py-3 text-center rounded-sm border border-indigo-600 bg-indigo-600 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden"
          href="/estoquecriar"
        >
          Adicionar Item
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
      <div className="mt-8">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Filtrar itens do estoque..."
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
      <div className="mt-12">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr className="bg-blue-600">
                <th className="px-4 py-2 font-medium whitespace-nowrap text-white">Nome do Item</th>
                <th className="px-4 py-2 font-medium whitespace-nowrap text-white">Quantidade</th>
                <th className="px-4 py-2 font-medium whitespace-nowrap text-white">Categoria</th>
                <th className="px-4 py-2 font-medium whitespace-nowrap text-white">Data de Entrada</th>
                <th className="px-4 py-2"></th> {/* Coluna para o botão editar */}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">Luvas Cirúrgicas</td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">150</td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">Equipamentos Médicos</td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">05/04/2025</td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <a
                    href="/estoqueeditar"
                    className="inline-block rounded-sm bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    <FaEdit className="inline-block" /> {/* Ícone de lápis */}
                  </a>
                </td>
              </tr>

              <tr>
                <td className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">Máscaras Descartáveis</td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">300</td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">EPI</td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">03/04/2025</td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <a
                    href="/estoqueeditar"
                    className="inline-block rounded-sm bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    <FaEdit className="inline-block" /> {/* Ícone de lápis */}
                  </a>
                </td>
              </tr>

              <tr>
                <td className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">Álcool Gel 500ml</td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">100</td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">Higiene</td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">01/04/2025</td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <a
                    href="estoqueeditar"
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

export default EstoqueIndex;
