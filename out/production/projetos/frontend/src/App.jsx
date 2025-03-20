import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import RoutesComponent from "./routes";
import Sidebar from "./components/Sidebar";

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
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
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
  setIsDesktopCollapsed
}) => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/login' || location.pathname === '/') {
      setIsMobileMenuOpen(false);
      setIsDesktopCollapsed(true);
    }
  }, [location]);

  const showSidebar = location.pathname !== '/login' && location.pathname !== '/' && location.pathname !== '/esquecisenha';

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1 relative">
        {/* Renderiza a Sidebar em todas as rotas, exceto login */}
        {showSidebar && (
          <div className={`fixed inset-y-0 z-30 transform transition-all duration-300
            ${isMobile ? 'w-16' : isDesktopCollapsed ? 'w-16' : 'w-64'}
            ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
            md:translate-x-0 md:relative`}>
            <Sidebar 
              isCompact={isMobile ? false : isDesktopCollapsed}
              onToggle={() => setIsDesktopCollapsed(!isDesktopCollapsed)}
            />
          </div>
        )}

        {/* Overlay para mobile */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 z-20 bg-black/50 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Conteúdo principal */}
        <main className={`flex-1 min-w-0 transition-all duration-300
          ${isMobileMenuOpen ? 'ml-16' : ''}
          md:ml-${isDesktopCollapsed ? '16' : '64'}`}>
          <div className="p-4 sm:p-6 lg:p-8">
            <RoutesComponent />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
