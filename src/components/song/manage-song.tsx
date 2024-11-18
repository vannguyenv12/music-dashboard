import { useState } from 'react';
import SongProvider from '../../context/song-context';
import SongModal from './song-modal';
import SongTable from './song-table';
import SongUpload from './song-upload';

export default function ManageSong() {
  const [open, setOpen] = useState(false);

  return (
    <SongProvider>
      <SongModal />
      <SongTable setOpen={setOpen} />
      <SongUpload open={open} setOpen={setOpen} />
    </SongProvider>
  );
}
