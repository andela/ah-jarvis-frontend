import React from 'react';

const Home = () => {
  const userdata = localStorage.getItem('user');
  let user;
  if (userdata) {
    user = JSON.parse(userdata);
  }

  return (
    <h3>
      { `Hello ${user ? user.user.username : ''} ,Welcome to authors Haven` }
    </h3>
  );
};

export default Home;
