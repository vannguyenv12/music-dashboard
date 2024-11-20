import { Button, Drawer, Space } from 'antd';
import { useAlbumContext } from '../../context/album-context';
import AlbumSongCheckbox from './album-song-checkbox';

export default function AlbumDrawer() {
  const { setOpenDrawer, openDrawer } = useAlbumContext();

  const onClose = () => {
    setOpenDrawer(false);
  };

  return (
    <>
      <Drawer
        title={`Album Details`}
        placement='right'
        size={'large'}
        onClose={onClose}
        open={openDrawer}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type='primary' onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <AlbumSongCheckbox />
      </Drawer>
    </>
  );
}
