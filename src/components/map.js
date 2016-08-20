import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import Pin from './pin.js';
import { fetchLocs } from '../actions';
import { connect } from 'react-redux';

class Map extends Component {
  static defaultProps = {
    center: { lat: 43.70357989999999, lng: -72.28878229999998 },
    zoom: 17,
  };

  constructor(props) {
    super(props);

    this.renderPins = this.renderPins.bind(this);
  }
  componentWillMount() {
    this.props.fetchLocs();
  }

  renderPins() {
    this.props.locs.map(loc => {
      return <Pin lat={loc.gps.lat} lng={loc.gps.long} text={loc.title} content={loc.content} />;
    });
  }

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
        >
          {this.renderPins()}
          <Pin lat={43.70357989999999} lng={-72.28878229999998} text={'A'} />
        </GoogleMap>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  locs: state.locs.all,
});

export default connect(mapStateToProps, { fetchLocs })(Map);
