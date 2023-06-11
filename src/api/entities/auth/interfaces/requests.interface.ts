export interface AuthSigninWithGoogleRequest {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
}

export interface AuthSignupWithEmailRequest {
  uid: string;
  email: string;
}
