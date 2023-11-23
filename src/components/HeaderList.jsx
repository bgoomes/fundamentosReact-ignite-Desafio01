import styles from './HeaderList.module.css'


export function HeaderList({ taskCounter, toggleTaskStatus }){
    return(
        <div className={styles.container}>
            <section>
                <p>Tarefas criadas</p>
                <span>{taskCounter}</span>
            </section>

            <section>
                <p>Concluídas</p>
                <span>
                    {taskCounter === 0 ? taskCounter : `${toggleTaskStatus} de ${taskCounter}`}
                </span>
            </section>
        </div>
    )
}
