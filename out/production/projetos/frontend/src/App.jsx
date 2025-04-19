// App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import RoutesComponent from "./routes";
import Sidebar from "./components/Sidebar";

// Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopCollapsed, setIsDesktopCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      <ToastContainer position="top-right" autoClose={3000} />
      <Main
        isMobile={isMobile}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        isDesktopCollapsed={isDesktopCollapsed}
        setIsDesktopCollapsed={setIsDesktopCollapsed}
      />
    </Router>
  );
};

const Main = ({
  isMobile,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  isDesktopCollapsed,
  setIsDesktopCollapsed,
}) => {
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === "/login" ||
      location.pathname === "/" ||
      location.pathname === "/esquecisenha"
    ) {
      setIsMobileMenuOpen(false);
      setIsDesktopCollapsed(true);
    }
  }, [location]);

  const showSidebar =
    location.pathname !== "/login" &&
    location.pathname !== "/" &&
    location.pathname !== "/esquecisenha";

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1 relative">
        {/* Botão Hamburguer */}
        {showSidebar && isMobile && (
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="fixed top-4 left-4 z-50 bg-white p-2 rounded-md shadow md:hidden"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        )}

        {/* Sidebar */}
        {showSidebar && (
          <div
            className={`fixed inset-y-0 z-30 transform transition-transform duration-300
              ${isMobile ? "w-64" : isDesktopCollapsed ? "w-16" : "w-64"}
              ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
              md:translate-x-0 md:relative`}
          >
            <Sidebar
              isCompact={isMobile ? false : isDesktopCollapsed}
              onToggle={() => setIsDesktopCollapsed(!isDesktopCollapsed)}
            />
          </div>
        )}

        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 z-20 bg-black/50 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Conteúdo principal */}
        <main
          className={`flex-1 min-w-0 transition-all duration-300 ${
            isMobileMenuOpen ? "ml-36" : ""
          } md:ml-${isDesktopCollapsed ? "1" : "1"}`}
        >
          <div className="p-4 sm:p-6 lg:p-8">
            <RoutesComponent />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
