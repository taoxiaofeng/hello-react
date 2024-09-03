import React from 'react';
import { Button, Divider } from 'antd';
import { Link, Route, Routes } from 'react-router-dom';
import styles from './index.module.less';
import Detail from './Detail';

const Message = (props) => {

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

  const pushShow = ({ id, title }) => {
    // push 跳转 + 携带params参数
    // props.history.push(`/home/message/detail/${id}/${title}`);
    // push 跳转 + 携带search参数
    // props.history.push(`/home/message/detail/?id=${id}&title=${title}`);
    // push 跳转 + 携带state参数
    props.history.push(`/home/message/detail`, { id, title });
  }


  const replaceShow = ({ id, title }) => {
    // replace跳转 + 携带params参数
    // props.history.replace(`/home/message/detail/${id}/${title}`);
    // replace跳转 + 携带search参数
    // props.history.replace(`/home/message/detail/?id=${id}&title=${title}`);
    // replace跳转 + 携带state参数
    props.history.replace(`/home/message/detail`, { id, title });
  }

  const back = () => {
    props.history.goBack();
  }


  const forward = () => {
    props.history.goForward();
  }

  const go = () => {
    // 正数 1 前进   负数 -1 后退  
    props.history.go(-1);
  }

  return (
    <div className={styles.wrap}>
      <ul>
        {messageArr.map(item => <li key={item.id}>
          {/* 向路由组件传递params参数  */}
          {/* <Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link> */}
          {/* 向路由组件传递search 参数 */}
          {/* <Link to={`/home/message/detail/?id=${item.id}&title=${item.title}`}>{item.title}</Link> */}
          {/* 像路由组件传递state参数 */}
          <Link to={{ pathname: '/home/message/detail', search: `id=${item.id}&title=${item.title}` }}>{item.title}</Link>
          <Button type="default" onClick={() => pushShow(item)}>PUSH  查看</Button>
          <Button type="default" onClick={() => replaceShow(item)}>REPLACE  查看</Button>
        </li>)}
      </ul>
      <Divider />
      {/* 注册路由 */}
      {/* 声明接收params参数 */}
      {/* <Route path='/home/message/detail/:id/:title' component={Detail} /> */}
      {/* search 参数无需声明接收，正常注册路由即可 */}
      <Routes>
        <Route path='/home/message/detail' element={<Detail />} />
      </Routes>
      {/* state 参数无需声明接收，正常注册路由即可 */}
      {/* <Route path='/home/message/detail' component={Detail} /> */}
      <div style={{ display: 'flex' }}>
        <Button type="default" onClick={back} style={{ width: 100 }}>前进</Button>
        <Button type="default" onClick={forward} style={{ width: 100 }}>后退</Button>
        <Button type="default" onClick={go} style={{ width: 100 }}>GO</Button>
      </div>

    </div>
  )
}

export default Message;
