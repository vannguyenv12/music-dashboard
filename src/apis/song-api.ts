import {
  ISongPayload,
  ISongResponse,
  ISongsResponse,
} from '../models/song-model';
import axiosClient from './axiosClient';

export const songApi = {
  getAllSongs() {
    const url = '/songs?page=1&limit=100';

    return axiosClient.get<unknown, ISongsResponse>(url);
  },
  create(data: ISongPayload) {
    const url = '/songs';

    return axiosClient.post<unknown, ISongResponse>(url, data);
  },
  update({ id, data }: { id: string; data: ISongPayload }) {
    const url = `/songs/${id}`;

    return axiosClient.patch<unknown, ISongResponse>(url, data);
  },
  uploadImage({
    id,
    image,
    onProgress,
  }: {
    id: string;
    image: File;
    onProgress: (value: number) => void;
  }) {
    const url = `/songs/${id}/upload-cover`;

    const formData = new FormData();
    formData.append('coverImage', image);

    return axiosClient.post<unknown, ISongResponse>(url, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
      onUploadProgress: (event) => {
        const percent = Math.floor((event.loaded / (event.total || 1)) * 100);
        onProgress(percent);
      },
    });
  },

  uploadAudio({
    id,
    audio,
    onProgress,
  }: {
    id: string;
    audio: File;
    onProgress: (value: number) => void;
  }) {
    const url = `/songs/upload-audio`;

    const formData = new FormData();
    formData.append('songId', id);
    formData.append('audioFile', audio);

    return axiosClient.post<unknown, ISongResponse>(url, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
      onUploadProgress: (event) => {
        const percent = Math.floor((event.loaded / (event.total || 1)) * 100);
        onProgress(percent);
      },
    });
  },
};
