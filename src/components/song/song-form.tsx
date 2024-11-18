import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Select,
  TreeSelect,
  Segmented,
} from 'antd';
import { useGetGenres } from '../../apis/react-query/genre-react-query';

const { RangePicker } = DatePicker;

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

export default function SongForm({ form }: any) {
  const { data: genres } = useGetGenres();

  const options = genres?.data.map((genre) => ({
    value: genre.name,
    label: genre.name,
  }));

  const handleFinish = (values: any) => {
    console.log('check values', values);
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
      <Form.Item
        label='Title'
        name='title'
        rules={[{ required: true, message: 'Please input!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Genre'
        name='genre'
        rules={[{ required: true, message: 'Please input!' }]}
      >
        <Select options={options} />
      </Form.Item>

      <Form.Item
        label='DatePicker'
        name='DatePicker'
        rules={[{ required: true, message: 'Please input!' }]}
      >
        <DatePicker />
      </Form.Item>
    </Form>
  );
}
