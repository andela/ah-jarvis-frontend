export default (inputType, value) => {
  let re;
  if (inputType === 'username') {
    re = /[a-zA-Z]{3,}_*[0-9_]*[a-zA-Z]*_*/;
    if (!re.test(value)) return 'Username should have at least 3 letters';
  }
  if (inputType === 'email') {
    re = /(^[a-zA-Z0-9_.]+@[a-zA-Z0-9-]+\.[a-z]+$)/;
    if (!re.test(value)) return 'Email should have the format user@mail.com';
  }
  if (inputType === 'password') {
    re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{7,}$/;
    if (!re.test(value)) return 'Password should contain capital letters, numbers and special characters e.g. @,#,!';
  }
  if (inputType === 'bio') {
    re = value.split(' ').length;
    if (re < 6) return 'Bio should be at least 6 words';
    if (re > 150) return 'Bio should not exceed 150 words';
  }
  if (inputType === 'confirmPass') {
    const { password, confirmPass } = value;
    if (!password) return 'Password is missing';
    if (confirmPass !== password) return 'Input should match the password';
  }
  return '';
};
