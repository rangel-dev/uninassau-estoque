import React from "react";
import {
  FiUsers,
  FiFolderPlus,
  FiFileText,
  FiBox,
  FiTruck,
  FiLogOut,
} from "react-icons/fi";

const Sidebar = () => {
  const usuarioLogado = {
    nome: "Eric Frusciante",
    id: "12345",
    avatar:
      "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80",
  };

  return (
    <div className="flex h-full flex-col justify-between border-e border-gray-100 bg-white">
      <div className="px-4 py-8">
        {/* Logo */}
        <div className="mx-6 mb-6">
          <img
            src="/logo-white.png"
            alt="Logo"
            className="h-auto w-full object-contain"
          />
        </div>

        {/* Navegação */}
        <ul className="space-y-1">
          <li>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900">
                <div className="flex items-center gap-2">
                  <FiUsers className="size-5" />
                  <span className="text-sm font-medium">Cadastrar</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 transition-transform duration-300 group-open:rotate-180"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </summary>
              <ul className="mt-2 space-y-1 px-2">
                <li>
                  <a
                    href="/usuariocriar"
                    className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  >
                    <FiUsers className="size-5" />
                    Usuários
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  >
                    <FiFolderPlus className="size-5" />
                    Categoria
                  </a>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900">
                <div className="flex items-center gap-2">
                  <FiFileText className="size-5" />
                  <span className="text-sm font-medium">Relatórios</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 transition-transform duration-300 group-open:rotate-180"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </summary>
              <ul className="mt-2 space-y-1 px-4">
                <li>
                  <a
                    href="/relatorioestoque"
                    className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  >
                    <FiBox className="size-5" />
                    Estoques
                  </a>
                </li>
                <li>
                  <a
                    href="/relatoriopedidos"
                    className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  >
                    <FiFileText className="size-5" />
                    Pedidos
                  </a>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <a
              href="/estoqueindex"
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            >
              <FiBox className="size-5" />
              Estoque
            </a>
          </li>

          <li>
            <a
              href="/fornecedorindex"
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            >
              <FiTruck className="size-5" />
              Fornecedores
            </a>
          </li>

          <li>
            <form action="/login">
              <button
                type="submit"
                className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-100 hover:text-red-700"
              >
                <FiLogOut className="size-5" />
                Sair
              </button>
            </form>
          </li>
        </ul>
      </div>

      {/* Perfil do usuário */}
      <div className="border-t border-gray-100 p-4">
        <a href="/Userperfil" className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded-lg">
          <img
            alt="Avatar"
            src={usuarioLogado.avatar}
            className="size-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium">{usuarioLogado.nome}</p>
            <span className="text-xs text-gray-600">ID: {usuarioLogado.id}</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
