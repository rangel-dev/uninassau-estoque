import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesComponent from './routes';
import Navbar from './components/Navbar'

const App = () => {
  return (
    <Router>
            <Navbar/>

      <RoutesComponent />
    </Router>
  );
};

export default App;