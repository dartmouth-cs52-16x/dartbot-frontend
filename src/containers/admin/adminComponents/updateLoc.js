import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLocs, createLoc } from '../../../actions';
import UpdateLocItem from './update-loc-item';
import Textarea from 'react-textarea-autosize';
import GoogleMap from 'google-map-react';
import Pin from '../../../components/pin';

class UpdateLoc extends Component {
  static defaultProps = {
    center: { lat: 43.70357989999999, lng: -72.28878229999998 },
    zoom: 17,
  };
  constructor(props) {
    super(props);
    this.state = {
      newLoc: {
        title: '',
        gps: { lat: '', long: '' },
        content: '',
      },
    };
    this.onNewLocClick = this.onNewLocClick.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleOpenClose = this.handleOpenClose.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }

  componentWillMount() {
    this.props.fetch();
  }

  onNewLocClick() {
    this.props.create(this.state.newLoc);
  }

  onMapClick(event) {
    console.log(event);
    this.setState({ newLoc: { ...this.state.newLoc, gps: { lat: event.lat, long: event.lng } } });
  }

  handleEdit(field) {
    return (event) => {
      this.setState({
        newLoc: { ...this.state.newLoc, [field]: event.target.value },
      });
    };
  }

  handleOpenClose(e) {
    e.target.classList.toggle('active');
    e.target.nextElementSibling.classList.toggle('show');
  }

  render() {
    const locs = this.props.locs.map((loc) => {
      return (
        <div>
          <UpdateLocItem loc={loc} />
        </div>
      );
    });
    return (
      <div id="updateLocs">
        <div id="newLoc" className="collapsibleBio">
          <button className="accordion" onClick={this.handleOpenClose}>New</button>
          <div className="panel newbar">
            <input value={this.state.newLoc.title} onChange={this.handleEdit('title')} placeholder="Location Title" />
            <Textarea value={this.state.newLoc.content} onChange={this.handleEdit('content')} placeholder="Tour Content" />
            <center>
              <p>(Click to choose location:)</p>
              <div className="newLocMap">
                <GoogleMap
                  defaultCenter={this.props.center}
                  defaultZoom={this.props.zoom}
                  bootstrapURLKeys={{
                    key: 'AIzaSyDkwluTAgwsZKe2_u2cW2rvSe1dBVgz6zw',
                  }}
                  onClick={this.onMapClick}
                >
                  <Pin lat={this.state.newLoc.gps.lat} lng={this.state.newLoc.gps.long} text="here" />
                </GoogleMap>
              </div>
            </center>
            <button onClick={this.onNewLocClick}> Add New Location </button>
          </div>
        </div>
        {locs}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  locs: state.locs.all,
});

const mapDispatchToProps = (dispatch) => {
  return {
    create: (loc) => {
      dispatch(createLoc(loc));
    },
    fetch: () => {
      dispatch(fetchLocs());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateLoc);
