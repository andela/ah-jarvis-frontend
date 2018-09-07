import api from "../../utils/api";

export const signUpSuccess = payload => {
  return {
    type: "SIGNUP_SUCCESSFUL",
    payload
  };
};

export const signUpFailure = payload => {
  return {
    type: "SIGNUP_FAILURE",
    payload
  };
};

export const registerUser = (user, history) => {
  return dispatch => {
    return api({ endpoint: "/users/", method: "POST", data: user })
      .then(data => {
        localStorage.setItem("user", JSON.stringify(data));
        dispatch(signUpSuccess(data));
        history.push("/");
      })
      .catch(error => {
        dispatch(signUpFailure(error));
      });
  };
};
