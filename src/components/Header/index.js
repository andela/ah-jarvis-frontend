import React from 'react';

const Header = () => (
  <header>
    <nav className="white">
      <div className="nav-wrapper p-l--30 p-r--30">
        <a href="#" className="flow-text black-text">
          Authors' Haven
        </a>
        <a href="#" data-target="mobile-demo" className="sidenav-trigger">
          <i className="material-icons black-text">menu</i>
        </a>

        <ul id="nav-mobile" className="right nav-icons hide-on-med-and-down">
          <li className="black-text hide search-input">
            <input type="text" placeholder="Search..." className="search" />
          </li>
          <li>
            <a href="#" className="black-text" id="search">
              <div>
                {/* <svg className="icon">
                                <use xlink:href="../../static/assets/icons/sprite.svg#icon-search"></use>
                            </svg> */}
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="black-text">
              {/* <svg className="icon">
                            <use xlink:href="../../static/assets/icons/sprite.svg#icon-bell"></use>
                        </svg> */}
            </a>
          </li>
          <li>
            <a className="dropdown-trigger black-text" href="#" data-target="profile">
              <img
                src="https://randomuser.me/api/portraits/med/men/83.jpg"
                alt=""
                className="responsive-img small--avatar circle-img"
              />
            </a>
            <ul id="profile" className="dropdown-content">
              <li>
                <a href="#!">Profile</a>
              </li>
              <li className="divider" tabIndex="-1" />
              <li>
                <a href="/ui/public/articles/create/">New Article</a>
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
