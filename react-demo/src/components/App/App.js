import React from 'react';
import styles from './App.module.css'
import Hello from '../Hello';
function App() {
  const len = 20;
  return <ul className={styles.bg}>
    {Array(len).fill(0).map((_, i) => <li key={i}>{i}</li>)}
    <Hello />,
  </ul>
}

export default App;