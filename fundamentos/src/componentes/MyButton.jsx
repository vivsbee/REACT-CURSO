// import styles from './MyButton.module.css'

export function MyButton({texto, func}){
// las props que recibe este componente son textos y funciones
    return (
        // <button className={styles.button}>Soy un botón</button>
        <button onClick={func}>{text || "Soy un botón"}</button>
    )
}
