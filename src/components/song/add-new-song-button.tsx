import { Button } from 'antd';
import { useSongContext } from '../../context/song-context';

export default function AddNewSongButton() {
  const { setOpenModal, setSelectedSong } = useSongContext();

  const handleAddNewSong = () => {
    setOpenModal(true);
    setSelectedSong(null);
  };

  return (
    <Button type='primary' onClick={handleAddNewSong}>
      Add New Song
    </Button>
  );
}
