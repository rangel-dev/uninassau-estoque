import React from "react";
import { FaUser, FaBox, FaChartLine, FaTruck, FaBan, FaCalendar } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="flex h-screen flex-col justify-between border-e border-gray-100 bg-white w-64"> {/* Defina uma largura fixa */}
      <div className="px-4 py-6">
        <ul className="mt-6 space-y-1">
          <li>
            <a
              href="#"
              className="flex items-center rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
            >
              <FaUser className="mr-2" />
              Cadastro
            </a>
          </li>

          <li>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                <span className="flex items-center text-sm font-medium">
                  <FaBox className="mr-2" />
                  Estoque
                </span>
                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>
              <ul className="mt-2 space-y-1 px-4">
                <li>
                  <a
                    href="#"
                    className="flex items-center rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    <FaBan className="mr-2" />
                    Banned Users
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    <FaCalendar className="mr-2" />
                    Calendar
                  </a>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <FaBox className="mr-2" />
              Produtos
            </a>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <FaChartLine className="mr-2" />
              Relatórios
            </a>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <FaTruck className="mr-2" />
              Fornecedores
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;