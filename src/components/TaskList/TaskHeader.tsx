import styles from './TaskHeader.module.css';

export function TaskHeader() {
  return (
    <section>
      <div className={styles.tasksCreated}>
        <span>Tarefas criadas</span>
        <p>3</p>
      </div>
      <div className={styles.taskCounter}>
        <span>Concluídas</span>
        <p>0 de 3</p>
      </div>
    </section>
  )
}