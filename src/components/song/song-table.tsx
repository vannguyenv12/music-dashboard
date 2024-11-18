import type { TableProps } from 'antd';
import { Space, Table } from 'antd';
import { useGetSongs } from '../../apis/react-query/song-react-query';
import { ISong } from '../../models/song-model';
import { createBackendUrl } from '../../configs/app-config';
import dayjs from 'dayjs';
import { formatDate } from '../../utils/date-util';

const columns: TableProps<ISong>['columns'] = [
  {
    title: 'Cover Image',
    dataIndex: 'coverImage',
    key: 'coverImage',
    render: (text) => (
      <img
        width={50}
        height={50}
        alt='Cover Image'
        src={createBackendUrl(`/songs/${text}`)}
      />
    ),
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Artist',
    dataIndex: 'artistName',
    key: 'artistName',
  },
  {
    title: 'Duration',
    dataIndex: 'duration',
    key: 'duration',
    render: (text) => <span>{text?.toFixed(2)}</span>,
  },
  {
    title: 'Genre',
    key: 'genre',
    dataIndex: 'genre',
  },
  {
    title: 'Release Date',
    dataIndex: 'releaseDate',
    key: 'releaseDate',
    render: (text) => <span>{formatDate(text)}</span>,
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => <Space size='middle'></Space>,
  },
];

export default function SongTable() {
  const { data: songs } = useGetSongs();

  console.log('check data', songs?.data);

  return (
    <Table<ISong>
      columns={columns}
      dataSource={songs?.data || []}
      pagination={{ pageSize: 100 }}
    />
  );
}
