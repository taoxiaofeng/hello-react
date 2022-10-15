import React from "react";
import { NavLink, Route, Switch, Redirect } from "react-router-dom";
import styles from "./index.module.less";
import Home from "./Home";
import About from "./About";
// import { Navbar } from "react-bootstrap";
// import Test from './Test';

interface Props { }
const classNames = require('classnames');
function ReactRouterDemo(props: Props) {
  console.log(`route -- props -- `, props);
  return (
    <div className={classNames(styles.wrap, 'nav nav-tabs')}>
      <header>React 路由测试</header>
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
          <Switch>
            <Route exact={true} path="/about" component={About} />
            {/* exact = true --> 如果开启严格匹配， 就会导致home下面的子路由都无法访问。 */}
            <Route exact={false} path="/home" component={Home} />
            <Redirect to='/about' />
          </Switch>
        </div>
      </section>
      <footer></footer>
    </div>
  );
}

export default ReactRouterDemo;
