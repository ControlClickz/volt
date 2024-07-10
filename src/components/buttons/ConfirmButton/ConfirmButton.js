import React, { useState, useEffect } from 'react';
import styles from './ConfirmButton.module.scss';

function ConfirmButton({ name, onClick }) {
    return (
        <button className={styles.ConfirmButton} onClick={onClick}>{name}</button>
    );
}

export default ConfirmButton;