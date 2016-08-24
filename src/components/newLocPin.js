import React, { PropTypes, Component } from 'react';
import '../style.scss';

export default class NewLocPin extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="pinContainer">
        <p className="pinLetter">{this.props.text}</p>
      </div>
    );
  }
}
