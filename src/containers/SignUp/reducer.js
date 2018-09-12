const initialState = {
  failure: false,
  errors: null,
  isFetching: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNING_UP':
      return {
        ...state,
        isFetching: true,
      };
    case 'SIGNUP_SUCCESSFUL':
      return {
        ...state,
        success: action.payload,
        isFetching: false,
      };
    case 'SIGNUP_FAILURE':
      return {
        ...state,
        failure: true,
        errors: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};
