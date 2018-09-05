import config from '../config';

const handleResponse = response => response.text().then((text) => {
  const data = text && JSON.parse(text);
  if (!response.ok) {
    return Promise.reject(data);
  }
  return data;
});

export function authHeader() {
  // return authorization header with jwt token
  const data = localStorage.getItem('user');
  if (!data) {
    return {};
  }
  const { user } = JSON.parse(data);
  if (user && user.token) {
    return { Authorization: `Bearer ${user.token}` };
  }
  return {};
}


const api = ({ endpoint, method, data }) => fetch(`${config.BASE_URL}${endpoint}`, {
  method,
  headers: {
    'content-type': 'application/json',
    ...authHeader(),
  },
  body: JSON.stringify(data),
}).then(handleResponse);


export default api;
