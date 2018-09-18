/* eslint-disable */
import swal from 'sweetalert';
import M from 'materialize-css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import chevrondown from '../../assets/icons/chevron-down.svg';
import { deleteArticle } from '../Home/actions';

class ArticleActions extends Component {
  componentDidMount() {
    const el = document.querySelectorAll(`.${this.props.slug}`);
    M.Dropdown.init(el);
  }

  handleDelete = () => {
    const { slug, removeArticle } = this.props;
    console.log(slug);

    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this story.',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then(willDelete => {
      if (willDelete) {
        removeArticle(slug);
        swal('Poof! Your story was successfully deleted!', {
          icon: 'success',
        });
      } else {
        swal('Your sweet story is safe!');
      }
    });
  };

  render() {
    const { slug } = this.props;
    console.log(slug);

    return (
      <React.Fragment>
        <p className={`article-actions right ${slug} dropdown-trigger`} data-target={slug}>
          <img src={chevrondown} alt="" />
        </p>

        <ul id={slug} className="dropdown-content drop--small">
          <li>
            <Link to={`/article/${slug}`}>View</Link>
          </li>
          <li className="divider" tabIndex="-1" />
          <li>
            <Link to={`/article/${slug}/edit`}>Edit</Link>
          </li>
          <li className="divider" tabIndex="-1" />
          <li>
            <a onClick={this.handleDelete}>Delete</a>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      removeArticle: deleteArticle,
    },
    dispatch,
  );

export default connect(
  null,
  mapDispatchToProps,
)(ArticleActions);

ArticleActions.propTypes = {
  slug: PropTypes.string.isRequired,
  removeArticle: PropTypes.func.isRequired,
};
