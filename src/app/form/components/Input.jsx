import styles from './styles/input.module.css'

export default function Input ({ type = 'text', text, name, placeholder, value, ClassName = 'NormalInput'}) {

    return (
        <div className={styles.FormControl}>
            <label htmlFor={name}>{text}</label>
            <input 
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                className={styles[ClassName]}
                defaultValue={value}
            />
        </div>
    )
}