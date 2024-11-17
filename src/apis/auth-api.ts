import { IAuthPayload, IAuthResponse } from '../models/auth-model';
import axiosClient from './axiosClient';

export const authApi = {
  async signUp(data: IAuthPayload) {
    const url = '/auth/sign-up';

    return axiosClient.post<unknown, IAuthResponse>(url, data);
  },
  signIn(data: IAuthPayload) {
    const url = '/auth/sign-in';

    return axiosClient.post<unknown, IAuthResponse>(url, data);
  },
};
