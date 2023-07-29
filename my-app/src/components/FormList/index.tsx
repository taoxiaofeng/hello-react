/**
 * 使用 antd 的 FormList 组件实现一个 递归组件
 */
import React, { useState, useCallback } from 'react';
import { Form, Input, Button, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

// react 函数
const FormList: React.FC<any> = () => {
  // 递归组件实现
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log('Received values of form:', values);
  }

  return (
    <Form form={form} name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
      <Form.List name="users">
        {(fields, { add, remove }) => {
          return (
            <div>
              {fields.map(field => (
                <Space key={field.key} style={{ display: 'flex', marginBottom: 8 }} align="start">
                  <Form.Item
                    {...field}
                    name={[field.name, 'name']}
                    fieldKey={[field.fieldKey, 'name']}
                    rules={[{ required: true, message: 'Missing first name' }]}
                  >
                    <Input placeholder="First Name" />
                  </Form.Item>
                  <Form.Item
                    {...field}
                    name={[field.name, 'email']}
                    fieldKey={[field.fieldKey, 'email']}
                    rules={[{ required: true, message: 'Missing last name' }]}
                  >
                    <Input placeholder="Last Name" />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(field.name)} />
                </Space>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                  Add field
                </Button>
              </Form.Item>
            </div>
          );
        }}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
