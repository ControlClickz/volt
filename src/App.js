// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home/Home';
import Cadastro from './routes/Cadastro/Cadastro';
import Navbar from './components/Navbar/Navbar';
import '../src/styles/App.scss';

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