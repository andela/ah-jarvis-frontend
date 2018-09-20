import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
    const notificationList = notifications.sort((x, y) => y.unread - x.unread);
    const data = notificationList.map((notification) => {
      if (!notification.actor) {
        return null;
      }
      if (notification.actor.type === 'user') {
        return null;
      }

      if (notification.actor.type === 'article') {
        return (
          <li
            key={notification.id}
            className="collection-item"
          >
            { notification.unread && (<div className="dot" />)}
            <img src={notification.actor.data.author.image} alt=" " className="responsive-img small--avatar " />
            <Link
              to={`${ROUTES.article}/${notification.actor.data.slug}`}
              onClick={() => {
                this.props.read(notification.id);
              }}
              className="notification_link"
            >
              <p>
                {notification.verb}
              </p>
            </Link>
          </li>
        );
      }
      return null;
    });
    return data;
  }

  render() {
    const { isFetching, success, notifications } = this.props.notifications;

    return (
      <React.Fragment>
        <ul id="notifications" className="dropdown-content collection">
          {isFetching || !success ? '' : (
            this.renderNotifications(notifications)
          )}
          <li
            className="collection-item"
          />
        </ul>
        {notifications.notifications && notifications.notifications.length > 1 && (
        <div className="badge">
          <p className="black-text">{notifications.notifications.filter(n => n.actor && n.actor.type === 'article' && n.unread).length}</p>
        </div>)
        }
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


Notification.propTypes = {
  notifications: PropTypes.shape({
    isFetching: PropTypes.bool.isRequired,
    success: PropTypes.bool.isRequired,
    notifications: PropTypes.object.isRequired,
    errors: PropTypes.object,
  }).isRequired,
  fetchNotifications: PropTypes.func.isRequired,
  read: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
