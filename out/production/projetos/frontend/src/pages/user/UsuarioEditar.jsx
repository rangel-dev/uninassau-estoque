import React from "react";

const UsuarioEditar = () => {
  return (
    <div className="flex flex-col gap-8 p-4">
      {/* Cabeçalho com título e botões */}
      <div className="flex items-center gap-4">
        {/* Título */}
        <h1 className="text-lg font-medium">EDITAR USUÁRIO</h1>

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
          href="/UsuarioIndex"
        >
          Voltar
        </a>
      </div>

      {/* Formulários */}
      <div className="flex flex-col gap-8">
        {/* Seção Dados Pessoais */}
        <div className="relative">
          <div className="absolute -top-3 left-4 bg-indigo-600 text-white text-sm font-medium px-3 py-1 rounded-sm">
            Dados Pessoais
          </div>
          <form className="rounded-xl bg-white p-4 ring-3 ring-indigo-50 sm:p-6 lg:p-8">
            <div className="flex flex-wrap gap-6">
              {/* Campo Nome */}
              <div className="w-64">
                {" "}
                {/* Largura fixa para o nome */}
                <label
                  htmlFor="nome"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600"
                  placeholder="Insira o nome"
                />
              </div>

              {/* Campo CPF */}
              <div className="w-64">
                <label
                  htmlFor="cpf"
                  className="block text-sm font-medium text-gray-700"
                >
                  CPF
                </label>
                <input
                  type="text"
                  id="cpf"
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600"
                  placeholder="Insira o CPF"
                />
              </div>

              {/* Campo Nascimento */}
              <div className="w-48">
                <label
                  htmlFor="birthdate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nascimento
                </label>
                <input
                  type="date"
                  id="birthdate"
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600"
                  placeholder="Data Nascimento"
                />
              </div>

              {/* Campo Contato */}
              <div className="w-64">
                <label
                  htmlFor="contact"
                  className="block text-sm font-medium text-gray-700"
                >
                  Contato
                </label>
                <input
                  type="text"
                  id="contact"
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600"
                  placeholder="(__)_____-____"
                />
              </div>
            </div>
          </form>
        </div>

        {/* Seção Informações */}
        <div className="relative">
          <div className="absolute -top-3 left-4 bg-indigo-600 text-white text-sm font-medium px-3 py-1 rounded-sm">
            Informações
          </div>
          <form className="rounded-xl bg-white p-4 ring-3 ring-indigo-50 sm:p-6 lg:p-8">
            <div className="flex flex-wrap gap-6">
              {/* Campo Email */}
              <div className="w-64">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600"
                  placeholder="Insira o Email"
                />
              </div>

              {/* Campo Senha */}
              <div className="w-64">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Senha
                </label>
                <input
                  type="text"
                  id="password"
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600"
                  placeholder="Insira a senha"
                />
              </div>

              {/* CampoFunção */}
              <div className="w-64">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Papel
                </label>
                <input
                  type="text"
                  id="function"
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600"
                  placeholder="Selecione a função"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UsuarioEditar;
