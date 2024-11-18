import { Button, Form, Modal } from 'antd';
import { useState } from 'react';
import SongForm from './song-form';

export default function SongModal() {
  const [open, setOpen] = useState(false);

  const [form] = Form.useForm();

  const handleSubmit = () => {
    form.submit();
    //setOpen(false);
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
