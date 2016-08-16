import React, { Component } from 'react';
// import shouldPureComponentUpdate from 'react-pure-render/function';
import GoogleMap from 'google-map-react';

export default class Map extends Component {
  static defaultProps = {
    center: { lat: 59.938043, lng: 30.337157 },
    zoom: 9,
    greatPlaceCoords: { lat: 59.724465, lng: 30.080121 },
  };

  constructor(props) {
    super(props);
  }

  // shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    return (
      <div id="mapContainer">
        <GoogleMap
          id="googlemapContainer"
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          bootstrapURLKeys={{
            key: 'AIzaSyDkwluTAgwsZKe2_u2cW2rvSe1dBVgz6zw',
          }}
        />
      </div>
    );
  }
}
