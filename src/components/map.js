// import React from 'react';
// import '../style.scss';

// trying to get this to work https://jsfiddle.net/paul_lecam/q2v7t59h/
// https://github.com/PaulLeCam/react-leaflet/blob/master/docs/Getting%20started.md
const React = window.React;
const { Map, TileLayer, Marker, Popup } = window.ReactLeaflet;

class MapDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13,
    };
  }
  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <span>A pretty CSS3 popup. <br /> Easily customizable.</span>
          </Popup>
        </Marker>
      </Map>
    );
  }
}
window.ReactDOM.render(<MapDisplay />, document.getElementById('container'));
