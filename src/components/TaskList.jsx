import { Check, Trash } from "phosphor-react";
import styles from './TaskList.module.css'

export function TaskList({ data, removeTask,toggleTaskStatus }){
    function handleRemoveTask(){
        removeTask(data.id)
    }

    function handleTaskToggle() {
        toggleTaskStatus({ id: data.id, value: !data.isChecked })
      }

    const checkboxCheckedClassname = data.isChecked
            ? styles['checkbox-checked']
            : styles['checkbox-unchecked']
    const paragraphCheckedClassname = data.isChecked
            ? styles['taskChecked']
            : ''
    return(
        <div className={styles.container}>
            <div className={styles.flex}>
                <label htmlFor="checkbox" onClick={handleTaskToggle}>
                    <input  type="checkbox" />
                    <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
                       {data.isChecked && <Check size={12} />}
                   </span>  

                    <p className={`${styles.p} ${paragraphCheckedClassname}`}>
                       {data.text}
                    </p>
                </label>
            </div>

            <button onClick={handleRemoveTask} >
                <Trash size={16}/>
            </button>
        </div>
    )
}