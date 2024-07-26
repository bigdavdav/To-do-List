import { useState } from 'react';
import { Check, Trash } from 'phosphor-react';

import styles from './Task.module.css';

interface TaskProps {
  content: string;
  deleteTask: (taskToDelete:string, completion:boolean) => void;
  completeTask: (taskToDelete:boolean) => void;
}

export function Task({content, deleteTask, completeTask}:TaskProps ) {
  const [completion, setCompletion] = useState(false)
  
  
  function handleCompletingAction() {
    completeTask(completion)
    if (completion == false) {
      setCompletion(true)
    } else if (completion == true) {
      setCompletion(false)
    }
  }
  
  function handleDeletingTask() {
    deleteTask(content, completion)
  }
  
  return (
    <div className={styles.task}>
      <main>
        <button>
          <Check onClick={handleCompletingAction}/>
        </button>
        
        <p className={completion == true ? styles.complete : styles.incomplete}>{ content }</p>
      </main>
      
      <button onClick={handleDeletingTask}>
        <Trash />
      </button>
    </div>
  );
}