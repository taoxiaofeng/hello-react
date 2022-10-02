import React, { useMemo } from 'react';
import { Button, Checkbox } from 'antd';
import styles from './index.module.less';

export default function Footer(props) {
  const { checkAllTodo, clearAllDone, todos = [] } = props;

  // 全选checkbox的回调
  const handleChangeAll = (event) =>{
    checkAllTodo(event.target.checked);
  }

  // 清除已完成的任务回调
  const handleClearAllDone = () => {
    clearAllDone();
  }

  // 已完成的个数
  const doneCount = useMemo(() => {
    return todos.reduce((pre,todo) => pre + (todo.done ? 1 : 0), 0);
  },[todos]);

  return (
    <div className={styles.todoFooter}>
      <Checkbox
      onChange={handleChangeAll}
      checked={doneCount === todos.length && todos.length !== 0 ? true : false}
      ></Checkbox>
      <span>
        <span> 已完成 {todos.length}</span> / 全部{todos.length}
      </span>
      <Button type="danger" onClick={handleClearAllDone}>清楚已完成任务</Button>
    </div>
  )

  
}
