export const routes = {
  homeScreen: '/main',
  welcomeScreen: '/',
  register: '/register',
  login: '/login',
};

export type Route = keyof typeof routes;
