import config from "../config";

const handleResponse = response =>
  response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      return Promise.reject(data);
    }
    return data;
  });

export function authHeader(authenticated) {
  // return authorization header with jwt token
<<<<<<< HEAD
  const data = localStorage.getItem("user");
=======
  if (!authenticated) {
    return {};
  }
  const data = localStorage.getItem('user');
>>>>>>> 76e951c0c05a9e9721e3a31a7193432ba0f65b2b
  if (!data) {
    return {};
  }
  const { user } = JSON.parse(data);
  if (user && user.token) {
    return { Authorization: `Bearer ${user.token}` };
  }
  return {};
}

<<<<<<< HEAD
const api = ({ endpoint, method, data }) =>
  fetch(`${config.BASE_URL}${endpoint}`, {
    method,
    headers: {
      "content-type": "application/json",
      ...authHeader()
    },
    body: JSON.stringify(data)
  }).then(handleResponse);
=======

const api = ({
  endpoint, method, data, authenticated,
}) => fetch(`${config.BASE_URL}${endpoint}`, {
  method,
  headers: {
    'content-type': 'application/json',
    ...authHeader(authenticated),
  },
  body: JSON.stringify(data),
}).then(handleResponse);

>>>>>>> 76e951c0c05a9e9721e3a31a7193432ba0f65b2b

export default api;
