// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Cadastro from './Cadastro';
import Navbar from './components/Navbar';
import './App.scss';

function App() {
  return (
    <div>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
      </div>
  );
}

export default App;