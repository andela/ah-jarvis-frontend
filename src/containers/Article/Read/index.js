import Dante from 'Dante2';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import M from 'materialize-css';

import Header from '../../../components/Header';
import { fetchArticle, rateSuccess } from './actions';
import AuthorDetails from '../../../components/AuthorDetails';
import ArticleDetailsLoader from '../../../components/Placehoders/ArticleDetailsLoader ';
import NotFound from '../../../components/NotFound';
import api from '../../../utils/api';
import getCurrentUser from '../../../utils/auth';

const user = getCurrentUser();

class Read extends Component {
  state = {
    rating: 0,
    alert: false,
    alertClass: 'success',
    alertMessage: '',
  }

  componentDidMount() {
    const { getArticle, match } = this.props;
    getArticle(match.params.id);
  }

  toaster = () => {
    M.toast({ html: this.state.alertMessage, className: this.state.alertClass });
  }

  onStarClick = (nextValue) => {
    console.log('value', nextValue);
    this.setState({ rating: nextValue });
    const rateData = {
      rate: {
        rate: nextValue,
      },
    };
    if (user) {
      this.setState({ alert: false });
      api({
        endpoint: `/articles/${this.props.match.params.id}/rate/`,
        method: 'POST',
        data: rateData,
        authenticated: true,
      }).then(() => {
        const { getRating, getArticle, match } = this.props;
        getRating();
        getArticle(match.params.id);
      }).catch((err) => {
        this.setState({ alert: true, alertMessage: err.rate.errors.message[0], alertClass: 'danger' });
      });
    } else {
      this.setState({ alert: true, alertMessage: 'Please Login to rate this article', alertClass: 'danger' });
    }
  }

  render() {
    const {
      isFetching, success, payload, errors, isRating,
    } = this.props.article;
    let data;
    if (payload.article) {
      try {
        data = JSON.parse(payload.article.body);
      } catch (e) {
        return <NotFound />;
      }
    }

    if (errors) {
      return <NotFound />;
    }
    return (
      <React.Fragment>
        <Header />

        <div className="container m-t--30">
          <div className="row">
            <div className="col s12">
              { this.state.alert ? this.toaster() : '' }
              {(isFetching || !success) && !isRating ? (
                <ArticleDetailsLoader />
              ) : (
                <React.Fragment>
                  <AuthorDetails
                    user={{ ...payload.article.author }}
                    date={payload.article.created_at}
                    averageRate={payload.article.average_rating ? payload.article.average_rating : this.state.rating}
                    onStarClick={this.onStarClick}
                  />
                  <Dante read_only content={data} />
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Read.propTypes = {
  article: PropTypes.shape({
    isFetching: PropTypes.bool.isRequired,
    isRating: PropTypes.bool.isRequired,
    success: PropTypes.bool.isRequired,
    payload: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
  }).isRequired,
  getArticle: PropTypes.func.isRequired,
  getRating: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.object.isRequired,
  }).isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({ getArticle: fetchArticle, getRating: rateSuccess }, dispatch);
const mapStateToProps = state => ({
  article: state.fetchArticle,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Read);
