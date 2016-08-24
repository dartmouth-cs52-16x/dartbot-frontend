import React from 'react';
import '../style.scss';

const About = (props) => {
  return (
    <div>
      <div id="aboutPadding" />
      <div id="about">
        <h2 className="aboutHeader">About DartBot</h2>
        <p className="aboutBody">Looking to learn more about <strong>Dartmouth College</strong>?<br /> Welcome to <strong>DartBot</strong>! <br />
          DartBot, the virtual tour guide, <em>is a revolutionary new way to tour a school</em>.<br /><strong>Send your location on campus to DartBot and DartBot
          will tell you about the closest landmark</strong> on the Dartmouth College tour. Wander around Dartmouth and enjoy the freedom
          of a DartBot tour!<br />
          <em>Have a question about Dartmouth?</em><br /> <strong>DartBot can help!</strong><br /> Ask <strong>DartBot</strong> a question and it will send you back a college-approved response.
          The ultra intelligent <strong>DartBot will be able to recognize your questions and help you out!</strong> <br />
          <em>Just went on a tour?</em> <br /><em>Planning to go on a tour?</em><br /> <em>Just want to learn more about some of Dartmouth's incredible tour guides?</em><br /> <strong>Click
          around this website to learn more!</strong>
        </p>
      </div>
    </div>
  );
};

export default About;
