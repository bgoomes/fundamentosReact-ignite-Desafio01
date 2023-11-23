import styles from './Empty.module.css'

export function Empty(){
    return(
        <div className={styles.conteiner}>
            <img src="./Clipboard.png" alt="Icone lista vazia" />
            <p>
                <strong>Você ainda não tem tarefas cadastradas</strong> 
                Crie tarefas e organize seus itens a fazer
            </p>
        </div>
    )
}