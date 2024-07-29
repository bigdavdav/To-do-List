import { ClipboardText } from '@phosphor-icons/react'

import styles from './EmptyContainer.module.css'

export function EmptyContainer() {
  return (
    <div className={styles.emptyMessage}>
      <ClipboardText size={64} />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}

/*
{ tasks.map(task => {
  return (
    <Task 
      key = { task }
      content = { task }
      deleteTask = { deleteTask }
      completeTask = { completeTask }
    />
  );
}) }
*/