import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';
import styles from './index.module.less';


const List = (props) => {
  const { todos, updateTodo, deleteTodo } = props

  return (
    <ul className={styles.todoWrap}>
      {
        todos.map(todo => {
          return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        })
      }
    </ul>
  )
}

export default List;

List.propTypes = {
  todos: PropTypes.array.isRequired,
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
}


