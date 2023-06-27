export interface RegisterRequestBody {
  email: string;
  password: string;
  prefix?: string;
}
export interface GoogleSignInRedirectRequestBody {
  idToken: string;
}
