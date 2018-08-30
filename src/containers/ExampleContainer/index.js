// This is a smart component which is aware of redux
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { sayHi } from './actions';

class ExampleContainer extends Component {
  static defaultProps = {
    message: 'Hello',
  };

  componentDidMount() {
    this.props.sayHi();
  }

  render() {
    const { message } = this.props;
    return <h1>{message}</h1>;
  }
}

ExampleContainer.propTypes = {
  message: PropTypes.string,
  sayHi: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  message: state.message.greetings,
});

const mapDispatchToProps = dispatch => bindActionCreators({ sayHi }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExampleContainer);
