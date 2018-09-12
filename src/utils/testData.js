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
  email: { email: 'user@email.com' },
  reset_data: {
    reset_data: {
      token: 'token_sent_to_email',
      email: 'validemail@example.com',
      new_password: 'new_password',
    },
  },
};
