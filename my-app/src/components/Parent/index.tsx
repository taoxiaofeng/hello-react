import React, { createContext, useCallback, useContext, useState } from "react";
import styles from "./index.module.less";
import Children from "../Children/index";

export const myContext = createContext({
  userName: "",
  age: null,
});
const { Provider } = myContext;
const Parent = () => {
  const [userName] = useState("张三");
  const [age] = useState(18);

  return (
    <div className={styles.parent}>
      <h1>这是父级组件</h1>
      <Provider value={{ userName, age }}>
        <Children />
      </Provider>
    </div>
  );
};

export default Parent;
