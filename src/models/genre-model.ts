export interface IGenre {
  _id: string;
  name: string;
  description: string;
}

export interface IGenresResponse {
  message: string;
  data: IGenre[];
}
