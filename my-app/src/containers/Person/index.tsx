import { Button, Input } from 'antd';
import React from 'react'

const Person = () => {
  return (
    <div>
        <Input placeholder='输入名称' />
        <Input placeholder='输入年龄' />
        <Button type="primary">添加</Button>
        <ul>
          <li>名字1--年龄1</li>
          <li>名字2--年龄2</li>
          <li>名字3--年龄3</li>
        </ul>
    </div>
  )
}

export default Person;
