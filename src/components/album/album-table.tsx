import { Button, Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { useGetAlbums } from '../../apis/react-query/album-react-query';
import { IAlbum } from '../../models/album-model';
import { formatDate } from '../../utils/date-util';
import { useAlbumContext } from '../../context/album-context';

export default function AlbumTable() {
  const { data: albums } = useGetAlbums();

  const { setOpenDrawer } = useAlbumContext();

  const columns: TableProps<IAlbum>['columns'] = [
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
      title: 'Release Date',
      dataIndex: 'releaseDate',
      key: 'releaseDate',
      render: (text) => <span>{formatDate(text)}</span>,
    },

    {
      title: 'Action',
      key: 'action',
      render: (_, record) => {
        const handleClick = () => {
          setOpenDrawer(true);
        };

        return (
          <Space size='middle'>
            <Button
              type='primary'
              style={{ backgroundColor: '#0098fdea' }}
              onClick={handleClick}
            >
              Info
            </Button>
          </Space>
        );
      },
    },
  ];

  const dataSource = albums?.data?.map((album) => ({
    key: album._id,
    ...album,
  }));

  return <Table<IAlbum> columns={columns} dataSource={dataSource || []} />;
}
