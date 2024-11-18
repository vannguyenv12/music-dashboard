export interface ISong {
  _id: string;
  title: string;
  artist: string;
  artistName: string;
  genre: string;
  duration: number;
  audioFile: string;
  coverImage: string;
  releaseDate: string;
  slug: string;
}

export interface ISongsResponse {
  message: string;
  data: ISong[];
}

export interface ISongResponse {
  message: string;
  data: ISong;
}

export interface ISongPayload {
  title: string;
  artist: string;
  genre: string;
  releaseDate: string;
}
