import { Button, Drawer, Space } from 'antd';
import SongTab from './song-tab';
import { ISong } from '../../models/song-model';

interface ISongUploadProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  selectedSong: ISong | null;
}

export default function SongUpload({
  open,
  setOpen,
  selectedSong,
}: ISongUploadProps) {
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
        <SongTab open={open} selectedSong={selectedSong} />
      </Drawer>
    </>
  );
}
