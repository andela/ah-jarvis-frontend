import React from 'react';
import { NavLink } from 'react-router-dom';
import M from 'materialize-css';
import PropTypes from 'prop-types';

import getCurrentUser from '../../utils/auth';
import ROUTES from '../../utils/routes';

import notification from '../../assets/icons/bell.svg';
import search from '../../assets/icons/search.svg';
import InlineLoader from '../InlineLoader';
import Notifications from '../../containers/Notifications';
import config from '../../config';

class Header extends React.Component {
  componentDidMount() {
    const elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems);
  }

  logout = () => {
    localStorage.removeItem('user');
  };

  renderDropDown = user => (
    <li>
      {user && (
        <React.Fragment>
          <a className="dropdown-trigger black-text" href="!#" data-target="profile">
            <img
              src={user.image ? user.image : config.DEFAULT_USER_AVATAR}
              alt=""
              className="responsive-img small--avatar circle-img"
            />
          </a>
          <ul id="profile" className="dropdown-content  dropdown-content--nav">
            <li>
              <NavLink to={`${ROUTES.profile}/${user.username}`}>Profile</NavLink>
            </li>
            <li className="divider" tabIndex="-1" />
            <li>
              <NavLink to={`${ROUTES.createArticleUrl}`}>New Article</NavLink>
            </li>
            <li className="divider" tabIndex="-1" />
            <li>
              <NavLink to={`${ROUTES.profile}/${user.username}#profile`}>My articles</NavLink>
            </li>
            <li className="divider" tabIndex="-1" />
            <li>
              <NavLink to={`${ROUTES.profile}/${user.username}#bookmarks`}>Favorite</NavLink>
            </li>

            <li className="divider" tabIndex="-1" />
            <li>
              <NavLink to={`${ROUTES.home}`} onClick={this.logout}>
                Logout
              </NavLink>
            </li>

          </ul>
        </React.Fragment>
      )}
    </li>
  );

  renderIcons = user => (
    <React.Fragment>
      <li>
        <NavLink to={ROUTES.articles} className="black-text" id="search">
          <div>
            <img src={search} alt="" className="icon" />
          </div>
        </NavLink>
      </li>
      {user ? (
        <React.Fragment>
          <li className="relative">
            <a href="#!" className="dropdown-trigger black-text" data-target="notifications">
              <div>
                <img src={notification} alt="" className="icon" />
              </div>
            </a>
            <Notifications {...this.props} />
          </li>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <li>
            <NavLink to={ROUTES.signin} className="black-text">Sign in</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.signup} className="black-text">Sign up</NavLink>
          </li>
          <li>
            <NavLink to={`${ROUTES.createArticleUrl}`} className="waves-effect waves-light btn ">What's your story</NavLink>
          </li>
        </React.Fragment>

      )
    }
    </React.Fragment>
  );

  render() {
    const user = getCurrentUser();
    const { loading } = this.props;
    return (
      <React.Fragment>
        <header>
          <nav className="white">
            <div className="nav-wrapper p-l--30 p-r--30">
              <NavLink to="/" className="flow-text black-text">
                Authors' Haven
              </NavLink>

              <ul id="nav-mobile" className="right nav-icons hide-on-med-and-down">
                <li className="black-text hide search-input">
                  <input type="text" placeholder="Search..." className="search" />
                </li>
                {this.renderIcons(user)}
                {this.renderDropDown(user)}
              </ul>
            </div>
          </nav>
        </header>
        {loading && <InlineLoader />}
      </React.Fragment>
    );
  }
}


Header.propTypes = {
  loading: PropTypes.bool,
};

export default Header;
