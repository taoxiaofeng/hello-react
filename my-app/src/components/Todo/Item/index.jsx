import React from 'react';
import { Checkbox, Button } from 'antd';
import styles from './index.module.less';

function Item(props) {
  const { id, name, done, updateTodo, deleteTodo } = props;

  return (
    <li className={styles.item}>
      <Checkbox checked={done} onChange={(e) => updateTodo(id,e.target.checked)}>{name}</Checkbox>
      <Button type="danger" onClick={() => deleteTodo(id)}>删除</Button>
    </li>
  )
}

export default Item;