export interface User {
  authMethod: 'google' | 'email';
  createdAt: string;
  email: string;
  emailVerified: boolean;
  firstName: string;
  googleId: string;
  id: number;
  language: string;
  lastName: string;
  picture: string;
  refreshToken: string;
  updatedAt: string;
}
