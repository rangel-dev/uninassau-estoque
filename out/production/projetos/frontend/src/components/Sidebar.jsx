import React, { useState, useEffect } from "react";
import {
  FiUsers,
  FiFolderPlus,
  FiFileText,
  FiBox,
  FiTruck,
  FiLogOut,
  FiChevronDown,
  FiChevronUp,
  FiMenu,
} from "react-icons/fi";

const Sidebar = ({ isCompact }) => {
  const usuarioLogado = {
    nome: "Eric Frusciante",
    id: "12345",
    avatar:
      "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80",
  };

  const [activeSubmenu, setActiveSubmenu] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSubmenu = (menu) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  const menuItems = [
    {
      title: "Cadastrar",
      icon: <FiUsers className="size-5" />,
      submenu: [
        { title: "Usuários", icon: <FiUsers className="size-5" />, href: "/user" },
        { title: "Categoria", icon: <FiFolderPlus className="size-5" />, href: "#" },
      ],
    },
    {
      title: "Relatórios",
      icon: <FiFileText className="size-5" />,
      submenu: [
        { title: "Estoques", icon: <FiBox className="size-5" />, href: "/relatorioestoque" },
        { title: "Pedidos", icon: <FiFileText className="size-5" />, href: "/relatoriopedidos" },
      ],
    },
    { title: "Estoque", icon: <FiBox className="size-5" />, href: "/estoqueindex" },
    { title: "Fornecedores", icon: <FiTruck className="size-5" />, href: "/fornecedores" },
  ];

  return (
    <div className={`h-full flex flex-col bg-white border-r border-gray-200 transition-all duration-300 ${isCompact ? "w-16" : "w-64"}`}>
      {/* Logo */}
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        {!isCompact ? (
          <img src="/logo-white.png" alt="Logo" className="h-8 object-contain" />
        ) : (
          <div className="w-8 h-8 flex items-center justify-center">
            <FiMenu className="text-gray-600 size-6" />
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              {item.submenu ? (
                <>
                  <button
                    onClick={() => toggleSubmenu(index)}
                    className={`w-full flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium ${
                      activeSubmenu === index
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      {!isCompact && <span>{item.title}</span>}
                    </div>
                    {!isCompact &&
                      (activeSubmenu === index ? (
                        <FiChevronUp className="size-4" />
                      ) : (
                        <FiChevronDown className="size-4" />
                      ))}
                  </button>

                  {activeSubmenu === index && (
                    <ul className="mt-1 ml-2 pl-2 space-y-1 border-l-2 border-gray-200">
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a
                            href={subItem.href}
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm ${
                              isCompact ? "justify-center" : ""
                            } text-gray-600 hover:bg-gray-100 hover:text-gray-900`}
                          >
                            {subItem.icon}
                            {!isCompact && <span>{subItem.title}</span>}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <a
                  href={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium ${
                    isCompact ? "justify-center" : ""
                  } text-gray-600 hover:bg-gray-100 hover:text-gray-900`}
                >
                  {item.icon}
                  {!isCompact && <span>{item.title}</span>}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* User Profile and Logout */}
      <div className="mt-auto">
        <div className="border-t border-gray-200 p-4">
          <a
            href="/perfil"
            className={`flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg ${
              isCompact ? "justify-center" : ""
            }`}
          >
            <img
              alt="Avatar"
              src={usuarioLogado.avatar}
              className="size-10 rounded-full object-cover"
            />
            {!isCompact && (
              <div>
                <p className="text-sm font-medium truncate">{usuarioLogado.nome}</p>
                <span className="text-xs text-gray-600">ID: {usuarioLogado.id}</span>
              </div>
            )}
          </a>
        </div>

        <div className="border-t border-gray-200 p-4">
          <form action="/login">
            <button
              type="submit"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium ${
                isCompact ? "justify-center" : ""
              } text-red-500 hover:bg-red-100 hover:text-red-700 w-full`}
            >
              <FiLogOut className="size-5" />
              {!isCompact && <span>Sair</span>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
