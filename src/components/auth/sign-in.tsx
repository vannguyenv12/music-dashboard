import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import {
  useSignIn,
  useSignInArtist,
} from '../../apis/react-query/auth-react-query';
import { useLocation } from 'react-router-dom';

type FieldType = {
  username: string;
  password: string;
};

const SignUp = () => {
  // React Router DOM
  const location = useLocation();
  // React Query
  const authMutation = useSignIn();
  const authArtistMutation = useSignInArtist();

  const isArtistPage = location.pathname === '/sign-in-artist';

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    if (isArtistPage) {
      authArtistMutation.mutate(values);
    } else {
      authMutation.mutate(values);
    }
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
