import {
  IAddSongsPayload,
  IAlbumPayload,
  IAlbumResponse,
  IAlbumsResponse,
} from '../models/album-model';
import axiosClient from './axiosClient';

export const albumApi = {
  getAll() {
    const url = '/albums';

    return axiosClient.get<unknown, IAlbumsResponse>(url);
  },
  create(data: IAlbumPayload) {
    const url = '/albums';

    return axiosClient.post<unknown, IAlbumsResponse>(url, data);
  },
  addSongs(data: IAddSongsPayload) {
    const url = '/albums/add-songs';

    return axiosClient.post<unknown, IAlbumResponse>(url, data);
  },
};
