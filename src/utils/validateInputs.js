// Pass type of input and state
// returns validation message if it doesn't meet criteria
export default (inputType, state) => {
  let re;
  if (inputType === "username") {
    re = /[a-zA-Z]{3,}_*[0-9_]*[a-zA-Z]*_*/;
    if (!re.test(state)) {
      return "Invalid username";
    } else {
      return "successful";
    }
  } else if (inputType === "email") {
    re = /(^[a-zA-Z0-9_.]+@[a-zA-Z0-9-]+\.[a-z]+$)/;
    if (!re.test(state)) {
      return "Invalid email";
    } else {
      return "successful";
    }
  }
  if (inputType === "password") {
    re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{8,}$/;
    if (!re.test(state)) {
      return "Invalid password";
    } else {
      return "successful";
    }
  }
};
