import React from 'react';
import M from 'materialize-css';

const Home = () => {
  const toaster = () => {
    const success = localStorage.getItem('success');
    if (success) {
      M.toast({ html: success, classes: 'success' });

      setTimeout(() => {
        localStorage.removeItem('success');
      }, 1500);
    }
  };

  const userdata = localStorage.getItem('user');
  let user;
  if (userdata) {
    user = JSON.parse(userdata);
  }

  return (
    <div>
      <h3>{`Hello ${user ? user.user.username : ''} ,Welcome to authors Haven`}</h3>
      {toaster()}
    </div>
  );
};

export default Home;
