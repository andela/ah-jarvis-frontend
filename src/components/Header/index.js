import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav className="white">
      <div className="nav-wrapper p-l--30 p-r--30">
        <Link to="/" className="flow-text black-text">
          Authors' Haven
        </Link>

        <ul id="nav-mobile" className="right nav-icons hide-on-med-and-down">
          <li className="black-text hide search-input">
            <input type="text" placeholder="Search..." className="search" />
          </li>
          <li>
            <a href="!#" className="black-text" id="search">
              search
            </a>
          </li>
          <li>
            <a href="!#" className="black-text">
              notification
            </a>
          </li>
          <li>
            <a className="dropdown-trigger black-text" href="!#" data-target="profile">
              <img
                src="https://randomuser.me/api/portraits/med/men/83.jpg"
                alt=""
                className="responsive-img small--avatar circle-img"
              />
            </a>
            <ul id="profile" className="dropdown-content">
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li className="divider" tabIndex="-1" />
              <li>
                <Link to="/article/new">New Article</Link>
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
                <a href="#!">Sign out</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
