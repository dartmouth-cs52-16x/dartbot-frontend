import React from 'react';

const Bot = (props) => {
  return (
    <div id="bot">
      <h1>Meet Dart Bot</h1>
      <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdartbot&tabs=messages&width=500&height=300&small_header=false&adapt_container_width=true&hide_cover=true&show_facepile=true&appId=1780533645501545"
        width="500"
        height="300"
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling="no"
        frameBorder="0"
        allowTransparency="true"
      >
      </iframe>
    </div>
  );
};

export default Bot;
