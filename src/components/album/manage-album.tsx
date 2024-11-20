import { useState } from 'react';
import AlbumDrawer from './album-drawer';
import AlbumModal from './album-modal';
import AlbumTable from './album-table';
import AlbumProvider from '../../context/album-context';

export default function ManageAlbum() {
  return (
    <AlbumProvider>
      <AlbumModal />
      <AlbumTable />
      <AlbumDrawer />
    </AlbumProvider>
  );
}
