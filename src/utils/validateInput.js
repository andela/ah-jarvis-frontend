export default (inputType, value) => {
  let re;
  if (inputType === 'username') {
    re = /[a-zA-Z]{3,}_*[0-9_]*[a-zA-Z]*_*/;
    if (!re.test(value)) {
      return 'Username should have at least 3 letters';
    }
    return '';
  } if (inputType === 'email') {
    re = /(^[a-zA-Z0-9_.]+@[a-zA-Z0-9-]+\.[a-z]+$)/;
    if (!re.test(value)) {
      return 'Email should have the format user@mail.com';
    }
    return '';
  }
  if (inputType === 'password') {
    re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{8,}$/;
    if (!re.test(value)) {
      return 'Password should contain capital letters, numbers and special characters e.g. @,#,!';
    }
    return '';
  }
};
