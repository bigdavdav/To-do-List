import { Task } from './Task';
import { EmptyContainer } from './EmptyContainer'
import { ChangeEvent, FormEvent, useState } from 'react';
import { PlusCircle } from '@phosphor-icons/react';


import styles from './TaskContainer.module.css';

export function TaskContainer() {
  const [textareaContent, setTextareaContent] = useState('')
  
  const [tasks, setTasks] = useState([
    "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
  ])
  
  const [completedTasks, setCompletedTasks] = useState(0)
  
  function newTextareaContent(event: ChangeEvent<HTMLTextAreaElement>) {
    setTextareaContent(event.target.value);
  }
  
  function createNewTask(event: FormEvent) {
    event.preventDefault();
    
    setTasks([...tasks, textareaContent]);
    setTextareaContent('');
  }
  
  function completeTask(status: boolean){
    if (status == false) {
      setCompletedTasks(completedTasks + 1)
    } else if (status == true) {
      setCompletedTasks(completedTasks - 1)
    }
  }
  
  function deleteTask(taskToDelete: string, completion:boolean) {
    if (completion == true) {
      setCompletedTasks(completedTasks -1)
    }
    
    const newList = tasks.filter(task => {
      return task !== taskToDelete
    })
    
    setTasks(newList);
  }
  
  return (
    <div className={styles.taskContainer}>
      <form onSubmit={createNewTask} className={styles.newTask}>
        <textarea 
          className={styles.textarea} 
          placeholder='Adicione uma nova tarefa'
          value={textareaContent}
          onChange={newTextareaContent}
        />
        
        <button type='submit' className={styles.submitTask}>
          Criar 
          <PlusCircle size={16}/>
        </button>
      </form>
      
      <div className={styles.taskStatus}>
        <p className={styles.createdTasks}>Tarefas Criadas <span>{tasks.length}</span></p> 
        <p className={styles.completedTasks}>Concluidas <span>{completedTasks} de {tasks.length}</span></p>
      </div>
      
      <div className={styles.tasks}>
        <EmptyContainer />
      </div>
      
    </div>
  );
}