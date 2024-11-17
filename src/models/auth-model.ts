export interface IAuthPayload {
  username: string;
  name?: string;
  password: string;
}

export interface IAuthResponse {
  message: string;
  data: {
    accessToken: string;
  };
}
