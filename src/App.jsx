import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { Button } from './components/Button'
import { PlusCircle } from 'phosphor-react'
import { Empty } from './components/Empty'
import { HeaderList } from './components/HeaderList'
import { TaskList } from './components/TaskList'
import { useState } from 'react'

export function App() {

  const [task, setTask] = useState([])
  const [inputValue, setInputValue] = useState('')
  

  const taskCounter = task.length

  
  const checkedTasksCounter = task.reduce((prevValue, currentTask) => {
    if (currentTask.isChecked) {
      return prevValue + 1
    }

    return prevValue
  }, 0)

  function handleNewTask(){
    if(!inputValue){
      return 
    }

    const newTask = {
      id: parseInt(Math.random() * 10000),
      text: inputValue,
      isChecked: false,
    }

    setTask((state) => [...state, newTask])
    setInputValue('')
    
  }

  function handleRemoveTask(id){
    const removeTask = task.filter((task) => task.id !== id)

    setTask(removeTask)
  }

  function handleToggleTask({ id, value }){
    const updatedTasks = task.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value }
      }

      return { ...task }
    })

    setTask(updatedTasks)
    console.log(updatedTasks).isChecked
  }

  

  return (
    <main>
      <Header />
      <section className={styles.content}>
        <div className={styles.tarefaInput}>
          <Input  onChange={(event) => setInputValue(event.target.value)}
                  value={inputValue}
          />
          <Button onClick={handleNewTask} >
            Criar
            <PlusCircle size={16}/>
          </Button>
        </div>

        <div className={styles.listaTarefas}>
            <HeaderList 
              taskCounter={taskCounter}
              taskChecked={checkedTasksCounter}
            />

            {task.length > 0 ? (
            <div className={styles.listaTarefasItem}>
              {task.map((task) => ( 
              <TaskList 
                key={task.id}
                data={task}

                removeTask={handleRemoveTask}
                toggleTaskStatus={handleToggleTask}

              /> ))}
            </div>
          ) : (
            <Empty />
          )}
        </div>
        
      </section>
    </main>
  )
}

