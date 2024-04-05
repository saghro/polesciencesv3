import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Contact from './components/Contact';
import Registre from './components/Registre';
import Verification from './components/Verification';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/registre" element={<Registre />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
