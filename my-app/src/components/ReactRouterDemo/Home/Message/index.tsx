import React from 'react';
import { Divider } from 'antd';
import { Link, Route } from 'react-router-dom';
import styles from './index.module.less';
import Detail from './Detail';

const Message = () => {

  const messageArr = [{
    id: '01',
    title: '这是Message组件001'
  }, {
    id: '02',
    title: '这是Message组件002'
  }, {
    id: '03',
    title: '这是Message组件003'
  }, {
    id: '04',
    title: '这是Message组件004'
  }, {
    id: '05',
    title: '这是Message组件005'
  }, {
    id: '06',
    title: '这是Message组件006'
  }];
  return (
    <div className={styles.wrap}>
      <ul>
        {messageArr.map(item => <li key={item.id}>
          {/* 向路由组件传递params参数  */}
          {/* <Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link> */}
          {/* 向路由组件传递search 参数 */}
          <Link to={`/home/message/detail/?id=${item.id}&title=${item.title}`}>{item.title}</Link>
        </li>)}
      </ul>
      <Divider />
      {/* 注册路由 */}
      {/* 声明接收params参数 */}
      {/* <Route path='/home/message/detail/:id/:title' component={Detail}/> */}
      {/* search 参数无需声明接收，正常注册路由即可 */}
      <Route path='/home/message/detail' component={Detail}/>
    </div>
  )
}

export default Message;
