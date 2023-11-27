import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomeScreen from '../componentes/welcome/WelcomeScreen'; // Importa el componente de bienvenida
import GamesRouter from "./GamesRouter";

export const MainAppRouter = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<WelcomeScreen />} /> {/* Ruta de bienvenida sin Navbar */}
          <Route path="/*" element={<GamesRouter />} /> {/* Ruta secundaria con Navbar */}
        </Routes>
      </div>
    </Router>
  );
};

