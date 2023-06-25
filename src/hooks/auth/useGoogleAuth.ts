import * as Google from 'expo-auth-session/providers/google';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import env from '@/env';

export const useGoogleAuth = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const googleConfig = env?.google;
  const [loading, setLoading] = useState(false);

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    androidClientId: googleConfig?.googleAndroidClientId,
    iosClientId: googleConfig?.googleIosClientId,
    expoClientId: googleConfig?.googleExpoClientId,
    language: lang,
  });

  const handleLoginWithGoogle = async () => {
    try {
      setLoading(true);
      await promptAsync({});
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      console.log(id_token, response);
    }
  }, [response]);

  return {
    handleLoginWithGoogle,
    loading,
  };
};
