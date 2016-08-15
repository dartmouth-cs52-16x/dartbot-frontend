import React from 'react';
import { Link } from 'react-router';


// function based "dumb" component with no state
const Welcome = () => {
  return (
    <div>
      Hello World
      <Link to="bot">hi</Link>
    </div>
  );
};


export default Welcome;
