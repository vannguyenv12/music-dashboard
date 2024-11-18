import { useQueryClient } from '@tanstack/react-query';
import { DatePicker, Form, FormInstance, FormProps, Input, Select } from 'antd';
import { useGetGenres } from '../../apis/react-query/genre-react-query';
import { useCreateSong } from '../../apis/react-query/song-react-query';
import { useGetCurrentUser } from '../../apis/react-query/user-react-query';
import { useNotificationContext } from '../../context/notification';
import { ISongPayload } from '../../models/song-model';
import { formatDateForPayload } from '../../utils/date-util';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

interface ISongFormProps {
  form: FormInstance<ISongPayload>;
  setOpen: (open: boolean) => void;
}

export default function SongForm({ form, setOpen }: ISongFormProps) {
  // React Context
  const notification = useNotificationContext();
  // React Query
  const queryClient = useQueryClient();
  const { data: genres, isLoading } = useGetGenres();
  const createSong = useCreateSong();
  const { data: me } = useGetCurrentUser();

  const artistId = me?.data._id || '';

  const options = genres?.data.map((genre) => ({
    value: genre.name,
    label: genre.name,
  }));

  const handleFinish: FormProps<ISongPayload>['onFinish'] = async (values) => {
    const data = {
      ...values,
      artist: artistId,
      releaseDate: formatDateForPayload(values.releaseDate),
    };
    await createSong.mutateAsync(data);
    notification.success('Create song successfully!');
    setOpen(false);

    queryClient.invalidateQueries({ queryKey: ['songs'] });
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      variant={'filled'}
      style={{ maxWidth: 600, margin: '0 auto' }}
      initialValues={{ variant: 'filled' }}
      onFinish={handleFinish}
    >
      <Form.Item<ISongPayload>
        label='Title'
        name='title'
        rules={[{ required: true, message: 'Please input!' }]}
      >
        <Input />
      </Form.Item>

      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <Form.Item<ISongPayload>
          label='Genre'
          name='genre'
          rules={[{ required: true, message: 'Please input!' }]}
        >
          <Select options={options} />
        </Form.Item>
      )}

      <Form.Item<ISongPayload>
        label='DatePicker'
        name='releaseDate'
        rules={[{ required: true, message: 'Please input!' }]}
      >
        <DatePicker />
      </Form.Item>
    </Form>
  );
}
