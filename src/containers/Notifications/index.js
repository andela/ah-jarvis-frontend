import React, { Component } from 'react';
import { connect } from 'react-redux';
import M from 'materialize-css';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import fetchNotifications, { read } from './actions';
import ROUTES from '../../utils/routes';

class Notification extends Component {
  componentDidMount() {
    this.props.fetchNotifications();
    const elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems);
  }


  renderNotifications = ({ notifications }) => {
    const data = notifications.map((notification) => {
      if (notification.actor.type === 'user') {
        return null;
      }

      if (notification.actor.type === 'article') {
        return (
          <Link
            to={`${ROUTES.article}/${notification.actor.data.slug}`}
            onClick={() => {
              this.props.read(notification.id);
            }}
            key={notification.id}
          >
            <li className="collection-item" key={notification.verb}>
              <div className="dot" />
              <img src={notification.actor.data.author.image} alt=" " className="responsive-img small--avatar " />
              <p className="unread">
                <b>{notification.verb}</b>
              </p>
            </li>
          </Link>
        );
      }

      return null;
    });
    return data;
  }

  render() {
    console.log(this.props.notifications);
    const { isFetching, success, notifications } = this.props.notifications;
    console.log(notifications);

    return (
      <React.Fragment>
        <ul id="notifications" className="dropdown-content collection">
          {isFetching || !success ? '' : (
            this.renderNotifications(notifications)
          )}
        </ul>
        <div className="badge">
          {notifications.notifications && <p className="black-text">{notifications.notifications.length}</p> }
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ notifications }) => ({
  notifications,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchNotifications,
    read,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
