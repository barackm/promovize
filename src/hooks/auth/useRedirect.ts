import { Route, routes } from '@/routes';
import { RootState } from 'app/_layout';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

interface UseRedirectProps {
  shouldRedirectToHomeIfUnauthorized?: boolean;
  redirectTo?: Route;
  condition?: boolean;
}

export const useRedirect = (props?: UseRedirectProps) => {
  const {
    shouldRedirectToHomeIfUnauthorized = true,
    redirectTo,
    condition,
  } = props || {};
  const router = useRouter();
  const { currentUser } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (condition) {
      return router.replace(redirectTo ?? routes.homeScreen);
    }

    if (currentUser && shouldRedirectToHomeIfUnauthorized) {
      return router.replace(redirectTo ?? routes.homeScreen);
    }
  }, [currentUser, condition]);
};
