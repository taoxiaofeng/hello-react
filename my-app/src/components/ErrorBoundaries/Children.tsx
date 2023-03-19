import React, { Component } from "react";

export default class Children extends Component {
  state = {
    // users: [
    //   {
    //     id: 1,
    //     name: "张三",
    //   },
    //   {
    //     id: 2,
    //     name: "李四",
    //   },
    //   {
    //     id: 3,
    //     name: "王五",
    //   },
    //   {
    //     id: 4,
    //     name: "赵六",
    //   },
    // ],
    users: '[{"id":1,"name":"张三"},{"id":2,"name":"李四"},{"id":3,"name":"王五"},{"id":4,"name":"赵六"}]'
  };

  render() {
    const { users = [] } = this.state;
    return (
      <div>
        <h2>我是子组件</h2>
        <ul>
        {users?.map((item, index) => (<li key={item.id}>{item.name}</li>))}
        </ul>
      </div>
    );
  }
}
