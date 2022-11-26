import React, { useState, useEffect } from 'react';
import { Button, Form, Input, Select } from 'antd';
import { PlusOutlined, MinusOutlined, } from '@ant-design/icons';
import styles from './index.module.less';
// const myPrint = console.log;
const { Option } = Select;
const Count = (props) => {

  console.log(`Count -- `, props);
  console.log(`Count -- `, props.store.getState());

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

export default Count;
