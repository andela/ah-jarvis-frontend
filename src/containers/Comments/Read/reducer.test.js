import * as actions from './actions';
import getCommentsReducer from './reducer';

const initialState = {
  payload: {},
  publishing: false,
  success: false,
  failure: false,
  errors: null,
  isFetching: false,
};

describe('Comment Reducers', () => {
  it('should set isFetching true when COMMENTS_FETCH_REQUEST is dispatched', () => {
    const action = actions.getComments();

    const newState = getCommentsReducer(initialState, action);

    expect(Object.keys(newState).length).toEqual(6);
    expect(newState.isFetching === true);
  });

  it('should set failure True when COMMENTS_FETCH_FAILURE', () => {
    const errors = {
      errors: {
        error: ['Article not found'],
      },
    };
    const action = actions.commentsFailure(errors);

    const newState = getCommentsReducer(initialState, action);

    expect(Object.keys(newState).length).toEqual(6);
    expect(newState.failure).toBe(true);
  });

  it('should set success True when COMMENTS_FETCH_SUCCESS', () => {
    const payload = {
      comment: {
        count: 1,
        next: null,
        previous: null,
        results: [
          {
            id: 6,
            author: {
              username: 'tittoh dev',
              email: 'tittohb@gmail.com',
              bio: 'Truth is stranger than fiction, but it is because Fiction is obliged to stick to possibilities; Truth isn\'t.',
              get_notifications: true,
              followers: 1,
              following: 0,
              image: 'https://res.cloudinary.com/dhgp3cxes/image/upload/v1537250193/feipcaeoiluq95agxeh9.jpg',
              i_follow_this_user: false,
              this_user_follows_me: false,
            },
            body: 'das',
            createdAt: '2018-09-19T10:05:11.968596+00:00',
            updatedAt: '2018-09-19T10:05:11.968650+00:00',
            thread: [],
          },
        ],
      },
    };
    const action = actions.commentsSuccess(payload);

    const newState = getCommentsReducer(initialState, action);

    expect(Object.keys(newState).length).toEqual(6);
    expect(newState.success).toBe(true);
  });
});
