import { useState } from 'react';
import SongModal from './song-modal';
import SongTable from './song-table';
import SongUpload from './song-upload';

export default function ManageSong() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SongModal />
      <SongTable setOpen={setOpen} />
      <SongUpload open={open} setOpen={setOpen} />
    </>
  );
}
