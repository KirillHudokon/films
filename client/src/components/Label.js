import styles from '../styles/label.module.scss'
function Label({label,children}){
    return(
        <label className={styles.label}>
            {label}:  {children}
        </label>
    )
}

export default Label