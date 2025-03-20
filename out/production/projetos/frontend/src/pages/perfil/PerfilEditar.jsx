import React from "react";

const PerfilEditar = () => {
  return (
    <div className="flex flex-col gap-8 p-4">
      {/* Cabeçalho com título e botões */}
      <div className="flex items-center gap-4">
        {/* Título */}
        <h1 className="text-lg font-medium">ADMINISTRAR PERMISSÃO</h1>

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
          href="/perfilindex"
        >
          Voltar
        </a>
      </div>

      {/* Formulários */}
      <div className="flex flex-col gap-8">
        {/* Seção Informações Básicas */}
        <div className="relative">
          <div className="absolute -top-3 left-4 bg-indigo-600 text-white text-sm font-medium px-3 py-1 rounded-sm">
            Permissão
          </div>
          <form className="rounded-xl bg-white p-4 ring-3 ring-indigo-50 sm:p-6 lg:p-8">
            <div className="flex flex-wrap gap-6">
              {/* Campo Nome do Fornecedor */}
              <div className="w-64">
                <label
                  htmlFor="nome"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nome do Usuário
                </label>
                <input
                  type="text"
                  id="nome"
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600"
                  placeholder="Nome"
                />
              </div>

              {/* Campo Permissão */}
              <div className="w-64">
                <label
                  htmlFor="cnpj"
                  className="block text-sm font-medium text-gray-700"
                >
                  Permissão
                </label>
                <input
                  type="text"
                  id="papel"
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600"
                  placeholder="Selecione a permissão"
                />
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PerfilEditar;
