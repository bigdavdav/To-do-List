import styles from './TaskContainer.module.css'

export function TaskContainer() {
  return (
    <div className={styles.taskContainer}>
      <div className={styles.taskStatus}>
        <p className={styles.createdTasks}>Tarefas Criadas <span>5</span></p> 
        <p className={styles.completedTasks}>Concluidas <span>1 de 5</span></p>
      </div>
      <div className="tasks">

      </div>
    </div>
  )
}