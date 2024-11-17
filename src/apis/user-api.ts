import { IAuthResponse } from '../models/auth-model';
import axiosClient from './axiosClient';

export const userApi = {
  async getCurrentUser(accessToken: string) {
    const url = '/users/me';

    return axiosClient.get<unknown, IAuthResponse>(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },
};
