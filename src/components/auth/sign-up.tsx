import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import { useNotificationContext } from '../../context/notification';
import { authApi } from '../../apis/auth-api';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

type FieldType = {
  username?: string;
  name?: string;
  password?: string;
};

const SignUp = () => {
  // Context
  const notification = useNotificationContext();
  // React Query
  const authMutation = useMutation({
    mutationFn: (data) => authApi.signUp(data),
    onError: (error) => {
      console.log('check error from sign up', error);
      notification?.error(error.message);
    },
  });

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    await authMutation.mutateAsync(values as any);

    notification?.success('Sign up success');
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (
    errorInfo
  ) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name='basic'
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete='off'
    >
      <Form.Item<FieldType>
        label='Name'
        name='name'
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label='Username'
        name='username'
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label='Password'
        name='password'
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item label={null}>
        <Button
          type='primary'
          htmlType='submit'
          disabled={authMutation.isPending}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUp;
