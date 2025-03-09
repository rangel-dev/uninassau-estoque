import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesComponent from "./routes";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <RoutesComponent />
      <Footer />
    </Router>
  );
};

export default App;
