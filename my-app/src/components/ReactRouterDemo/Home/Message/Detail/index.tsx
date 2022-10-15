import React from 'react';
import styles from './index.module.less';

const Detail = (props) => {
  console.log(`detail -- `, props)
  const { match: { params: { id, title } } } = props;
  const data = [{
    id: '01',
    content: '你好，中国！'
  }, {
    id: '02',
    content: '你好，北京！'
  }, {
    id: '03',
    content: '你好，杭州！'
  }, {
    id: '04',
    content: '你好，浙江！'
  }, {
    id: '05',
    content: '你好，上海！'
  }, {
    id: '06',
    content: '你好，世界！'
  }];
  return (
    <ul className={styles.wrap}>
      <li>ID：{id}</li>
      <li>TITLE：{title}</li>
      <li>CONTENT：{data.find(f => f.id === id)?.content}</li>
    </ul>
  )
}

export default Detail;
