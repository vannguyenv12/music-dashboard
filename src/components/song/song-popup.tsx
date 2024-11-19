import { Popconfirm } from 'antd';

interface ISongPopupProps {
  children: React.ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
  confirmLoading: boolean;
  handleOk: () => void;
}

export default function SongPopup({
  children,
  open,
  setOpen,
  confirmLoading,
  handleOk,
}: ISongPopupProps) {
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  return (
    <Popconfirm
      title='Delete'
      description='Are you sure to delete this song?'
      open={open}
      onConfirm={handleOk}
      okButtonProps={{ loading: confirmLoading }}
      onCancel={handleCancel}
    >
      {children}
    </Popconfirm>
  );
}
