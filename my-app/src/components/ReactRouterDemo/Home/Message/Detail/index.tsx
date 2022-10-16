import React from 'react';
import styles from './index.module.less';
// import { parse } from 'qs';

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

const Detail = (props) => {
  console.log(`detail -- `, props)

  // 接收params参数
  // const { match: { params: { id, title } } } = props;

  // 接收search参数
  // const { search } = props.location;
  // const { id, title } = parse(search.slice(1));

  // 接收state参数
  const { id, title } = props.location.state || {};
  return (
    <div className={styles.wrap}>
      <ul>
        <li>
          {/*  This JSX tag's 'children' prop expects a single child of type 'ReactNode', but multiple children were provided. */}
          {/* https://bobbyhadz.com/blog/react-this-tags-children-prop-expects-single-child */}
          <>
            ID：{id}
          </>
        </li>
        <li>
          <>Title：{title}</>
        </li>
        <li>
          <>Content：{data.find(f => f.id === id)?.content}</>
        </li>
      </ul>
    </div>
  )
}
export default Detail;
