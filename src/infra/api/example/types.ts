type RefreshToken = {
  token: string;
  expiration: string; // Você pode usar Date em vez de string se preferir manipular como data
};

export type AuthTokens = {
  access_token: string;
  refresh_token: RefreshToken;
};

export type LoginError = {
  message: string;
  details: string;
  statusCode: number;
  type: string;
};
