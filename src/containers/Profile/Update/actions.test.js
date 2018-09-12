import * as actions from "./actions";
import * as types from "./constants";

describe("user update profile actions", () => {
  it("should create a request action", () => {
    const expectedAction = {
      type: types.EDIT_REQUEST
    };
    expect(actions.editProfileFetch()).toEqual(expectedAction);
  });
  // it("should create an action to dispatch errors to the user", () => {
  //   const errors = {
  //     errors: {
  //       error: ["Authentication credentials were not provided"]
  //     }
  //   };
  //   const expectedAction = {
  //     type: types.EDIT_FAILURE,
  //     errors
  //   };
  //   console.log(actions.editProfileFailure());
  //   expect(actions.editProfileFailure()).toEqual(expectedAction);
  // });
  it("should create an action to dispatch success response.", () => {
    const payload = {
      profile: {
        username: "testuser",
        bio: "This is a bio",
        image:
          "https://t3.ftcdn.net/jpg/01/83/55/76/500_F_183557656_DRcvOesmfDl5BIyhPKrcWANFKy2964i9.jpg"
      }
    };
    const expectedAction = {
      type: types.EDIT_SUCCESS,
      payload
    };
    expect(actions.editProfileSuccess(payload)).toEqual(expectedAction);
  });
});
