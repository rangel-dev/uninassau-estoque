import React, { useState } from "react";
import Table from "../components/Table";
import CardStats from "../components/CardStats";
import ProductModal from "../components/ProductModal";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Dados de exemplo para a tabela
  const data = [
    { id: 1, nome: "Produto A", categoria: "Categoria 1", quantidade: 10 },
    { id: 2, nome: "Produto B", categoria: "Categoria 2", quantidade: 5 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-6">
        <header className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 sm:mb-0">
            Dashboard
          </h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 transition"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Adicionar Produto
          </button>
        </header>

        {/* Seção de gráficos */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <CardStats />
          <CardStats />
          <CardStats />
        </section>

        <section className="bg-white shadow rounded-lg p-4">
          <Table data={data} />
        </section>
      </div>

      <ProductModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default Dashboard;
