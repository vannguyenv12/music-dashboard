import axiosClient from './axiosClient';

export const authApi = {
  async signUp(data: any) {
    const url = '/auth/sign-up';

    return axiosClient.post(url, data);
  },
  signIn(data: any) {
    const url = '/auth/sign-in';

    return axiosClient.post(url, data);
  },
};
