import { Form, Modal } from 'antd';
import { useSongContext } from '../../context/song-context';
import { ISongPayload } from '../../models/song-model';
import SongForm from './song-form';

export default function SongModal() {
  const { openModal, setOpenModal } = useSongContext();

  const [form] = Form.useForm<ISongPayload>();

  const handleSubmit = () => {
    form.submit();
  };

  return (
    <>
      <Modal
        title='Song Modal'
        centered
        open={openModal}
        onOk={handleSubmit}
        onCancel={() => setOpenModal(false)}
        width={700}
        okText='Submit'
      >
        <SongForm form={form} setOpen={setOpenModal} />
      </Modal>
    </>
  );
}
