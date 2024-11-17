interface IUser {
  _id: string;
  username: string;
  name: string;
  role: string;
}

export interface IUserResponse {
  message: string;
  data: IUser;
}
