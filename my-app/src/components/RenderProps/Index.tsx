/**
 * 插槽技术
 */
import React, { useState } from "react";
import styles from "./index.module.less";

const A = (props) => {
  const [name] = useState("tom");
  return (
    <div className={styles.a}>
      <h3>我是A组件</h3>
      {/* 预留位置 */}
      {props.render(name)}
    </div>
  );
};

const B = (props) => {
  return (
    <div className={styles.b}>
      <h3>我是B组件</h3>
      接收到的名称是{props.name}
    </div>
  );
};

const RenderProps = () => {
  return (
    <div className={styles.parent}>
      <h3>我是Parent组件</h3>
      <A render={(name) => <B name={name} />} />
    </div>
  );
};

export default RenderProps;
