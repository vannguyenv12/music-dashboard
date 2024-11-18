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
  uploadImage({ id, image }: { id: string; image: any }) {
    const url = `/songs/${id}/upload-cover`;

    const formData = new FormData();
    formData.append('coverImage', image);

    return axiosClient.post<unknown, ISongResponse>(url, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
};
