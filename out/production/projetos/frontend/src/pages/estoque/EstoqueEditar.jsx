import React from "react";

const EstoqueEditar = () => {
  return (
    <div className="flex flex-col gap-8 p-4">
      {/* Cabeçalho com título e botões */}
      <div className="flex items-center gap-4">
        {/* Título */}
        <h1 className="text-lg font-medium">EDITAR ITEM DO ESTOQUE</h1>

        {/* Botão de Salvar */}
        <a
          className="inline-block min-w-[120px] px-6 py-3 text-center rounded-sm border border-green-600 bg-green-600 text-sm font-medium text-white hover:bg-transparent hover:text-green-600 focus:ring-3 focus:outline-hidden"
          href="#"
        >
          Salvar
        </a>

        {/* Botão de Voltar (vermelho) */}
        <a
          className="inline-block min-w-[120px] px-6 py-3 text-center rounded-sm border border-red-600 bg-red-600 text-sm font-medium text-white hover:bg-transparent hover:text-red-600 focus:ring-3 focus:outline-hidden"
          href="/estoqueindex"
        >
          Voltar
        </a>
      </div>

      {/* Formulário para Editar Item */}
      <div className="flex flex-col gap-8">
        {/* Seção Informações do Item */}
        <div className="relative">
          <div className="absolute -top-3 left-4 bg-indigo-600 text-white text-sm font-medium px-3 py-1 rounded-sm">
            Informações do Item
          </div>
          <form className="rounded-xl bg-white p-4 ring-3 ring-indigo-50 sm:p-6 lg:p-8">
            <div className="flex flex-wrap gap-6">
              {/* Campo Nome do Item */}
              <div className="w-64">
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
                  Nome do Item
                </label>
                <input
                  type="text"
                  id="nome"
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600"
                  placeholder="Insira o nome do item"
                />
              </div>

              {/* Campo Quantidade */}
              <div className="w-64">
                <label htmlFor="quantidade" className="block text-sm font-medium text-gray-700">
                  Quantidade
                </label>
                <input
                  type="number"
                  id="quantidade"
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600"
                  placeholder="Insira a quantidade"
                />
              </div>

              {/* Campo Categoria */}
              <div className="w-64">
                <label htmlFor="categoria" className="block text-sm font-medium text-gray-700">
                  Categoria
                </label>
                <input
                  type="text"
                  id="categoria"
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600"
                  placeholder="Insira a categoria"
                />
              </div>

              {/* Campo Data de Entrada */}
              <div className="w-64">
                <label htmlFor="dataEntrada" className="block text-sm font-medium text-gray-700">
                  Data de Entrada
                </label>
                <input
                  type="date"
                  id="dataEntrada"
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EstoqueEditar;
