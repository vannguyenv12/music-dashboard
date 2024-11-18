import { Button, Drawer, Space } from 'antd';
import SongTab from './song-tab';

interface ISongUploadProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function SongUpload({ open, setOpen }: ISongUploadProps) {
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
        <SongTab open={open} />
      </Drawer>
    </>
  );
}
