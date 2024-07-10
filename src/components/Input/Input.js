import React, { useState, useEffect } from 'react';
import styles from './Input.module.scss';

function Input({ type, placeholder, name, value, disabled, required, showIcon, onChange }) {
    const [isActive, setIsActive] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if (value) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [value]);

    const handleFocus = () => {
        setIsFocused(true);
        setIsActive(true);
    };

    const handleBlur = (e) => {
        setIsFocused(false);
        if (!e.target.value) {
            setIsActive(false);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const isEmpty = (value) => {
        return value === undefined || value === null || value.toString().trim() === '';
    };

    const classNames = [
        isActive ? styles.active : '',
        isFocused ? styles.activeFocus : '',
    ].filter(Boolean).join(' ');

    const handleInputChange = (e) => {
        const { value } = e.target;
        if (type === 'number' && isNaN(Number(value))) {
            return;
        }
        onChange(e);
    };

    return (
        <div className={styles.container}>
            <label className={`${styles.label} ${classNames}`}>{name}</label>
            <input
                className={`${styles.input} ${classNames}`}
                type={showPassword ? 'text' : type}
                placeholder={placeholder}
                name={name}
                value={value}
                disabled={disabled}
                required={required}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleInputChange}
            />
            {showIcon && (
                <button type="button" onClick={togglePasswordVisibility}>
                    {showPassword ? 'Hide' : 'Show'}
                </button>
            )}
        </div>
    );
}

export default Input;