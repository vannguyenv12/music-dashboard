import { useEffect, useState } from 'react';
import { Button, Checkbox, Divider } from 'antd';
import type { CheckboxProps } from 'antd';
import { useGetMySongs } from '../../apis/react-query/song-react-query';
import {
  useAddSongsToAlbum,
  useRemoveSongsFromAlbum,
} from '../../apis/react-query/album-react-query';
import { useAlbumContext } from '../../context/album-context';
import { useNotificationContext } from '../../context/notification';
import { useQueryClient } from '@tanstack/react-query';

const CheckboxGroup = Checkbox.Group;

export default function AlbumSongCheckbox() {
  // Context
  const { selectedAlbum } = useAlbumContext();
  const notification = useNotificationContext();

  // React Query
  const { data: songs } = useGetMySongs(1);
  const addSongs = useAddSongsToAlbum();
  const removeSong = useRemoveSongsFromAlbum();
  const queryClient = useQueryClient();

  // React State
  const [checkedList, setCheckedList] = useState<string[]>([]); // songIds

  const plainOptions = songs?.data || [];

  const checkAll = plainOptions.length === checkedList.length;
  const indeterminate =
    checkedList.length > 0 && checkedList.length < plainOptions.length;

  const onChange = async (list: string[]) => {
    const removedSongIds = checkedList.filter((id) => !list.includes(id));

    if (selectedAlbum && removedSongIds.length > 0) {
      await removeSong.mutateAsync({
        albumId: selectedAlbum._id,
        songIds: removedSongIds,
      });

      await queryClient.invalidateQueries({ queryKey: ['albums'] });
    }

    setCheckedList(list);
  };

  const onCheckAllChange: CheckboxProps['onChange'] = (e) => {
    setCheckedList(
      e.target.checked ? plainOptions.map((song) => song._id) : []
    );
  };

  const handleAddSongs = async () => {
    if (!selectedAlbum) return;

    await addSongs.mutateAsync({
      albumId: selectedAlbum?._id,
      songIds: checkedList,
    });

    notification.success('Add Song Successfully');

    await queryClient.invalidateQueries({ queryKey: ['albums'] });
  };

  useEffect(() => {
    if (selectedAlbum) {
      setCheckedList(selectedAlbum.songs);
    }
  }, [selectedAlbum]);

  console.log('check selected album', selectedAlbum);

  return (
    <>
      <Checkbox
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
      >
        Check all
      </Checkbox>
      <Divider />
      <CheckboxGroup
        options={plainOptions.map((song) => ({
          label: song.title,
          value: song._id,
        }))}
        value={checkedList}
        onChange={onChange}
      />
      <Divider />
      <Button type='primary' color='primary' onClick={handleAddSongs}>
        Submit
      </Button>
    </>
  );
}
