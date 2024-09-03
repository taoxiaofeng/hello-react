import React from "react";
import { NavLink, Route, Routes, Navigate } from "react-router-dom";
import styles from "./index.module.less";
import Home from "./Home";
import About from "./About";
import Header from "../../components/Header";
// import { Navbar } from "react-bootstrap";
// import Test from './Test';

interface Props { }
const classNames = require('classnames');
function ReactRouterDemo(props: Props) {
  console.log(`route -- props -- `, props);
  return (
    <div className={classNames(styles.wrap, 'nav nav-tabs')}>
      {/* <header>React 路由测试</header> */}
      <Header />
      <section>
        <ul className={styles.left}>
          {/* 编写路由链接 */}
          <li className='nav-link'>
            <NavLink className='nav-link' to={`/about`}>About</NavLink>
          </li>
          <li className='nav-link'>
            <NavLink className='nav-link' to={`/home`}>Home</NavLink>
          </li>
        </ul>
        <div className={styles.right}>
          {/* 注册路由  */}
          <Routes>
            <Route path="/about" element={<About/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </section>
      <footer></footer>
    </div>
  );
}

export default ReactRouterDemo;
