import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
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
      <div className="min-h-screen flex flex-col">
        <div className="flex flex-1 relative">
          <Sidebar />

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
    </Router>
  );
};

export default App;