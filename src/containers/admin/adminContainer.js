import React, { Component } from 'react';
import { Link } from 'react-router';


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
          <Link to="analytics">Analytics</Link>
          <Link to="admin/bios">Edit Tour Guides</Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}


export default (AdminContainer);
