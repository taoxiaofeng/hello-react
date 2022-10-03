import React, { useState } from "react";
// import axios from "axios";
import styles from "./index.module.less";
import { Button, Input } from "antd";
import { Info } from '../type';

interface Props {
  updateAppState: (args: Info) => void;
}

function Search(props: Props) {
  const { updateAppState } = props;
  const [value, setValue] = useState("");

  const search = () => {
    //发送请求前通知App更新状态
    updateAppState({
      isFirst: true,
      isLoading: true,
    });
    //发送网络请求
    // axios.get(`/api1/search/users?q=${value}`).then(
    //   (response) => {
    //     //请求成功后通知App更新状态
    //     updateAppState({ isLoading: false, users: response.data.items });
    //   },
    //   (error) => {
    //     //请求失败后通知App更新状态
    //     updateAppState({ isLoading: false, err: error.message });
    //   }
    // );
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
