import type { FormProps } from 'antd';
import { Button, Form, Input, DatePicker } from 'antd';
import { IAlbumPayload } from '../../models/album-model';
import { useCreateAlbum } from '../../apis/react-query/album-react-query';
import { useNotificationContext } from '../../context/notification';
import { useQueryClient } from '@tanstack/react-query';

interface IAlbumFormProps {
  setOpen: (open: boolean) => void;
}

export default function AlbumForm({ setOpen }: IAlbumFormProps) {
  // Context
  const notification = useNotificationContext();
  // React Query
  const createAlbum = useCreateAlbum();
  const queryClient = useQueryClient();

  const onFinish: FormProps<IAlbumPayload>['onFinish'] = async (values) => {
    console.log('Success:', values);

    await createAlbum.mutateAsync(values);

    notification.success('Create album successfully!');

    // TODO: revalidate data
    queryClient.invalidateQueries({ queryKey: ['albums'] });

    setOpen(false);
  };

  return (
    <Form
      name='basic'
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
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
