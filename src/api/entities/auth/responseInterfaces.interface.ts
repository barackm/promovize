import { User } from '@/entities/interfaces/user.interface';

export interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}

export type UserDataResponse = Pick<AuthResponse, 'user'>;
