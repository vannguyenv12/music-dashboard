import { Button, Form, Modal } from 'antd';
import { useState } from 'react';
import SongForm from './song-form';
import { ISongPayload } from '../../models/song-model';

export default function SongModal() {
  const [open, setOpen] = useState(false);

  const [form] = Form.useForm<ISongPayload>();

  const handleSubmit = () => {
    form.submit();
  };

  return (
    <>
      <Button type='primary' onClick={() => setOpen(true)}>
        Add New Song
      </Button>

      <Modal
        title='Song Modal'
        centered
        open={open}
        onOk={handleSubmit}
        onCancel={() => setOpen(false)}
        width={700}
        okText='Submit'
      >
        <SongForm form={form} setOpen={setOpen} />
      </Modal>
    </>
  );
}
