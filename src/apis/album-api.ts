import { IAlbumPayload, IAlbumsResponse } from '../models/album-model';
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
};
