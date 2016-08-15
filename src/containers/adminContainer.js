import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      data: [],
    };
  }
  render() {
    return (
      <div />
    );
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.admin.authenticated,
  data: state.admin.data,
});

const mapDispatchToProps = (dispatch) => {

};
export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer);
