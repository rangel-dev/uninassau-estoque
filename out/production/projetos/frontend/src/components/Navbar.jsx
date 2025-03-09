import React, { useState } from "react";
import { FiUser, FiSettings, FiLogOut } from "react-icons/fi"; // Importando ícones do Feather Icons

const Navbar = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  return (
    <header className="bg-blue-400">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="#">
              <span className="sr-only">Home</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            {/* Ícone de Perfil (visível em todas as telas) */}
            <div className="relative">
              <button
                type="button"
                className="overflow-hidden rounded-full border border-gray-300 shadow-inner cursor-pointer"
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
              >
                <span className="sr-only">Toggle profile menu</span>
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop"
                  alt="Profile"
                  className="size-10 object-cover"
                />
              </button>

              {/* Dropdown do Perfil (funciona em todas as telas) */}
              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md bg-white shadow-lg">
                  <div className="py-1">
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <FiUser className="mr-2" /> {/* Ícone de Perfil */}
                      Perfil
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <FiSettings className="mr-2" /> {/* Ícone de Configurações */}
                      Configurações
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      <FiLogOut className="mr-2" /> {/* Ícone de Sair */}
                      Sair
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;