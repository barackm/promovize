export const routes = {
  homeScreen: '/main',
  welcomeScreen: '/',
  register: '/register',
  login: '/login',
  confirmEmail: '/confirm',
};

export type Route = keyof typeof routes;
