import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import Pin from './pin.js';
import { fetchLocs } from '../actions';
import { connect } from 'react-redux';

class Map extends Component {
  static defaultProps = {
    center: { lat: 43.70357989999999, lng: -72.28878229999998 },
    zoom: 18,
  };
  componentWillMount() {
    this.props.fetchLocs();
  }

  render() {
    return (
      <div id="mapContainer">
        <GoogleMap
          id="googlemapContainer"
          options={{ scrollwheel: false, minZoom: 18, maxZoom: 18, disableDefaultUI: true }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          bootstrapURLKeys={{
            key: 'AIzaSyDkwluTAgwsZKe2_u2cW2rvSe1dBVgz6zw',
          }}
        >
        {this.props.locs.map(loc => {
          return (
            <Pin
              key={loc._id}
              lat={loc.gps.lat}
              lng={loc.gps.long}
              text={loc.title}
              content={loc.content}
            />
          );
        })}
        </GoogleMap>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  locs: state.locs.all,
});

export default connect(mapStateToProps, { fetchLocs })(Map);
