import React from "react";

const EstoqueCriar = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-10">
      {/* Cabeçalho com título e botões */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-3xl font-bold text-gray-800">Adicionar Item ao Estoque</h1>
        <div className="flex gap-3">
          <a
            href="#"
            className="px-5 py-2.5 rounded-xl bg-green-600 text-white font-medium hover:bg-green-700 transition shadow"
          >
            Salvar
          </a>
          <a
            href="/estoqueindex"
            className="px-5 py-2.5 rounded-xl bg-red-600 text-white font-medium hover:bg-red-700 transition shadow"
          >
            Voltar
          </a>
        </div>
      </div>

      {/* Formulário */}
      <div className="relative">
        {/* Cabeçalho da seção flutuante */}
        <div className="absolute -top-4 left-6 bg-indigo-600 text-white text-sm font-semibold px-3 py-1 rounded-xl shadow">
          Informações do Item
        </div>

        <form className="bg-white rounded-2xl shadow p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Campo Nome do Item */}
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                Nome do Item
              </label>
              <input
                type="text"
                id="nome"
                placeholder="Insira o nome do item"
                className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            {/* Campo Quantidade */}
            <div>
              <label htmlFor="quantidade" className="block text-sm font-medium text-gray-700 mb-1">
                Quantidade
              </label>
              <input
                type="number"
                id="quantidade"
                placeholder="Insira a quantidade"
                className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            {/* Campo Categoria */}
            <div>
              <label htmlFor="categoria" className="block text-sm font-medium text-gray-700 mb-1">
                Categoria
              </label>
              <input
                type="text"
                id="categoria"
                placeholder="Insira a categoria"
                className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            {/* Campo Data de Entrada */}
            <div>
              <label htmlFor="dataEntrada" className="block text-sm font-medium text-gray-700 mb-1">
                Data de Entrada
              </label>
              <input
                type="date"
                id="dataEntrada"
                className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EstoqueCriar;
