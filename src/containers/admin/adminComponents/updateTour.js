import React, { Component } from 'react';
import { connect } from 'react-router';


class UpdateTour extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      content: '',
      image: '',
    };
  }

  onNameChange(event) {
    this.setState({
      name: event.target.value,
    });
  }

  onContentChange(event) {
    this.setState({
      content: event.target.value,
    });
  }

  onClick() {

  }


  render() {
    return (
      <div>
        <input onChange={this.onNameChange} placeholder="Name" />
        <input onChange={this.onContentChange} placeholder="Description" />
        <button onClick={this.onClick}>New Tour Guide Bio</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  bios: state.profiles.bios,
});

export default connect(mapStateToProps, null)(UpdateTour);
