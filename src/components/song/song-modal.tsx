import { useState } from 'react';
import { Button, Modal } from 'antd';
import SongForm from './song-form';

export default function SongModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button type='primary' onClick={() => setOpen(true)}>
        Add New Song
      </Button>
      <Modal
        title='Song Modal'
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <SongForm />
      </Modal>
    </>
  );
}
