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
};
