import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import RoutesComponent from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiMenu, FiX } from "react-icons/fi";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setSidebarOpen(false); // Fecha se for desktop
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Main
        isMobile={isMobile}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
    </Router>
  );
};

const Main = ({
  isMobile,
  sidebarOpen,
  setSidebarOpen,
}) => {
  const location = useLocation();

  useEffect(() => {
    if (["/login", "/", "/esquecisenha"].includes(location.pathname)) {
      setSidebarOpen(false);
    }
  }, [location, setSidebarOpen]);

  const showSidebar = !["/login", "/", "/esquecisenha"].includes(location.pathname);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      {showSidebar && (
        <>
          {/* Mobile overlay */}
          {isMobile && sidebarOpen && (
            <div
              className="fixed inset-0 z-20 bg-black/50 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          <div
            className={`
              z-30
              ${isMobile ? "fixed inset-y-0 transform transition-transform duration-300 ease-in-out" : "lg:fixed lg:inset-y-0"}
              ${isMobile ? (sidebarOpen ? "translate-x-0" : "-translate-x-full") : ""}
            `}
          >
            <Sidebar
              isCompact={false} // sempre expandida
              onToggle={() => {}} // desabilitado
            />
          </div>
        </>
      )}

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile header */}
        {showSidebar && isMobile && (
          <header className="lg:hidden z-10 bg-white border-b border-gray-200">
            <div className="flex items-center justify-between px-4 py-3">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="text-gray-500 hover:text-gray-600 focus:outline-none"
                aria-label="Abrir menu"
              >
                {sidebarOpen ? (
                  <FiX className="size-6" />
                ) : (
                  <FiMenu className="size-6" />
                )}
              </button>
              <img
                src="/logo-white.png"
                alt="Logo"
                className="h-8 object-contain"
              />
              <div className="w-6" />
            </div>
          </header>
        )}

        {/* Content */}
        <main
          className={`flex-1 overflow-y-auto focus:outline-none transition-all duration-300 ${
            showSidebar && !isMobile ? "lg:ml-64" : ""
          }`}
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
