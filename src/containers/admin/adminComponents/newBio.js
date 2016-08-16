import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBio } from '../../../actions';


class NewBio extends Component {
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

/*  onClick() {
    this.props.createBio(this.state);
  }*/

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


export default connect(null, { createBio })(NewBio);
