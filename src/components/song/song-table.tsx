import type { TableProps } from 'antd';
import { Button, Space, Table } from 'antd';
import { useGetSongs } from '../../apis/react-query/song-react-query';
import { ISong } from '../../models/song-model';
import { createBackendUrl } from '../../configs/app-config';
import dayjs from 'dayjs';
import { formatDate } from '../../utils/date-util';

interface ISongTableProps {
  setOpen: (open: boolean) => void;
}

export default function SongTable({ setOpen }: ISongTableProps) {
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
      render: (_, record) => {
        const handleOpenUpload = () => {
          setOpen(true);
        };

        return (
          <Space size='middle'>
            <Button onClick={handleOpenUpload}>Upload</Button>
          </Space>
        );
      },
    },
  ];

  const { data: songs } = useGetSongs();

  const dataSource = songs?.data.map((song) => ({ key: song._id, ...song }));

  return (
    <Table<ISong>
      columns={columns}
      dataSource={dataSource || []}
      pagination={{ pageSize: 100 }}
    />
  );
}
