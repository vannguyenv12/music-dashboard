import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { useGetAlbums } from '../../apis/react-query/album-react-query';
import { IAlbum } from '../../models/album-model';
import { formatDate } from '../../utils/date-util';

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
    render: (_, record) => <Space size='middle'></Space>,
  },
];

export default function AlbumTable() {
  const { data: albums } = useGetAlbums();

  const dataSource = albums?.data?.map((album) => ({
    key: album._id,
    ...album,
  }));

  return <Table<IAlbum> columns={columns} dataSource={dataSource || []} />;
}
