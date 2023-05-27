import { googleUrl } from '@/services/auth';
import httpService from '@/services/httpService';
import * as Google from 'expo-auth-session/providers/google';
import { useState } from 'react';

export const useGoogleAuth = () => {
  const [request, response, prompAsync] = Google.useAuthRequest({
    iosClientId: '',
    androidClientId: '',
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const handleSignUpWithGoogle = () => {
    prompAsync({ showInRecents: true });
  };

  const getUserData = async () => {
    try {
      setLoading(true);
      const { data } = await httpService.get(googleUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return {
    handleSignUpWithGoogle,
  };
};
