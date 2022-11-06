import React, { useState, useEffect } from 'react';
import { Button, Form, Input, Select } from 'antd';
import { PlusOutlined, MinusOutlined, } from '@ant-design/icons';
import styles from './index.module.less';
// 引入store, 用于获取redux中保存的状态
import store from '../../redux/store';
// 引入 actionCreator,  专门用于创建action 对象
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action';

const { Option } = Select;
const Count = (props) => {

  const [form] = Form.useForm();
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   form?.setFieldsValue({
  //     count
  //   })
  // }, [count]);


  // useEffect(() => {
  //   // 检测redux中状态的变化，只要变化，就调用render
  //   store.subscribe(() => {
  //     // console.log('订阅 -- ', store.getState())
  //     setCount(store.getState())
  //   });
  // }, []);

  // 加法
  const increment = () => {
    const { number } = form.getFieldsValue();
    // setCount(count + parseInt(number, 10));
    // store.dispatch({
    //   type: 'increment',
    //   data: number * 1
    // });
    store.dispatch(createIncrementAction(number * 1));
  }

  // 减法
  const decrement = () => {
    const { number } = form.getFieldsValue();
    // setCount(count - parseInt(number, 10));
    // store.dispatch({
    //   type: 'decrement',
    //   data: number * 1
    // });
    store.dispatch(createDecrementAction(number * 1));
  }

  // 奇数再加
  const incrementIfOdd = () => {
    const { number } = form.getFieldsValue();
    const count = store.getState();
    if (count % 2 !== 0) {
      // setCount(count + parseInt(number, 10));
      // store.dispatch({
      //   type: 'increment',
      //   data: number * 1
      // })
      store.dispatch(createIncrementAction(number * 1));
    }
  }

  // 异步加
  const incrementAsync = () => {
    const { number } = form.getFieldsValue();
    // setTimeout(() => {
      // setCount(count + parseInt(number, 10));
      // store.dispatch({
      //   type: 'increment',
      //   data: number * 1
      // })
      store.dispatch(createIncrementAsyncAction(number * 1, 500));
    // }, 500);
  }

  console.log(`store -- `, store)

  return (
    <div className={styles.container}>
      <Form form={form} labelCol={{ span: 2 }} wrapperCol={{ span: 22 }}>
        {/* <Form.Item label='当期求和为' name="count">
          <Input readOnly />
        </Form.Item> */}
        <h1 className={styles.title}>当前求和为：{store.getState()}</h1>
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
