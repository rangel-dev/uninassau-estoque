import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesComponent from './routes';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
        <div className="flex-1">
          <Navbar /> {/* Navbar no topo */}
          <RoutesComponent /> {/* Conteúdo das páginas */}
        </div>
    </Router>
  );
};

export default App;