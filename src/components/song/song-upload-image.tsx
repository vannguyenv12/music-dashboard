import { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Image, Upload } from 'antd';
import type { GetProp, UploadFile, UploadProps } from 'antd';
import { useUploadSongImage } from '../../apis/react-query/song-react-query';
import { RcFile } from 'antd/es/upload';
import { useQueryClient } from '@tanstack/react-query';
import { ISong } from '../../models/song-model';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

export interface ISongUploadImage {
  open: boolean;
  selectedSong: ISong | null;
}

export default function SongUploadImage({
  open,
  selectedSong,
}: ISongUploadImage) {
  // React Query
  const uploadImage = useUploadSongImage();
  const queryClient = useQueryClient();

  // State
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [progress, setProgress] = useState(0);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleUploadImage: UploadProps['customRequest'] = async (options) => {
    if (!selectedSong) return;

    const { file, onSuccess, onError } = options;

    try {
      await uploadImage.mutateAsync({
        id: selectedSong._id,
        image: file as File,
        onProgress: (value) => setProgress(value),
      });

      onSuccess?.('ok');
      queryClient.invalidateQueries({ queryKey: ['songs'] });
    } catch (error) {
      onError?.(error as Error);
    }
  };

  useEffect(() => {
    if (!open) {
      setFileList([]);
      setProgress(0);
    }
  }, [open]);

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList.slice(-1));

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type='button'>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );
  return (
    <>
      <Upload
        customRequest={handleUploadImage}
        listType='picture-card'
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      {progress > 0 && <div>Uploading ... {progress}%</div>}
      {previewImage && (
        <Image
          wrapperStyle={{ display: 'none' }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(''),
          }}
          src={previewImage}
        />
      )}
    </>
  );
}
