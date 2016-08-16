import React, { Component } from 'react';
import { connect } from 'react-redux';

class BioContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bios: [],
      bio: {},
    };
  }
  render() {
    return (
      <div>
      blah
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  bios: state.profiles.bios,
  bio: state.profiles.bio,
});

const mapDispatchToProps = (dispatch) => {

};
export default connect(mapStateToProps, mapDispatchToProps)(BioContainer);
