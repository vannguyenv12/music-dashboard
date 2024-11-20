import { ISong } from './song-model';

export interface IAlbum {
  _id: string;
  title: string;
  songs: ISong[];
  releaseDate: string;
  artistName: string;
  artistBio: string;
}

export interface IAlbumsResponse {
  message: string;
  data: IAlbum[];
}
