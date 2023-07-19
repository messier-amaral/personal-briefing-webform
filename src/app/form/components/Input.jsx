'use client'

import styles from './styles/input.module.css'
import React, { useState } from 'react'

export default function Input ({ type = 'text', text, name, placeholder, value, ClassName = 'NormalInput', onChange}) {
    const [inputValue, setInputValue] = useState(value || '')

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputValue(value);

        if (onChange) {
            onChange(name, value);
        }
    };

    return (
        <div className={styles.FormControl}>
            <label htmlFor={name}>{text}</label>
            <input 
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                className={styles[ClassName]}
                defaultValue={inputValue}
                onChange={handleChange}
            />
        </div>
    )
}