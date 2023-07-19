'use client'

import React, { useState } from 'react'  
import styles from './styles/textArea.module.css';

export default function TextArea({ name, text, placeholder, cols, rows, value, onChange}) {
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
            <textarea 
                name={name} 
                id={name} 
                cols={cols} 
                rows={rows}
                defaultValue={inputValue}
                placeholder={placeholder}
                onChange={handleChange}
            ></textarea>
        </div>
    )
}