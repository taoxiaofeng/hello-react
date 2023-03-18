import React, { useState } from "react";
import styles from "./index.module.less";
import Grandson from '../Grandson/index';

const Children = () => {
  return (
    <div className={styles.children}>
      <h1>这是子级组件</h1>
      <Grandson />
    </div>
  );
};

export default Children;
