const initialState = {
  failure: false,
  errors: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP_SUCCESSFUL":
      return {
        ...state,
        success: action.payload
      };
    case "SIGNUP_FAILURE":
      return {
        ...state,
        failure: true,
        errors: action.payload
      };
    default:
      return state;
  }
};
