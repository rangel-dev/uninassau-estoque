import React, { useState } from "react";
import { uploadPlanilha } from "../../services/productService"; // Função de upload da planilha
import { FaEdit, FaSearch } from "react-icons/fa"; // Ícones de lápis e lupa

const EstoqueIndex = () => {
  const [file, setFile] = useState(null); // Estado para armazenar o arquivo selecionado

  // Função para lidar com a seleção de arquivo
  const handleFileChange = (event) => {
    setFile(event.target.files[0]); // Salva o arquivo selecionado no estado
  };

  // Função para realizar o upload
  const handleUpload = async () => {
    try {
      if (file) {
        const response = await uploadPlanilha(file); // Faz o upload utilizando o serviço
        console.log("Upload realizado com sucesso:", response);
        alert("Upload realizado com sucesso!");
      } else {
        alert("Por favor, selecione um arquivo antes de fazer o upload.");
      }
    } catch (error) {
      console.error("Erro ao enviar a planilha:", error);
      alert("Ocorreu um erro ao enviar a planilha. Verifique o console para mais detalhes.");
    }
  };

  return (
    <div>
      {/* Cabeçalho com título e botões */}
      <div className="flex items-center gap-4">
        {/* Título */}
        <h1 className="text-lg font-medium">GERENCIAR ESTOQUE</h1>

        {/* Botão de Adicionar Item */}
        <a
          className="inline-block min-w-[120px] px-6 py-3 text-center rounded-sm border border-indigo-600 bg-indigo-600 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden"
          href="/estoque/criar"
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

      {/* Slot para Upload de Arquivo */}
      <div className="mt-4">
        <h2 className="text-lg font-medium">Upload de Planilha</h2>
        <div className="flex items-center gap-2 mt-2">
          <input
            type="file"
            onChange={handleFileChange} // Captura o arquivo selecionado
            className="border border-gray-300 px-4 py-2 rounded-sm focus:ring-2 focus:ring-indigo-600"
          />
          <button
            onClick={handleUpload} // Realiza o upload ao clicar
            className="px-4 py-2 text-white bg-green-600 rounded-sm hover:bg-green-700 focus:ring-2 focus:ring-green-600"
          >
            Upload
          </button>
        </div>
      </div>

      {/* Campo de filtro */}
      <div className="mt-8">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Filtrar itens do estoque..."
            className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-l-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-r-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600">
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
                  Nome do Item
                </th>
                <th className="px-4 py-2 font-medium whitespace-nowrap text-white">
                  Quantidade
                </th>
                <th className="px-4 py-2 font-medium whitespace-nowrap text-white">
                  Categoria
                </th>
                <th className="px-4 py-2 font-medium whitespace-nowrap text-white">
                  Data de Entrada
                </th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                  Luvas Cirúrgicas
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">150</td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                  Equipamentos Médicos
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                  05/04/2025
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <FaEdit className="inline-block text-indigo-600" />
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

