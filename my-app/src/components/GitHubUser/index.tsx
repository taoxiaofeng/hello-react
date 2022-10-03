import React, { useState } from "react";
import styles from "./index.module.less";
import Search from "./Search";
import List from "./List";
import { Info } from "./type";

interface Props {}

function GitHubUser(props: Props) {

  const [info, setInfo] = useState<Info>({
    //初始化状态
    users: [], //users初始值为数组
    isFirst: true, //是否为第一次打开页面
    isLoading: false, //标识是否处于加载中
    err: "", //存储请求相关的错误信息
  });

  return (
    <>
      {/* <div>检索GitHub用户</div> */}
      <Search updateAppState={v => setInfo(v)} />
      <List {...info} />
    </>
  );
}

export default GitHubUser;
