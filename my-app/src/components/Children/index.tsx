import React, { useState, useEffect, useLayoutEffect } from "react";
import styles from "./index.module.less";
// import Grandson from '../Grandson/index';
import { Button } from 'antd';

const Children = () => {
  // console.log(`Children -- render`)
  const [state, setState] = useState(0);

  useEffect(() => {
    console.log(`state -- `, state)
  }, [state]);

  // useLayoutEffect(() => {
  //   console.log(`state -- `, state)
  // }, [state]);

  const changeState = () => {
    setState(state + 1);
    console.log(`state -- `, state)
  }
  return (
    <div className={styles.children}>
      <h1>这是子级组件</h1>
      {/* <Grandson /> */}
      <Button type="primary" onClick={changeState}>改变状态</Button>
    </div>
  );
};

export default Children;
