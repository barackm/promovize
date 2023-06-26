import { getAccessToken } from '@/services/storage/storageService';
import axiosFetcher from 'axios';

export default async () => {
  const token = await getAccessToken();
  axiosFetcher.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
