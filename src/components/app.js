import React, { Component } from 'react';
import Error from '../containers/error';

// example class based component (smart component)
class App extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
  }

  render() {
    return (
      <div>
        <Error />
        {this.props.children}
      </div>
    );
  }
}

export default App;
