import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
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
            <NavLink to="/home/news">News</NavLink>
          </li>
          <li className='nav-link'>
            <NavLink to="/home/message">Message</NavLink>
          </li>
        </ul>
        {/* 注册路由 */}
        <Routes>
          <Route path="/home/news" element={<News />} />
          <Route path="/home/message" element={<Message />} />
        </Routes>
      </div>
    </div>
  )
}
