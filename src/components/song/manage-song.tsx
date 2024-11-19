import SongProvider from '../../context/song-context';
import AddNewSongButton from './add-new-song-button';
import SongModal from './song-modal';
import SongTable from './song-table';
import SongUpload from './song-upload';

export default function ManageSong() {
  return (
    <SongProvider>
      <AddNewSongButton />
      <SongModal />
      <SongTable />
      <SongUpload />
    </SongProvider>
  );
}
