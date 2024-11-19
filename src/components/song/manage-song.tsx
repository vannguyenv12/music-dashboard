import { useState } from 'react';
import SongProvider from '../../context/song-context';
import SongModal from './song-modal';
import SongTable from './song-table';
import SongUpload from './song-upload';

export default function ManageSong() {
  return (
    <SongProvider>
      <SongModal />
      <SongTable />
      <SongUpload />
    </SongProvider>
  );
}
