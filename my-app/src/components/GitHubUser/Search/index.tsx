import React, { useState } from "react";
// import axios from "axios";
import styles from "./index.module.less";
import { Button, Input } from "antd";
import PubSub from "pubsub-js";

interface Props {}

function Search(props: Props) {
  const [value, setValue] = useState("");

  const search = async () => {
    //发送请求前通知List更新状态
    // PubSub.publish("updateInfo", { isFirst: false, isLoading: true });
    // //发送网络请求
    // axios.get(`/api1/search/users?q=${value}`).then(
    //   (response) => {
    //     //请求成功后通知List更新状态
    //     PubSub.publish("updateInfo", {
    //       isLoading: false,
    //       users: response.data.items,
    //     });
    //   },
    //   (error) => {
    //     //请求失败后通知App更新状态
    //     PubSub.publish("updateInfo", { isLoading: false, err: error.message });
    //   }
    // );

    // 发送网络请求 --- 使用fetch发送
    try {
      const res = await fetch(`/api1/search/users?q=${value}`);
      const data = await res.json();
      console.log(`data -- `, data);
      PubSub.publish("updateInfo", {
        isLoading: false,
        users: data.items,
      });
    } catch (error) {
      PubSub.publish("updateInfo", { isLoading: false, err: error.message });
    }
  };

  return (
    <section className={styles.jumbotron}>
      <h3 className={styles.jumbotronHeading}>搜索GitHub用户</h3>
      <div className={styles.wrap}>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="请输入关键词点击搜索"
        />
        <Button onClick={search} type="default">
          搜索
        </Button>
      </div>
    </section>
  );
}

export default Search;
