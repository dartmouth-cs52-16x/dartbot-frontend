import React from 'react';

const Bot = (props) => {
  return (
    <div id="botpage">
      <h1>Meet Dart Bot</h1>
      <div id="bot">
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdartbot&tabs=messages&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1780533645501545"
          width="500"
          height="600"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder="0"
          allowTransparency="true"
        >
        </iframe>
      </div>
    </div>
  );
};

export default Bot;
