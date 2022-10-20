import { useState } from 'react';
import styles from './styles.module.css';

export default function ReactCounter(props) {
  let [count, setCount] = useState(0)
  
  function increase() {
    setCount(count + 1)
  }
  function decrease() {
    setCount(count - 1)
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.numbers}>{count}</div>
      <div className={styles.buttons}>
        <button onClick={increase}>⬆️</button>
        <button onClick={decrease}>⬇️</button>
      </div>
      <div>React</div>
    </div>
  )
}
