import React from 'react';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
// import { Navbar } from 'react-bootstrap';
import News from './News';
import Message from './Message';
import styles from './index.module.less';

export default function Home() {
  return (
    <div className={styles.wrap}>
      <h3>我是Home页面</h3>
      <div>
        <ul className="nav nav-tabs">
          <li className='nav-link' style={{ marginRight: 10 }}>
            {/* 路由是从自开始注册的理由逐层匹配 */}
            <NavLink replace to="/home/news">News</NavLink>
          </li>
          <li className='nav-link'>
            <NavLink replace to="/home/message">Message</NavLink>
          </li>
        </ul>
        {/* 注册路由 */}
        <Switch>
          <Route exact={true} path="/home/news" component={News} />
          <Route exact={false} path="/home/message" component={Message} />
          <Redirect to='/home/news' />
        </Switch>
      </div>
    </div>
  )
}
