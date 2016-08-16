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
      <div id="navbarContainer">
        <Link id="homeLink" to="/">DartBot</Link>
        <div id="pageLinks">
          <Link id="bioLink" to="profiles">Bio</Link>
          <Link id="botLink" to="bot">Bot</Link>
          <Link id="adminLink" to="admin">Admin</Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
