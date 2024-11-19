import { Button } from 'antd';
import { useSongContext } from '../../context/song-context';

export default function AddNewSongButton() {
  const { setOpenModal } = useSongContext();

  return (
    <Button type='primary' onClick={() => setOpenModal(true)}>
      Add New Song
    </Button>
  );
}
