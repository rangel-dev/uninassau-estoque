import React, { useState, useEffect } from "react";
import { 
  FaUser, FaBox, FaChartLine, FaTruck, FaBan, 
  FaCalendar, FaBars, FaTimes 
} from "react-icons/fa";
import { Tooltip } from 'react-tooltip';

const Sidebar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDesktopCollapsed, setIsDesktopCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar tamanho da tela e ajustar estados
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      if (mobile) {
        setIsDesktopCollapsed(false); // Reset estado desktop
      } else {
        setIsMobileOpen(false); // Fechar menu mobile
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Botão Mobile */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="fixed bottom-4 right-4 z-50 p-3 bg-blue-400 rounded-full shadow-lg md:hidden"
      >
        {isMobileOpen ? (
          <FaTimes className="text-white size-5" />
        ) : (
          <FaBars className="text-white size-5" />
        )}
      </button>

      {/* Sidebar */}
      <div className={`fixed h-screen bg-white border-r border-gray-100 z-40
        ${isMobile ? "w-16" : isDesktopCollapsed ? "w-16" : "w-64"} // Largura responsiva
        ${isMobileOpen ? "left-0" : "-left-full"} // Comportamento mobile
        md:left-0 // Sempre visível em desktop
        transition-all duration-300
      `}>
        <div className="flex flex-col h-full">
          {/* Cabeçalho */}
          <div className="p-4 border-b border-gray-100">
            <div className={`flex items-center ${
              isMobile || isDesktopCollapsed ? "justify-center" : "justify-between"
            }`}>
              {/* Logo */}
              {!(isMobile || isDesktopCollapsed) && (
                <span className="text-lg font-semibold text-gray-700">Logo</span>
              )}

              {/* Botão Desktop (só aparece em telas maiores) */}
              {!isMobile && (
                <button
                  onClick={() => setIsDesktopCollapsed(!isDesktopCollapsed)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                  data-tooltip-id="sidebar-tooltip"
                  data-tooltip-content={isDesktopCollapsed ? "Expandir" : "Recolher"}
                >
                  {isDesktopCollapsed ? (
                    <FaBars className="size-5" />
                  ) : (
                    <FaTimes className="size-5" />
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Itens do Menu */}
          <div className="flex-1 overflow-y-auto p-2">
            <ul className="space-y-1">
              {/* Item Cadastro */}
              <li>
                <a
                  href="#"
                  className="flex items-center rounded-lg p-2 hover:bg-gray-100"
                  data-tooltip-id="sidebar-tooltip"
                  data-tooltip-content="Cadastro"
                >
                  <FaUser className="text-gray-500 size-5" />
                  <span className={`ml-2 text-sm ${
                    isMobile || isDesktopCollapsed ? "hidden" : "block"
                  }`}>
                    Cadastro
                  </span>
                </a>
              </li>

              {/* Item Estoque com Submenu */}
              <li>
                <details className="group">
                  <summary className="flex items-center rounded-lg p-2 hover:bg-gray-100 cursor-pointer"
                    data-tooltip-id="sidebar-tooltip"
                    data-tooltip-content="Estoque"
                  >
                    <FaBox className="text-gray-500 size-5" />
                    <span className={`ml-2 text-sm flex-1 ${
                      isMobile || isDesktopCollapsed ? "hidden" : "block"
                    }`}>
                      Estoque
                    </span>
                    {!(isMobile || isDesktopCollapsed) && (
                      <svg
                        className="size-4 transition-transform group-open:rotate-180"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </summary>

                  {/* Submenu */}
                  {!(isMobile || isDesktopCollapsed) && (
                    <ul className="ml-8 mt-1 space-y-1 border-l-2 border-gray-100 pl-2">
                      <li>
                        <a href="#" className="flex items-center p-2 text-sm hover:bg-gray-100 rounded-lg">
                          <FaBan className="mr-2 text-gray-500 size-4" />
                          Banned Users
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center p-2 text-sm hover:bg-gray-100 rounded-lg">
                          <FaCalendar className="mr-2 text-gray-500 size-4" />
                          Calendar
                        </a>
                      </li>
                    </ul>
                  )}
                </details>
              </li>

              {/* Demais Itens */}
              {[
                { icon: FaBox, text: "Produtos" },
                { icon: FaChartLine, text: "Relatórios" },
                { icon: FaTruck, text: "Fornecedores" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="flex items-center rounded-lg p-2 hover:bg-gray-100"
                    data-tooltip-id="sidebar-tooltip"
                    data-tooltip-content={item.text}
                  >
                    <item.icon className="text-gray-500 size-5" />
                    <span className={`ml-2 text-sm ${
                      isMobile || isDesktopCollapsed ? "hidden" : "block"
                    }`}>
                      {item.text}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Componente de Tooltip */}
      <Tooltip
        id="sidebar-tooltip"
        className="!text-xs !bg-gray-800 !text-white !px-2 !py-1 !rounded-md"
        place="right"
        effect="solid"
        delayShow={300}
        noArrow={true}
      />
    </>
  );
};

export default Sidebar;