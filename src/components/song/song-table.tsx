import type { TableProps } from 'antd';
import { Button, notification, Space, Table } from 'antd';
import {
  useDeleteSong,
  useGetSongs,
} from '../../apis/react-query/song-react-query';
import { ISong } from '../../models/song-model';
import { createBackendUrl, ITEMS_PER_PAGE } from '../../configs/app-config';
import { formatDate } from '../../utils/date-util';
import { useSongContext } from '../../context/song-context';
import {
  DeleteOutlined,
  EditOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import SongPopup from './song-popup';
import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';

export default function SongTable() {
  const { setSelectedSong, setOpen, setOpenModal } = useSongContext();

  const [openPopup, setOpenPopup] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [openId, setOpenId] = useState('');

  const deleteSong = useDeleteSong();
  const queryClient = useQueryClient();

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
          setSelectedSong(record);
          setOpen(true);
        };

        const handleUpdate = () => {
          setSelectedSong(record);
          setOpenModal(true);
        };

        const showPopconfirm = () => {
          setOpenPopup(true);
          setOpenId(record._id);
        };

        const handleOk = async () => {
          setConfirmLoading(true);

          await deleteSong.mutateAsync(record._id);
          queryClient.invalidateQueries({ queryKey: ['songs'] });

          notification.success({ message: 'Delete song successfully!' });

          setConfirmLoading(false);
        };

        return (
          <Space size='middle'>
            <Button
              onClick={handleOpenUpload}
              icon={<UploadOutlined />}
            ></Button>
            <Button
              onClick={handleUpdate}
              type='primary'
              style={{ backgroundColor: '#1b43c8' }}
              icon={<EditOutlined />}
            ></Button>

            <SongPopup
              open={openPopup && openId === record._id}
              setOpen={setOpenPopup}
              confirmLoading={confirmLoading}
              handleOk={handleOk}
            >
              <Button
                onClick={showPopconfirm}
                type='primary'
                style={{ backgroundColor: '#e43727' }}
                icon={<DeleteOutlined />}
              ></Button>
            </SongPopup>
          </Space>
        );
      },
    },
  ];

  const { data: songs } = useGetSongs();

  const dataSource = songs?.data.map((song) => ({ key: song._id, ...song }));

  console.log('check songs', songs?.pagination);

  return (
    <Table<ISong>
      columns={columns}
      dataSource={dataSource || []}
      pagination={{ pageSize: ITEMS_PER_PAGE, total: songs?.pagination?.total }}
    />
  );
}
