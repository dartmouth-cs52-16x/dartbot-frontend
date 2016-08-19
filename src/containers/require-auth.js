import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

export default function (ComposedComponent) {
  class RequireAuth extends Component {
    componentWillMount() {
      if (!this.props.authenticated) {
        browserHistory.push('/signin');
      }
    }
    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        browserHistory.push('/signin');
      }
    }
    render() {
      return (
        <div>
          <ComposedComponent {...this.props} />
        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      authenticated: state.admin.authenticated,
    };
  };

  return connect(mapStateToProps, null)(RequireAuth);
}
