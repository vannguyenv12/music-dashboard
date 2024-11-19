import type { TableProps } from 'antd';
import { Button, Space, Table } from 'antd';
import { useGetSongs } from '../../apis/react-query/song-react-query';
import { ISong } from '../../models/song-model';
import { createBackendUrl } from '../../configs/app-config';
import { formatDate } from '../../utils/date-util';
import { useSongContext } from '../../context/song-context';
import {
  DeleteOutlined,
  EditOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import SongPopup from './song-popup';
import { useState } from 'react';

export default function SongTable() {
  const { setSelectedSong, setOpen, setOpenModal } = useSongContext();

  const [openPopup, setOpenPopup] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [openId, setOpenId] = useState('');

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

        const handleOk = () => {
          setConfirmLoading(true);

          setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
          }, 2000);
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

  return (
    <Table<ISong>
      columns={columns}
      dataSource={dataSource || []}
      pagination={{ pageSize: 100 }}
    />
  );
}
