import React from 'react';
import { useNavigate } from 'react-router-dom'; // Atualizado para useNavigate
import styles from './Cadastro.module.scss';
import Input from '../../components/Input/Input';
import ConfirmButton from '../../components/buttons/ConfirmButton/ConfirmButton';
import CancelButton from '../../components/buttons/CancelButton/CancelButtons';

function Cadastro() {
  const navigate = useNavigate(); // Atualizado para useNavigate

  const handleBack = () => {
    navigate('/');
  };
  return (
    <div>
      <div className={styles.cadastro_container}>
        <form>
          <div className={styles.form_group}>
            <div className={styles.row}>
              <Input
                name={"Nome"}
                disabled={false}
                required={true}
                showIcon={false}
                type={"text"}
                onChange={(e) => e.target}
              />
              <Input
                name={"Sobrenome"}
                disabled={false}
                required={true}
                showIcon={false}
                type={"text"}
                onChange={(e) => e.target}
              />
            </div>
          </div>
          <div className={styles.button_group}>
            <ConfirmButton name={"Cadastrar"} />
            <CancelButton name={"Voltar"} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
