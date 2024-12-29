import { Item } from './components/TaskList/Item';
import { Header } from './components/Header';
import { TaskHeader } from './components/TaskList/TaskHeader';
import { TaskInput } from './components/TaskInput';
import { Button } from './components/Button';
import { PlusCircle } from '@phosphor-icons/react';
import './global.css';
import styles from './App.module.css';
import { useState } from 'react';
import { EmptyItem } from './components/TaskList/EmptyItem';

export interface ITask {
  id: number
  text: string
  isChecked: boolean
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [inputValue, setInputValue] = useState('')

  function handleAddTask() {
    if (!inputValue) {
      return
    }

    const newTask: ITask = {
      id: new Date().getTime(),
      text: inputValue,
      isChecked: false,
    }

    setTasks((state) => [...state, newTask])
    setInputValue('')
  }

  function handleRemoveTask(id: number) {
    const filteredTaskList = tasks.filter((task) => task.id !== id)

    if(!confirm('Deseja realmente excluir esta tarefa?')) {
      return
    }

    setTasks(filteredTaskList)
  }

  function handleToggleTask({ id, value }: { id: number, value: boolean }) {
    const updatedTaskList = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isChecked: value
        };
      }
      return {...task};
    });

    setTasks(updatedTaskList);
  }

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.inputTask}>
        <TaskInput
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <Button onClick={handleAddTask}>
          Criar
          <PlusCircle size={16} color="#f2f2f2" weight="bold" />
        </Button>
      </div>

      <div className={styles.tasks}>
        <TaskHeader />

        {tasks.length > 0 ? (
          <div className={styles.taskList}>
            {tasks.map((task) => (
              <Item
                key={task.id}
                data={task}
                removeTask={handleRemoveTask}
                toggleTask={handleToggleTask}
              />
            ))}
          </div>
        ) : (
          <EmptyItem />
        )}
      </div>
    </div>
  )
}

export default App;