import { Spin } from "antd";
import React from "react";
import styles from "./index.module.less";
import { Info } from "../type";

function List(props: Info) {
  const { users = [], isFirst = false, isLoading = false, err } = props;

  return (
    <>
    {err ? <h2 style={{color:'red'}}>{err}</h2> :
      <Spin spinning={isLoading}>
        <div className={styles.row}>
        {users.map((userObj)=>{
						return (
							<div key={userObj.id} className={styles.card}>
								<a rel="noreferrer" href={userObj.html_url} target="_blank">
									<img alt="head_portrait" src={userObj.avatar_url} style={{width:'100px'}}/>
								</a>
								<p className={styles.cardText}>{userObj.login}</p>
							</div>
						)
					})}
        </div>
      </Spin>}
    </>
  );
}

export default List;
