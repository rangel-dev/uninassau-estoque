import React from "react";

const FornecedoresEditar = () => {
  return (
    <div className="flex flex-col gap-8 p-4">
      {/* Cabeçalho com título e botões */}
      <div className="flex items-center gap-4">
        {/* Título */}
        <h1 className="text-lg font-medium">EDITAR FORNECEDOR</h1>

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
          href="/fornecedorindex"
        >
          Voltar
        </a>
      </div>

      {/* Formulários */}
      <div className="flex flex-col gap-8">
        {/* Seção Informações Básicas */}
        <div className="relative">
          <div className="absolute -top-3 left-4 bg-indigo-600 text-white text-sm font-medium px-3 py-1 rounded-sm">
            Informações Básicas
          </div>
          <form className="rounded-xl bg-white p-4 ring-3 ring-indigo-50 sm:p-6 lg:p-8">
            <div className="flex flex-wrap gap-6">
              {/* Campo Nome do Fornecedor */}
              <div className="w-64">
                <label
                  htmlFor="nome"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nome do Fornecedor
                </label>
                <input
                  type="text"
                  id="nome"
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600"
                  placeholder="Insira o nome"
                />
              </div>

              {/* Campo CNPJ */}
              <div className="w-64">
                <label
                  htmlFor="cnpj"
                  className="block text-sm font-medium text-gray-700"
                >
                  CNPJ
                </label>
                <input
                  type="text"
                  id="cnpj"
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600"
                  placeholder="Insira o CNPJ"
                />
              </div>

              {/* Campo Telefone */}
              <div className="w-64">
                <label
                  htmlFor="telefone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Telefone
                </label>
                <input
                  type="text"
                  id="telefone"
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600"
                  placeholder="(__)_____-____"
                />
              </div>

              {/* Campo Categoria */}
              <div className="w-64">
                <label
                  htmlFor="categoria"
                  className="block text-sm font-medium text-gray-700"
                >
                  Categoria
                </label>
                <input
                  type="text"
                  id="categoria"
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600"
                  placeholder="Insira a categoria"
                />
              </div>
            </div>
          </form>
        </div>

        {/* Seção Endereço */}
        <div className="relative">
          <div className="absolute -top-3 left-4 bg-indigo-600 text-white text-sm font-medium px-3 py-1 rounded-sm">
            Endereço
          </div>
          <form className="rounded-xl bg-white p-4 ring-3 ring-indigo-50 sm:p-6 lg:p-8">
            <div className="flex flex-wrap gap-6">
              {/* Campo Rua */}
              <div className="w-64">
                <label
                  htmlFor="rua"
                  className="block text-sm font-medium text-gray-700"
                >
                  Rua
                </label>
                <input
                  type="text"
                  id="rua"
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600"
                  placeholder="Insira a rua"
                />
              </div>

              {/* Campo Cidade */}
              <div className="w-64">
                <label
                  htmlFor="cidade"
                  className="block text-sm font-medium text-gray-700"
                >
                  Cidade
                </label>
                <input
                  type="text"
                  id="cidade"
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600"
                  placeholder="Insira a cidade"
                />
              </div>

              {/* Campo Estado */}
              <div className="w-64">
                <label
                  htmlFor="estado"
                  className="block text-sm font-medium text-gray-700"
                >
                  Estado
                </label>
                <input
                  type="text"
                  id="estado"
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600"
                  placeholder="Insira o estado"
                />
              </div>

              {/* Campo CEP */}
              <div className="w-64">
                <label
                  htmlFor="cep"
                  className="block text-sm font-medium text-gray-700"
                >
                  CEP
                </label>
                <input
                  type="text"
                  id="cep"
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600"
                  placeholder="_____-___"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FornecedoresEditar;
