import { ISong } from './song-model';
export interface IAlbumPayload {
  title: string;
  releaseDate: string;
}

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

export interface IAlbumResponse {
  message: string;
  data: IAlbum;
}
