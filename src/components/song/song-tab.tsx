import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import SongUploadImage from './song-upload-image';

const onChange = (key: string) => {
  console.log(key);
};

interface ISongTabProps {
  open: boolean;
}

export default function SongTab({ open }: ISongTabProps) {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Upload Image',
      children: <SongUploadImage open={open} />,
    },
    {
      key: '2',
      label: 'Upload Audio',
      children: 'Content of Tab Pane 2',
    },
  ];

  return <Tabs defaultActiveKey='1' items={items} onChange={onChange} />;
}
