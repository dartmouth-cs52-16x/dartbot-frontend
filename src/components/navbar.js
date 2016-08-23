import React from 'react';
import { Link } from 'react-router';
import '../style.scss';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="navbarContainer">
        <Link className="homeLink" to="/">DartBot</Link>
        <div className="pageLinks">
          <Link id="aboutLink" to="about">About</Link>
          <Link id="bioLink" to="profiles">Tour Guide Profiles</Link>
          <Link id="botLink" to="tour">The Tour</Link>
          <Link id="adminLink" to="/admin">Admin</Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
