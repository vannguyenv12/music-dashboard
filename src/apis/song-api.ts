import { ISongsResponse } from '../models/song-model';
import axiosClient from './axiosClient';

export const songApi = {
  getAllSongs() {
    const url = '/songs';

    return axiosClient.get<unknown, ISongsResponse>(url);
  },
};
