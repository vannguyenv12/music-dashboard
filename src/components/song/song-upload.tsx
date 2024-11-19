import { Button, Drawer, Space } from 'antd';
import SongTab from './song-tab';
import { useSongContext } from '../../context/song-context';

export default function SongUpload() {
  const { open, setOpen } = useSongContext();

  return (
    <>
      <Drawer
        title={`Upload`}
        placement='right'
        size={'large'}
        onClose={() => setOpen(false)}
        open={open}
        extra={
          <Space>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button type='primary' onClick={() => setOpen(false)}>
              OK
            </Button>
          </Space>
        }
      >
        <SongTab />
      </Drawer>
    </>
  );
}
