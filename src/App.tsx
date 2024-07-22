import { Header } from './components/Header'
import { TaskCreate } from './components/TaskCreate'
import { TaskContainer } from './components/TaskContainer'

import styles from './App.module.css'
import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.mainApp}>
        <TaskCreate />
        <TaskContainer />
      </div>
    </div>
  )
}
