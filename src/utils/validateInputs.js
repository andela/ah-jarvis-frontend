export default (inputType, value) => {
  let re;
  if (inputType === "username") {
    re = /[a-zA-Z]{3,}_*[0-9_]*[a-zA-Z]*_*/;
    if (!re.test(value)) {
      return "Username should have at least 3 letters";
    } else {
      return "";
    }
  }
  if (inputType === "email") {
    re = /(^[a-zA-Z0-9_.]+@[a-zA-Z0-9-]+\.[a-z]+$)/;
    if (!re.test(value)) {
      return "Email should have the format user@mail.com";
    } else {
      return "";
    }
  }
  if (inputType === "password") {
    re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{8,}$/;
    if (!re.test(value)) {
      return "Password should contain capital letters, numbers and special character e.g. @,#,!";
    } else {
      return "";
    }
  }
  if (inputType === "bio") {
    re = value.split(" ").length;
    if (re < 6) {
      return "Bio should be at least 6 words";
    } else if (re > 150) {
      return "Bio should not exceed 150 words";
    } else {
      return "";
    }
  }
};
