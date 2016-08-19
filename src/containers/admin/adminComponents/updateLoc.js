import React, { Component } from 'react';

class UpdateLoc extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  onNewLocClick() {

  }

  render() {
    return (

    );
  }
}

const mapStateToProps = (state) => {
  locs: state.locs.all,
}

export default connect(mapStateToProps, null)(UpdateLoc)
