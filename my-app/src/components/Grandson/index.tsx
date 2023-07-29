import React, { useContext, useState } from "react";
import styles from "./index.module.less";
import { myContext } from '../Parent/index'
const Grandson = () => {
  const values = useContext(myContext)
  console.log(`values -- `, values)
  return (
    <div className={styles.grandson}>
      <h1>这是孙级组件</h1>
      <h4>从Parent组件接收到的用户名是：{values?.userName}, 年龄是：{values?.age} </h4>
    </div>
  );
};

export default Grandson;
