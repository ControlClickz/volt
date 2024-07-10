import React from 'react';

function Input(type, placeholder, name, value, disabled, required, showIcon, onChange) {
    return (
        <div>
            <label>{value}</label>
            <input type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                disabled={disabled}
                required={required}
                showIcon={showIcon}
                onChange={onChange}
            />
        </div>
    );
}

export default Input; 