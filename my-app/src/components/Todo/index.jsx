import React, { useState } from 'react';
import styles from './index.module.less';
import Header from './Header';
import List from './List';
import Footer from './Footer';

const Todo = () => {
  // 状态在哪里，操作状态的方法就在哪里

  // 初始状态
  const initTodos = [
    { id: '001', name: '吃饭', done: true },
    { id: '002', name: '睡觉', done: true },
    { id: '003', name: '打代码', done: false },
    { id: '004', name: '逛街', done: false }
  ];
  const [todos, setTodos] = useState(initTodos);

  return (<div className={styles.todoContainer}>
    <div className={styles.todoWrap}>
      <Header addTodo={v => setTodos([v, ...todos])} />
      <List
        todos={todos}
        updateTodo={(id, done) => {
          setTodos(() => {
            return todos.map((todoObj) => {
              if (todoObj.id === id) return { ...todoObj, done }
              else return todoObj
            })
          })
        }}
        deleteTodo={(id) => setTodos(() => {
          return todos.filter((todoObj) => {
            return todoObj.id !== id
          })
        })} />
      <Footer
        todos={todos}
        checkAllTodo={(done) => {
          setTodos(() => {
            return todos.map((todoObj) => {
              return { ...todoObj, done }
            })
          })
        }}
        clearAllDone={() => {
          setTodos(() => {
            return todos.filter((todoObj) => {
              return !todoObj.done
            })
          });
        }}
      />
    </div>
  </div>);
}


export default Todo;