import { Button, Form, Input } from 'antd';
import React, { FC } from 'react';
import { useAppDispatch } from '../../../store/hooks';
import { registration } from '../../../store/thunks';

const RegistrationForm: FC = () => {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  type Values = {
    name: string;
    email: string;
    password: string;
  }

  const onFinish = (values: Values) => {
    dispatch(registration(values));
  };

  const onFinishFailed = () => {
    console.log('Registration fails, please try again');
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 5 }}
      wrapperCol={{ span: 10 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <h3>Registration</h3>
      <Form.Item
        label="Username"
        name="name"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{
          required: true, message: 'Please input your password!', type: 'string', min: 8,
        }]}
        help="Should be at least 8 symbols"
      >
        <Input.Password />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegistrationForm;
