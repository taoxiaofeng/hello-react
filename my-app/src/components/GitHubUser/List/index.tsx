import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import styles from "./index.module.less";
import { Info } from "../type";
import PubSub from "pubsub-js";

function List(props: Info) {
  const [info, setInfo] = useState<Info>({
    //初始化状态
    users: [], //users初始值为数组
    isFirst: true, //是否为第一次打开页面
    isLoading: false, //标识是否处于加载中
    err: "", //存储请求相关的错误信息
  });

  const { users = [], isFirst = false, isLoading = false, err } = info;

  useEffect(() => {
    const subscribe = PubSub.subscribe("updateInfo", (_, stateObj) => {
      setInfo(stateObj);
    });
    return () => {
      PubSub.unsubscribe(subscribe);
    };
  }, []);

  return (
    <>
      {isFirst ? (
        <h2>欢迎使用，输入关键字，随后点击搜索</h2>
      ) : err ? (
        <h2 style={{ color: "red" }}>{err}</h2>
      ) : (
        <Spin spinning={isLoading}>
          <div className={styles.row}>
            {users.map((userObj) => {
              return (
                <div key={userObj.id} className={styles.card}>
                  <a rel="noreferrer" href={userObj.html_url} target="_blank">
                    <img
                      alt="head_portrait"
                      src={userObj.avatar_url}
                      style={{ width: "100px" }}
                    />
                  </a>
                  <p className={styles.cardText}>{userObj.login}</p>
                </div>
              );
            })}
          </div>
        </Spin>
      )}
    </>
  );
}

export default List;
