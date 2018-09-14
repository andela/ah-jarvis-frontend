import jwtDecode from 'jwt-decode';

const getCurrentUser = () => {
  if (localStorage.getItem('user')) {
    const { user } = JSON.parse(localStorage.getItem('user'));
    const currentTime = new Date().getTime();
    if (jwtDecode(user.token).exp > currentTime) {
      return null;
    }
    return user;
  }
  return null;
};

export default getCurrentUser;
