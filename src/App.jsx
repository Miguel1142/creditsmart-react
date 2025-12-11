import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './pages/Home.jsx';
import Simulator from './pages/simulador';
import Request from './pages/solicitar.jsx';
import './App.css';
import Solicitudes from "./pages/solicitudes.jsx";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/simulador" element={<Simulator />} />
          <Route path="/solicitar" element={<Request />} />
          <Route path="/solicitudes" element={<Solicitudes />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;