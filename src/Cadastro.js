import React from 'react';
import { useNavigate } from 'react-router-dom'; // Atualizado para useNavigate
import './Cadastro.scss';

function Cadastro() {
  const navigate = useNavigate(); // Atualizado para useNavigate

  const handleBack = () => {
    navigate('/');
  };
  return (
    <div>
      <div className="cadastro-container">
        <form>
          <div className="form-group">
            <div className="input-group">
              <label htmlFor="nome">Nome:</label>
              <input type="text" id="nome" name="nome" />
            </div>
            <div className="input-group">
              <label htmlFor="sobrenome">Sobrenome:</label>
              <input type="text" id="sobrenome" name="sobrenome" />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="input-group">
              <label htmlFor="cemail">Confirme seu Email:</label>
              <input type="email" id="cemail" name="cemail" />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <label htmlFor="dataN">Data de Nascimento:</label>
              <input type="date" id="dataN" name="dataN" />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <label htmlFor="senha">Senha:</label>
              <input type="password" id="senha" name="senha" />
            </div>
            <div className="input-group">
              <label htmlFor="csenha">Confirme sua Senha:</label>
              <input type="password" id="csenha" name="csenha" />
            </div>
          </div>
          <div className="button-group">
            <button type="submit">Cadastrar</button>
            <button type="button" className="back-button" onClick={handleBack}>Voltar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
