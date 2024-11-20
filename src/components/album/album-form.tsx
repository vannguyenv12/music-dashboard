import type { FormProps } from 'antd';
import { Button, Form, Input, DatePicker } from 'antd';
import { IAlbumPayload } from '../../models/album-model';

const onFinish: FormProps<IAlbumPayload>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<IAlbumPayload>['onFinishFailed'] = (
  errorInfo
) => {
  console.log('Failed:', errorInfo);
};

export default function AlbumForm() {
  return (
    <Form
      name='basic'
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete='off'
    >
      <Form.Item<IAlbumPayload>
        label='Title'
        name='title'
        rules={[{ required: true, message: 'Please input your title!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<IAlbumPayload>
        label='Release Date'
        name='releaseDate'
        rules={[{ required: true, message: 'Please input your release date!' }]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item label={null}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
