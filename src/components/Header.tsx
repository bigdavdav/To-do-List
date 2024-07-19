import logo from '../assets/logo.png'

import styles from './Header.module.css'

export function Header() {
  return (
    <div className={styles.header}>
      <img 
        src={ logo } 
        alt="To-do text with rocket symbol next to it."
      />
    </div>
  )
}