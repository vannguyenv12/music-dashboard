import { IAuthPayload, IAuthResponse } from '../models/auth-model';
import axiosClient from './axiosClient';

export const authApi = {
  signUp(data: IAuthPayload) {
    const url = '/auth/sign-up';

    return axiosClient.post<unknown, IAuthResponse>(url, data);
  },
  signIn(data: IAuthPayload) {
    const url = '/auth/sign-in';

    return axiosClient.post<unknown, IAuthResponse>(url, data);
  },
  signUpArtist(data: IAuthPayload) {
    const url = '/auth/sign-up-artist';

    return axiosClient.post<unknown, IAuthResponse>(url, data);
  },
  signInArtist(data: IAuthPayload) {
    const url = '/auth/sign-in-artist';

    return axiosClient.post<unknown, IAuthResponse>(url, data);
  },
};
