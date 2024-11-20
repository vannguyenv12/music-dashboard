import { createContext, useContext, useState } from 'react';
import { IAlbum } from '../models/album-model';

interface IAlbumContext {
  selectedAlbum: IAlbum | null;
  setSelectedAlbum: (album: IAlbum | null) => void;
  openDrawer: boolean; // drawer
  setOpenDrawer: (open: boolean) => void;

  // openModal: boolean; // modal
  // setOpenModal: (open: boolean) => void;
}

const AlbumContext = createContext<IAlbumContext | null>(null);

interface ISongProviderProps {
  children: React.ReactNode;
}

export default function AlbumProvider({ children }: ISongProviderProps) {
  const [selectedAlbum, setSelectedAlbum] = useState<IAlbum | null>(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  // const [openModal, setOpenModal] = useState(false);

  return (
    <AlbumContext.Provider
      value={{
        setSelectedAlbum,
        selectedAlbum,
        openDrawer,
        setOpenDrawer,
      }}
    >
      {children}
    </AlbumContext.Provider>
  );
}

export const useAlbumContext = () => {
  const context = useContext(AlbumContext);

  if (!context) throw new Error('Context error');

  return context;
};
