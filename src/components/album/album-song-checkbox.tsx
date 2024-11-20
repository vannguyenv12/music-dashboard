import React, { useState } from 'react';
import { Checkbox, Divider } from 'antd';
import type { CheckboxProps } from 'antd';
import { useGetMySongs } from '../../apis/react-query/song-react-query';

const CheckboxGroup = Checkbox.Group;

export default function AlbumSongCheckbox() {
  const [checkedList, setCheckedList] = useState<string[]>([]); // songIds

  const { data: songs } = useGetMySongs(1);

  const plainOptions = songs?.data || [];
  console.log('check songs', songs?.data);

  const checkAll = plainOptions.length === checkedList.length;
  const indeterminate =
    checkedList.length > 0 && checkedList.length < plainOptions.length;

  const onChange = (list: string[]) => {
    setCheckedList(list);
  };

  console.log('check', checkedList);

  const onCheckAllChange: CheckboxProps['onChange'] = (e) => {
    setCheckedList(
      e.target.checked ? plainOptions.map((song) => song._id) : []
    );
  };

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
    </>
  );
}
