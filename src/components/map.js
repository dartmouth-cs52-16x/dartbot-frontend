import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import Pin from './pin.js';
import { fetchLocs } from '../actions';
import { connect } from 'react-redux';

class Map extends Component {
  static defaultProps = {
    center: { lat: 43.70357989999999, lng: -72.28878229999998 },
    zoom: 16,
  };

  constructor(props) {
    super(props);

    this.renderPins = this.renderPins.bind(this);
  }
  componentWillMount() {
    this.props.fetchLocs();
  }

  renderPins() {
    // this.props.locs.map(loc => {
    //   console.log(loc);
    //   console.log(loc.gps.lat);
    //   console.log(loc.gps.long);
    //   console.log(loc.title);
    //   console.log(loc.content);
    //   const latitude = loc.gps.lat;
    //   const longitude = loc.gps.long;
    //   // content={loc.content}
    //   return (
    //     <Pin
    //       lat={latitude}
    //       lng={longitude}
    //       text={'A'}
    //     />
    //   );
    // });
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
        {this.props.locs.map(loc => {
          return (
            <Pin
              lat={loc.gps.lat}
              lng={loc.gps.long}
              text={loc.title}
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
