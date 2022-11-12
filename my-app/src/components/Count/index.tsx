import React, { useState, useEffect } from 'react';
import { Button, Form, Input, Select } from 'antd';
import { PlusOutlined, MinusOutlined, } from '@ant-design/icons';
import styles from './index.module.less';

const { Option } = Select;
const Count = (props) => {

  console.log(`Count -- `, props);

  const [form] = Form.useForm();


  // 加法
  const increment = () => {
    const { number } = form.getFieldsValue();

  }

  // 减法
  const decrement = () => {
    const { number } = form.getFieldsValue();
   
  }

  // 奇数再加
  const incrementIfOdd = () => {
    const { number } = form.getFieldsValue();
    
  }

  // 异步加
  const incrementAsync = () => {
    const { number } = form.getFieldsValue();
   
  }

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
