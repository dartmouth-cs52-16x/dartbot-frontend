import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { getData } from '../../actions';

class AdminContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="admin">
        <div id="adminNav">
          <Link to="admin/analytics">Analytics</Link>
          <Link to="admin/newbio">New Tour Guide Profile</Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.admin.data,
});


export default connect(mapStateToProps, { getData })(AdminContainer);
