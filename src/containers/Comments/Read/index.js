import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import ArticleDetailsLoader from '../../../components/Placehoders/ArticleDetailsLoader ';

import { getComments } from './actions';
import CommentBlock from '../../../components/CommentBlock';

class ReadComments extends Component {
  componentDidMount() {
    const { fetchComments, slug } = this.props;
    fetchComments(slug);
  }

  results = payload => payload.comment.results

  render() {
    const {
      isFetching, success, payload,
    } = this.props.comments;
    return (
      <div>
        {(isFetching || !success) ? (
          <ArticleDetailsLoader />
        ) : (
          this.results(payload)
            .map(data => (
              <CommentBlock
                body={data.body}
                createdAt={data.createdAt}
                user={data.author}
              />
            ))
        )}
      </div>
    );
  }
}

ReadComments.propTypes = {
  comments: PropTypes.shape({
    success: PropTypes.isRequired,
    errors: PropTypes.isRequired,
    failure: PropTypes.isRequired,
    isFetching: PropTypes.isRequired,
    payload: PropTypes.isRequired,
  }),
  slug: PropTypes.string.isRequired,
  fetchComments: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchComments: getComments,
  },
  dispatch,
);

const mapStateToProps = state => ({
  comments: state.getComments,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReadComments);
