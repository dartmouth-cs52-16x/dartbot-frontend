import React from 'react';
import { Link } from 'react-router';


const AdminContainer = (props) => {
  return (
    <div className="admin">
      <div id="adminNav">
        <Link to="analytics">Analytics</Link>
        <Link to="admin/bios">Edit Tour Guides</Link>
      </div>
      {props.children}
    </div>
    );
};


export default (AdminContainer);
