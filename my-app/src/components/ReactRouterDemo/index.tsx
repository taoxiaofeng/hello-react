import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import styles from "./index.module.less";
import Home from "./Home";
import About from "./About";
import Test from './Test';

interface Props { }

function ReactRouterDemo(props: Props) {
  console.log(`route -- props -- `, props);
  return (
    <div className={styles.wrap}>
      <header>React 路由测试</header>
      <section>
        <div className={styles.left}>
          {/* 编写路由链接 */}
          <NavLink className='nav-link' to={`/base/about`}>About</NavLink>
          <NavLink className='nav-link' to={`/base/home`}>Home</NavLink>
        </div>
        <div className={styles.right}>
          {/* 注册路由  */}
          <Switch>
            <Route path="/base/about" component={About} />
            <Route path="/base/home" component={Home} />
            <Route path="/base/home" component={Test} />
          </Switch>
        </div>
      </section>
      <footer></footer>
    </div>
  );
}

export default ReactRouterDemo;
