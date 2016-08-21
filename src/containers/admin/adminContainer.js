import React from 'react';
import { Link } from 'react-router';


const AdminContainer = (props) => {
  return (
    <div className="admin">
      <div className="navbarContainer">
        <Link className="homeLink" to="/">Back to DartBot</Link>
        <div className="pageLinks">
          <Link to="analytics">Analytics</Link>
          <Link to="bios">Edit Tour Guides</Link>
        </div>
      </div>
      {props.children}
    </div>
    );
};


export default (AdminContainer);
