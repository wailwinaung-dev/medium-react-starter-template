export type User = {
  id: string;
  name: string;
  email: string;
};

export type loginRequest = {
  email: string;
  password: string;
};

export type loginResponse = {
  access_token: string;
  user: User;
};
