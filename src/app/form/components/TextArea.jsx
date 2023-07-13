import styles from './styles/textArea.module.css';

export default function TextArea({ name, text, placeholder, cols, rows, value= ''}) {
    return (
        <div className={styles.FormControl}>
            <label htmlFor={name}>{text}</label>
            <textarea 
                name={name} 
                id={name} 
                cols={cols} 
                rows={rows}
                defaultValue={value}
                placeholder={placeholder}
            ></textarea>
        </div>
    )
}