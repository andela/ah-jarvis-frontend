import register from "../reducer";
import * as actions from "../actions";

describe("SignUp actions", () => {
  it("should return action type and payload for signUpSuccess", () => {
    const user = {
      user: {
        email: "user@mail.com",
        username: "user",
        token: "AfdhjIYEIBFHGiu3849"
      }
    };
    const action = actions.signUpSuccess(user);
    expect(Object.keys(action).length).toEqual(2);
    expect(action.payload.user.username).toEqual("user");
  });

  it("should return action type and payload for signUpSuccess", () => {
    const errors = {
      errors: "This is an error message"
    };
    const action = actions.signUpFailure(errors);
    expect(Object.keys(action).length).toEqual(2);
    expect(action.payload.errors).toEqual("This is an error message");
  });
});
