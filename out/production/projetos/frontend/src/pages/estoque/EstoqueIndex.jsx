import React, { useState } from "react";
import { uploadPlanilha } from "../../services/productService";
import { Edit, Search } from "lucide-react";

const EstoqueIndex = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      if (file) {
        const response = await uploadPlanilha(file);
        console.log("Upload realizado com sucesso:", response);
        alert("Upload realizado com sucesso!");
      } else {
        alert("Por favor, selecione um arquivo antes de fazer o upload.");
      }
    } catch (error) {
      console.error("Erro ao enviar a planilha:", error);
      alert("Erro ao enviar a planilha. Veja o console para mais detalhes.");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Gerenciar Estoque</h1>

        <div className="flex gap-3">
          <a
            href="/estoque/criar"
            className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition shadow"
          >
            Adicionar Item
          </a>
          <a
            href="/dashboard"
            className="px-5 py-2.5 rounded-xl bg-red-600 text-white font-medium hover:bg-red-700 transition shadow"
          >
            Voltar
          </a>
        </div>
      </div>

      {/* Upload */}
      <div className="bg-white p-6 rounded-2xl shadow mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Upload de Planilha
        </h2>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <input
            type="file"
            onChange={handleFileChange}
            className="border border-gray-300 px-4 py-2 rounded-xl focus:ring-2 focus:ring-indigo-500 w-full sm:w-auto"
          />
          <button
            onClick={handleUpload}
            className="px-5 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
          >
            Upload
          </button>
        </div>
      </div>

      {/* Filtro */}
      <div className="flex items-center gap-3 mb-6 max-w-md">
        <Search className="text-gray-500" />
        <input
          type="text"
          placeholder="Filtrar itens do estoque..."
          className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
      </div>

      {/* Tabela */}
      <div className="overflow-x-auto rounded-2xl shadow border border-gray-200 bg-white">
        <table className="min-w-full divide-y divide-gray-100">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Nome do Item</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Quantidade</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Categoria</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Data de Entrada</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr className="hover:bg-gray-50 transition">
              <td className="px-6 py-3 text-sm text-gray-800">Luvas Cirúrgicas</td>
              <td className="px-6 py-3 text-sm text-gray-800">150</td>
              <td className="px-6 py-3 text-sm text-gray-800">Equipamentos Médicos</td>
              <td className="px-6 py-3 text-sm text-gray-800">05/04/2025</td>
              <td className="px-6 py-3">
                <button
                  title="Editar"
                  className="text-indigo-600 hover:text-indigo-800 transition"
                >
                  <Edit size={18} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EstoqueIndex;
