import React from 'react';
import styles from './index.module.less';
import { Header } from './Header';

const Todo = () => {
    return (<div className={styles.todoContainer}>
        <div className={styles.todoWrap}>
            <Header />
        </div>
    </div>);
}


export default Todo;