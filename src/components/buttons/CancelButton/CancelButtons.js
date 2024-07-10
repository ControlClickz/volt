import React, { useState, useEffect } from 'react';
import styles from './CancelButton.module.scss';

function CancelButton({ name, onClick }) {
    return (
        <button className={styles.CancelButton} onClick={onClick}>{name}</button>
    );
}

export default CancelButton;