// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss'; // Importa o arquivo SCSS

function Home() {
  return (
    <div>
      <h2>Página Inicial</h2>
      <Link to="/cadastro">Ir para Cadastro</Link>
    </div>
  );
}

export default Home;
