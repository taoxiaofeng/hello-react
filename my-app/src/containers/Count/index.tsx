
import React, { useState, useEffect } from 'react';
// 引入action
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/actions/count';
// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux';
import { Button, Form , Select } from 'antd';
import { PlusOutlined, MinusOutlined, } from '@ant-design/icons';
import styles from './index.module.less';
// const myPrint = console.log;
const { Option } = Select;
const Count = (props) => {

  const [form] = Form.useForm();

  // useEffect(() => {
  //   console.count()
  // }, [])

  // 加法
  const increment = () => {
    const { number } = form.getFieldsValue();
    props.jia(number * 1);
  }

  // 减法
  const decrement = () => {
    const { number } = form.getFieldsValue();
    props.jian(number * 1);
  }

  // 奇数再加
  const incrementIfOdd = () => {
    const { number } = form.getFieldsValue();
    if (props.count % 2 !== 0) {
      props.jia(number * 1);
    }
  }

  // 异步加
  const incrementAsync = () => {
    const { number } = form.getFieldsValue();
    props.jiaAsync(number * 1, 1000);
  }

  // myPrint('render...')
  // console.log(`render -- `)
  // setTimeout(() => {
  //   console.log(1)
  // }, 1)

  return (
    <div className={styles.container}>
      <Form form={form} labelCol={{ span: 2 }} wrapperCol={{ span: 22 }}>
        {/* <Form.Item label='当期求和为' name="count">
          <Input readOnly />
        </Form.Item> */}
        <h1 className={styles.title}>当前求和为：{props.count}</h1>
        <Form.Item label="number">
          <Form.Item noStyle name="number" initialValue={1}>
            <Select style={{ width: 120 }}>
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
              <Option value="4">4</Option>
            </Select>
          </Form.Item>
          <Form.Item noStyle>
            <Button onClick={increment} type="default" icon={<PlusOutlined />}></Button>
          </Form.Item>
          <Form.Item noStyle>
            <Button onClick={decrement} type="default" icon={<MinusOutlined />}></Button>
          </Form.Item>
          <Form.Item noStyle>
            <Button onClick={incrementIfOdd} type="default">当前求和为奇数再加</Button>
          </Form.Item>
          <Form.Item noStyle>
            <Button onClick={incrementAsync} type="default">异步加</Button>
          </Form.Item>
        </Form.Item>
      </Form>
    </div>
  )
}

// 使用connect()()创建并暴露一个Count的容器组件
/**
 * 容器组件会传给UI组件
 * (1):redux中所保存的状态
 * (2):用于操作状态的方法
 */
export default connect(
  state => ({ count: state }),  // 映射状态
  // (dispatch:any) => ({
  //   jia: value => dispatch(createIncrementAction(value)),
  //   jian: value => dispatch(createDecrementAction(value)),
  //   jiaAsync: (value, time) => dispatch(createIncrementAsyncAction(value, time)),
  // })

  // mapDispatchToProps的简写
  // 操作状态
  {
    jia: createIncrementAction,
    jian: createDecrementAction,
    jiaAsync: createIncrementAsyncAction
  }
)(Count);  // UI组件和容器组件建立联系  