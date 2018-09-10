const getCurrentUser = () => JSON.parse(localStorage.getItem('user'));

export default getCurrentUser;
