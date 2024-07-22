import styles from './TaskCreate.module.css'
import { PlusCircle } from '@phosphor-icons/react'

export function TaskCreate() {
  return (
    <form className={styles.newTask}>
      <textarea className={styles.textarea} placeholder='Adicione uma nova tarefa' ></textarea>
      <button className={styles.button}>
        Criar 
        <PlusCircle size={16}/>
      </button>
    </form>
  )
}