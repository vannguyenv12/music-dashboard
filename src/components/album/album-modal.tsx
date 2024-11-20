import { useState } from 'react';
import { Button, Modal } from 'antd';
import AlbumForm from './album-form';

export default function AlbumModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button type='primary' onClick={() => setOpen(true)}>
        Create an Album
      </Button>
      <Modal
        title='Album Modal'
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={700}
      >
        <AlbumForm setOpen={setOpen} />
      </Modal>
    </>
  );
}
