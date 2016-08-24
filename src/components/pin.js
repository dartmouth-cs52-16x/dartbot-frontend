import React, { PropTypes, Component } from 'react';
import '../style.scss';

export default class Pin extends Component {

  static propTypes = {
    content: PropTypes.string,
    text: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.renderHover = this.renderHover.bind(this);
  }
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
