import { Button, Input } from 'antd';
import React, { useRef } from 'react'
import { nanoid } from 'nanoid'
import styles from './index.module.less'
import { connect } from 'react-redux'
import { createAddPersonAction } from '../../redux/actions/person'

const Person = (props) => {
  let nameNode = useRef(null);
  let ageNode = useRef(null);

  const addPerson = () => {
    const personObj = {
      id: nanoid(),
      name: nameNode.current.input.value,
      age: ageNode.current.input.value,
    }

    props.createPerson(personObj);
  }

  return (
    <div className={styles.container}>
      <h2>我是Person组件</h2>
      <div>Count组件求和为：{props.he}</div>
      <div>
        <Input placeholder='输入名称' ref={e => nameNode.current = e} style={{ width: 100 }} />
        <Input placeholder='输入年龄' ref={e => ageNode.current = e} style={{ width: 100 }} />
        <Button type="primary" onClick={addPerson}>添加</Button>
      </div>
      <ul>
        {props.yiduiren.map(item => <li key={item.id}>{item.name}--{item.age}</li>)}
      </ul>
    </div>
  )
}

export default connect(
  (state: any) => ({ yiduiren: state.rens, he:state.he }), // 映射状态
  { createPerson: createAddPersonAction } // 映射操作状态的方法
)(Person);
