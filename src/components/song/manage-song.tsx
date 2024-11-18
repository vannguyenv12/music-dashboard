import { useState } from 'react';
import SongModal from './song-modal';
import SongTable from './song-table';
import SongUpload from './song-upload';
import { ISong } from '../../models/song-model';

export default function ManageSong() {
  const [open, setOpen] = useState(false);
  const [selectedSong, setSelectedSong] = useState<ISong | null>(null);

  return (
    <>
      <SongModal />
      <SongTable setOpen={setOpen} setSelectedSong={setSelectedSong} />
      <SongUpload open={open} setOpen={setOpen} selectedSong={selectedSong} />
    </>
  );
}
