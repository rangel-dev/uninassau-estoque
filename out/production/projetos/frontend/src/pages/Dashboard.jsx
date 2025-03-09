import React, { useState } from "react";
import Table from "../components/Table";
import CardStats from "../components/CardStats";
import ProductModal from "../components/ProductModal";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tableData = [
    { id: 1, nome: "Produto A", categoria: "Categoria 1", quantidade: 10 },
    { id: 2, nome: "Produto B", categoria: "Categoria 2", quantidade: 5 },
  ];

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Dashboard
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Dados atualizados em tempo real
            </p>
          </div>
          
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Novo Produto
          </button>
        </div>

        {/* Key Metrics Section */}
        <section className="mb-8">
          <CardStats />
        </section>

        {/* Inventory Section */}
        <section className="rounded-xl bg-white shadow-sm">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                Controle de Estoque
              </h2>
              <span className="text-sm text-gray-500">
                Última atualização: 15/06/2023
              </span>
            </div>
          </div>
          <div className="overflow-x-auto p-4">
            <Table data={tableData} />
          </div>
        </section>

        <ProductModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </div>
    </div>
  );
};

export default Dashboard;