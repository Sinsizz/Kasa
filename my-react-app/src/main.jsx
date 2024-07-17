import data from "./data.json";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import AboutPage from './pages/AboutPage.jsx';
import CardDetails from './pages/CardDetails.jsx';
import NotFound from './pages/NotFound';
import './index.css';
import Home from "./pages/Home.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/card/:cardId" element={<CardDetails data={data} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
