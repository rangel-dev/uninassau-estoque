import React from 'react';

const Userperfil = () => {
  // Dados do usuário (pode ser substituído por dados dinâmicos)
  const user = {
    name: 'Erik Frusciante',
    email: 'erik.frusciante@gmail.com',
    avatarUrl: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-white text-gray-900">
      <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
        {/* Cabeçalho do Perfil */}
        <div className="bg-blue-600 p-6 rounded-t-lg">
          <div className="flex items-center space-x-4">
            <img
              className="h-20 w-20 rounded-full border-2 border-white"
              src={user.avatarUrl}
              alt={`${user.name}'s avatar`}
            />
            <div>
              <h1 className="text-2xl font-bold text-white">{user.name}</h1>
              <p className="text-gray-200">{user.email}</p>
            </div>
          </div>
        </div>

        {/* Informações do Perfil */}
        <div className="bg-gray-50 p-6 rounded-b-lg shadow-sm">
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

              {/* Campo Permissão */}
              <div className="w-64">
                <label
                  htmlFor="contact"
                  className="block text-sm font-medium text-gray-700"
                >
                  Permissão
                </label>
                <input
                  type="text"
                  id="contact"
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600"
                  placeholder="Permissão"
                />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Userperfil;