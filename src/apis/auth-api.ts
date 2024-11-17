import { ISignUpPayload, ISignUpResponse } from '../models/auth-model';
import axiosClient from './axiosClient';

export const authApi = {
  async signUp(data: ISignUpPayload) {
    const url = '/auth/sign-up';

    return axiosClient.post<unknown, ISignUpResponse>(url, data);
  },
  signIn(data: any) {
    const url = '/auth/sign-in';

    return axiosClient.post<unknown, ISignUpResponse>(url, data);
  },
};
