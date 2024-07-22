import data from "./data.json";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage.jsx';
import CardDetails from './pages/CardDetails.jsx';
import NotFound from './pages/NotFound';
import './index.css';
import Home from "./pages/Home.jsx";

// Rendu de l'application React
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Utilisation du routeur React Router */}
    <Router>
      {/* Définition des routes */}
      <Routes>
        {/* Route pour la page d'accueil */}
        <Route exact path="/" element={<Home />} />
        {/* Route pour la page "À propos" */}
        <Route path="/about" element={<AboutPage />} />
        {/* Route pour les détails d'une carte, avec un paramètre d'URL pour l'ID de la carte */}
        <Route path="/card/:cardId" element={<CardDetails data={data} />} />
        {/* Route pour gérer les URLs non reconnues (404) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
