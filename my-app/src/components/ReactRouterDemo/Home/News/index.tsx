import React, { useEffect } from 'react';
import styles from './index.module.less';

const News = (props) => {

  // useEffect(() => {
  //   setTimeout(() => {
  //     props.history.push(`/home/message/detail`);
  //   },2000);
  // }, []);

  return (
    <ul className={styles.wrap}>
      <li>这是News组件001</li>
      <li>这是News组件002</li>
      <li>这是News组件003</li>
      <li>这是News组件004</li>
      <li>这是News组件005</li>
      <li>这是News组件006</li>
    </ul>
  )
}

export default News;
