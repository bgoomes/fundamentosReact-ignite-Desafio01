import styles from './Button.module.css'
import {  } from 'phosphor-react'

export function Button({ children, ...rest}){
    return(
        <button className={styles.conteiner} {...rest}>
            {children}
        </button>
    )
}