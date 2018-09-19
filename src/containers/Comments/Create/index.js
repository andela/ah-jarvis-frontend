import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import { createComment } from './actions';
import { getComments } from '../Read/actions';
import getCurrentUser from '../../../utils/auth';
import CommentInput from '../../../components/CommentInput';

const user = getCurrentUser();

class NewComment extends Component {
  static defaultProps = {
    comments: {},
  };

  state = {
    comment: '',
  };

  renderCommentInput = (name, failure, errors, value) => (
    <CommentInput
      name={`${name}`}
      label={`${name}`}
      type={`${name}`}
      value={value}
      onChange={this.handleChange}
      failure={failure}
      errors={errors}
      user={user}
      handleSubmitComment={this.handleSubmitComment}
    />
  );

  handleChange = (e) => {
    this.setState({ comment: e.target.value });
  };

  renderCommentButton = isCommenting => (
    <div className="row">
      <div className="input-field col s12">
        <button className="btn waves-effect waves-light btn--block" type="submit" name="action">
          {isCommenting ? 'Sending...' : 'Publish'}
        </button>
      </div>
    </div>
  );

  handleSubmitComment = (e) => {
    e.preventDefault();
    const data = {
      comment: {
        body: this.state.comment,
      },
    };
    this.setState({ comment: '' });
    this.props.createComment(data, this.props.slug);
    this.props.getComments(this.props.slug);
  };

  render() {
    const { errors, failure } = this.props.comments;
    return (
      <div>
        {this.renderCommentInput('Comment', failure, errors, this.state.comment)}
      </div>
    );
  }
}

NewComment.propTypes = {
  comments: PropTypes.shape({
    success: PropTypes.isRequired,
    errors: PropTypes.isRequired,
    failure: PropTypes.isRequired,
    isFetching: PropTypes.isRequired,
  }),
  getComments: PropTypes.func.isRequired,
  createComment: PropTypes.func.isRequired,
  slug: PropTypes.string.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    createComment, getComments,
  },
  dispatch,
);

const mapStateToProps = state => ({
  comments: state.comments,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewComment);
