import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';

const NotFound = () => (
  <React.Fragment>
    <Header />
    <div className="row">
      <div className="col m4 s12 offset-m4 auth">
        <div className="card card--auth p-b--40">
          <div className="card-content">
            <span className="card-title center-align text-primary brand m-b--30 m-t--15">
              OOP'S 404
            </span>
            <div className="center">
              <p className="centre-align">Sorry this page isn't here.</p>
              <p className="m-t--15">Please go back to safe waters.</p>
            </div>
          </div>
          <Link className="btn waves-effect waves-light btn--block" to="/">
            Take me Home
          </Link>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default NotFound;
