import React from 'react';
import { NavLink } from 'react-router-dom';
import M from 'materialize-css';

import getCurrentUser from '../../utils/auth';
import ROUTES from '../../utils/routes';

import notification from '../../assets/icons/bell.svg';
import search from '../../assets/icons/search.svg';
import config from '../../config';


class Header extends React.Component {
  componentDidMount() {
    const el = document.querySelector('.dropdown-trigger');
    M.Dropdown.init(el);
  }

  logout = () => {
    localStorage.removeItem('user');
    return window.location.replace(ROUTES.home);
  }

  renderDropDown = user => (
    <li>
      { user && (
        <React.Fragment>
          <a className="dropdown-trigger black-text" href="!#" data-target="profile">
            <img
              src={user.image ? user.image : config.DEFAULT_USER_AVATAR}
              alt=""
              className="responsive-img small--avatar circle-img"
            />
          </a>
          <ul id="profile" className="dropdown-content">
            <li>
              <NavLink to={`${ROUTES.profile}/${user.username}`}>Profile</NavLink>
            </li>
            <li className="divider" tabIndex="-1" />
            <li>
              <NavLink to={`${ROUTES.createArticleUrl}`}>New Article</NavLink>
            </li>
            <li className="divider" tabIndex="-1" />
            <li>
              <a href="#!">My articles</a>
            </li>
            <li className="divider" tabIndex="-1" />
            <li>
              <a href="#!">Favorites</a>
            </li>
            <li className="divider" tabIndex="-1" />
            <li>
              <a href="#!" onClick={this.logout}>Logout</a>
            </li>
          </ul>
        </React.Fragment>)
        }
    </li>
  )

  renderIcons = user => (
    <React.Fragment>
      <li>
        <NavLink to={ROUTES.articles} className="black-text" id="search">
          <div>
            <img src={search} alt="" className="icon" />
          </div>
        </NavLink>

      </li>
      <li>
        {user ? (
          <a href="#!" className="black-text" id="search">
            <div>
              <img src={notification} alt="" className="icon" />
            </div>
          </a>
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
      </li>
    </React.Fragment>
  )

  render() {
    const user = getCurrentUser();
    return (
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
    );
  }
}

export default Header;
