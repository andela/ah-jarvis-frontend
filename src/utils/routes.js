const ROUTES = {
  home: '/',
  signin: '/signin',
  signup: '/signup',
  articles: '/articles',
  getArticleUrl: '/article/:id',
  createArticleUrl: '/articles/new',
  signinWithEmail: '/signin/email',
  resetPassword: '/reset/password',
  verify: '/verify/:token',
  getProfile: '/profile/:username',
  updateProfile: '/profile/:username/edit',
  profile: '/profile',
};

export default ROUTES;
