import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import styles from './index.module.less';

export const Header = (props) => {

  const { addTodo } = props;

  // 键盘事件回调
  const handleKeyUp = (event) => {
    // 解构赋值获取keyCode, target
    const { keyCode, target }  = event;
    // 判断是否是回车按键
    if(keyCode !== 13) {
      return;
    }
    if(target.value.trim() === ''){
      alert('输入不能为空')
      return;
    }

    // 准备好一个todo对象
    const todoObj = { id: nanoid(), name: target.value, done: false };
    // 将todoObj传给App
    addTodo(todoObj);
    // 清空输入
    target.value = '';
  }
  return (
    <div className={styles.todoHeader}>
      <input 
      onKeyUp={handleKeyUp}
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
       />
    </div>
  )
}

export default Header;

// 对接收的props进行：类型、必要性限制
Header.prototype = {
  addTodo: PropTypes.func.isRequired
}
