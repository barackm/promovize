export const routes = {
  homeScreen: '/main/home',
  welcomeScreen: '/',
  register: '/register',
  login: '/login',
};

export type Route = keyof typeof routes;
