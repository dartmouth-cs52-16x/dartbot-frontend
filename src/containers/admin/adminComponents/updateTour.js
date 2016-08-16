import React, { Component } from 'react';
import { connect } from 'react-router';


class UpdateTour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: 'newbio',
    };
  }

  onNewBioClick() {
    this.setState({ nav: 'newbio' });
  }
  onUpdateBioClick() {
    this.setState({ nav: 'updatebio' });
  }


  render() {
    return (
      <div>
        <div id="adminNav">
          <a onClick={this.onNewBioClick}>New Bio</a>
          <a onClick={this.onUpdateBioClick}>Update Bio</a>
        </div>
        {this.renderInput()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  bios: state.profiles.bios,
});

export default connect(mapStateToProps, null)(UpdateTour);
