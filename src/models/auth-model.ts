export interface ISignUpPayload {
  username: string;
  name: string;
  password: string;
}

export interface ISignUpResponse {
  message: string;
  data: {
    accessToken: string;
  };
}
