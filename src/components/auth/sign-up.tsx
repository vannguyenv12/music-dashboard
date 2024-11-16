import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import { useNotificationContext } from '../../context/notification';

type FieldType = {
  username?: string;
  name?: string;
  password?: string;
};

const SignUp = () => {
  const notification = useNotificationContext();

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
    notification?.success({ message: 'Sign up successfully!' });
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
        rules={[
          { required: true, message: 'Please input your name!' },
          { min: 6, message: 'Name must be at least 6 characters' },
        ]}
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
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUp;
