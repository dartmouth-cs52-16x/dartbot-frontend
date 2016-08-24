import React, { PropTypes, Component } from 'react';
import '../style.scss';

export default class Pin extends Component {
  static propTypes = {
    content: PropTypes.string,
    text: PropTypes.string,
  };

  static defaultProps = {};

  renderHover() {
    if (this.props.$hover) {
      return (
        <div id="contentBlock">{this.props.content}</div>
      );
    }
    return (
      <div />
    );
  }

  render() {
    return (
      <div className="pinContainer">
        <p className="pinLetter">{this.props.text}</p>
        {this.renderHover()}
      </div>
    );
  }
}
