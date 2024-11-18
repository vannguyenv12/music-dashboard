import { Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useRef, useState } from 'react';

export default function SongUploadImage() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | undefined>();

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const objectUrl = URL.createObjectURL(e.target.files[0]);

      console.log('check object url', objectUrl);
      setSelectedImage(objectUrl);
    }
  };

  const handleUpload = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    inputRef.current?.click();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <input
        type='file'
        style={{ display: 'none' }}
        ref={inputRef}
        onChange={handleChangeImage}
      />
      <Button
        htmlType='submit'
        style={{
          justifyItems: 'flex-start',
          alignSelf: 'flex-start',
        }}
        icon={<UploadOutlined />}
        onClick={handleUpload}
      >
        Click to Upload
      </Button>
      <img
        width={300}
        height={300}
        src={selectedImage}
        alt='Preview Image'
        style={{ objectFit: 'contain' }}
      />
      <Button
        type='primary'
        style={{
          justifyItems: 'flex-start',
          alignSelf: 'flex-start',
        }}
      >
        Upload
      </Button>
    </div>
  );
}
