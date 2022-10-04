import React, { useState } from "react";
import styles from "./index.module.less";
import Search from "./Search";
import List from "./List";
import { Info } from "./type";

interface Props {}

function GitHubUser(props: Props) {


  return (
    <>
      {/* <div>检索GitHub用户</div> */}
      <Search />
      <List />
    </>
  );
}

export default GitHubUser;
