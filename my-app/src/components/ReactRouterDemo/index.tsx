import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import styles from "./index.module.less";
import Home from "./Home";
import About from "./About";

interface Props {}

function ReactRouterDemo(props: Props) {
  console.log(`route -- props -- `, props);
  
  const about = <About />;
  return (
    <div className={styles.wrap}>
      <header>React 路由测试</header>
      <section>
        <div className={styles.left}>
          {/* 编写路由链接 */}
          <Link to={`/about`}>About</Link>
          <Link to={`/home`}>Home</Link>
        </div>
        <div className={styles.right}>
          {/* 注册路由  */}
          <Routes>
            <Route path="/about" element={about} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </section>
      <footer></footer>
    </div>
  );
}

export default ReactRouterDemo;
