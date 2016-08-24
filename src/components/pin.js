import React, { PropTypes, Component } from 'react';
import '../style.scss';

export default class Pin extends Component {
  constructor(props) {
    super(props);
    this.renderHover = this.renderHover.bind(this);
  }

  renderHover() {
    if (this.props.$hover) {
      return (<div />);
    } else {
      return (
        <div className="pinContainer">
          <p className="pinLetter">{this.props.text}</p>
        </div>);
    }
  }
  render() {
    return (
      <div>
        {this.renderHover()}
      </div>
    );
  }
}
