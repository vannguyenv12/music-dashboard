import { IUserResponse } from '../models/user-model';
import axiosClient from './axiosClient';

export const userApi = {
  async getCurrentUser() {
    const url = '/users/me';

    return axiosClient.get<unknown, IUserResponse>(url);
  },
};
