import React, { PropTypes, Component } from 'react';
import '../style.scss';

export default class Pin extends Component {
  static propTypes = {
    text: PropTypes.string,
  };

  static defaultProps = {};

  render() {
    return (
      <div id="pinContainer">
        <p id="pinLetter">{this.props.text}</p>
      </div>
    );
  }
}
