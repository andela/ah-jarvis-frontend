export default {
  article: {
    title: 'Test title',
    body: 'Test body',
    description: 'Test desc',
  },

  articleErrors: {
    errors: {
      error: ['Article not Found'],
    },
  },

  initialState: {
    failure: false,
    errors: null,
    isFetching: false,
  },

  user: {
    user: {
      email: 'user@mail.com',
      username: 'user',
      token: 'AfdhjIYEIBFHGiu3849',
    },
  },
  errors: { errors: 'This is an error message' },
};
