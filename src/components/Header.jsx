import styles from './Header.module.css'

export function Header(){
    return(
        <header className={styles.content}>
            <img src="/logos.svg" alt="App logo" />
        </header>
    )
}