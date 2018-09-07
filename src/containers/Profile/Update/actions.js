import { EDIT_REQUEST, EDIT_SUCCESS, EDIT_FAILURE } from "./constants";
import api from "../../../utils/api";

const editProfileFetch = () => ({
  type: EDIT_REQUEST
});

const editProfileSuccess = payload => ({
  type: EDIT_SUCCESS,
  payload
});

const editProfileFailure = errors => ({
  type: EDIT_FAILURE,
  errors
});

const updateUser = (data, history) => dispatch => {
  dispatch(editProfileFetch());
  return api({
    method: "PUT",
    endpoint: "/user/",
    data,
    authenticated: true
  })
    .then(res => {
      dispatch(editProfileSuccess(res));
      history.push(`/profile/${res.user.username}`);
    })
    .catch(err => dispatch(editProfileFailure(err)));
};

export default updateUser;
