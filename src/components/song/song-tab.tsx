import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import SongUploadImage from './song-upload-image';
import { ISong } from '../../models/song-model';

const onChange = (key: string) => {
  console.log(key);
};

interface ISongTabProps {
  open: boolean;
  selectedSong: ISong | null;
}

export default function SongTab({ open, selectedSong }: ISongTabProps) {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Upload Image',
      children: <SongUploadImage open={open} selectedSong={selectedSong} />,
    },
    {
      key: '2',
      label: 'Upload Audio',
      children: 'Content of Tab Pane 2',
    },
  ];

  return <Tabs defaultActiveKey='1' items={items} onChange={onChange} />;
}
