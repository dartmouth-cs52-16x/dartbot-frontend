import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { signoutUser, removeError } from '../../actions';

import Error from '../error';


const AdminContainer = (props) => {
  const returnClick = () => {
    props.signoutUser();
  };
  props.removeError();
  return (
    <div>
      <div className="navbarContainer">
        <a className="homeLink" onClick={returnClick}>Back to DartBot</a>
        <div className="pageLinks">
          <Link to="admin/analytics">Analytics</Link>
          <Link to="admin/bios">Edit Tour Guide Profiles</Link>
          <Link to="admin/locs">Edit Tour Locations </Link>
        </div>
      </div>
      <Error />
      {props.children}
    </div>
    );
};


export default connect(null, { signoutUser, removeError })(AdminContainer);
