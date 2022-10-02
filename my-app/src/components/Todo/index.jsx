import React from 'react';
import styles from './index.module.less';
import Header from './Header';
import Footer from './Footer';

const Todo = () => {
    return (<div className={styles.todoContainer}>
        <div className={styles.todoWrap}>
            <Header />
            <Footer />
        </div>
    </div>);
}


export default Todo;