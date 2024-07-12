import data from "./data.json";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import AboutPage from './AboutPage';
import CardDetails from './CardDetails';
import NotFound from './NotFound';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/card/:cardId" element={<CardDetails data={data} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
