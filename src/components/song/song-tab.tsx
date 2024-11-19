import type { TabsProps } from 'antd';
import { Tabs } from 'antd';
import SongUploadImage from './song-upload-image';
import SongUploadAudio from './song-upload-audio';

const onChange = (key: string) => {
  console.log(key);
};

interface ISongTabProps {
  open: boolean;
}

export default function SongTab() {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Upload Image',
      children: <SongUploadImage />,
    },
    {
      key: '2',
      label: 'Upload Audio',
      children: <SongUploadAudio />,
    },
  ];

  return <Tabs defaultActiveKey='1' items={items} onChange={onChange} />;
}
