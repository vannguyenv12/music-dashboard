import { IAlbumsResponse } from '../models/album-model';
import axiosClient from './axiosClient';

export const albumApi = {
  async getAll() {
    const url = '/albums';

    return axiosClient.get<unknown, IAlbumsResponse>(url);
  },
};
