import { IGenresResponse } from '../models/genre-model';
import axiosClient from './axiosClient';

export const genreApi = {
  getAll() {
    const url = '/genres';

    return axiosClient.get<unknown, IGenresResponse>(url);
  },
};
