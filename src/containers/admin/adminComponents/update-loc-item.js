import React, { Component } from 'react';
import { connect } from 'react-redux';
import Textarea from 'react-textarea-autosize';
import { updateLoc, deleteLoc } from '../../../actions';
import GoogleMap from 'google-map-react';
import NewLocPin from '../../../components/newLocPin';

class UpdateLocItem extends Component {
  static defaultProps = {
    zoom: 17,
  };
  constructor(props) {
    super(props);
    this.state = {
      loc: props.loc,
      editLoc: false,
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleGPSEdit = this.handleGPSEdit.bind(this);
    this.handleOpenClose = this.handleOpenClose.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.onUpdateClick = this.onUpdateClick.bind(this);
    this.onEditLocClick = this.onEditLocClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }

  onDeleteClick() {
    this.props.deleteLoc(this.state.loc.id);
  }

  onUpdateClick() {
    this.props.updateLoc(this.state.loc, this.state.loc.id);
  }

  onEditLocClick() {
    this.setState({editLoc: !this.state.editLoc});
  }

  onMapClick(event) {
    if(this.state.editLoc)
      this.setState({ loc: { ...this.state.loc, gps: { lat: event.lat, long: event.lng } } });
  }

  handleGPSEdit(field) {
    return (event) => {
      this.setState({
        loc: { ...this.state.loc, gps: { ...this.state.loc.gps, [field]: event.target.value } },
      });
    };
  }

  handleEdit(field) {
    return (event) => {
      this.setState({
        loc: { ...this.state.loc, [field]: event.target.value },
      });
    };
  }

  handleOpenClose(e) {
    e.target.classList.toggle('active');
    e.target.nextElementSibling.classList.toggle('show');
  }

  render() {
    const editLoc = () => {
      if(!this.state.editLoc){
        return (<div>Edit Location</div>);
      } else {
          return (<div>Stop Edit Location</div>);
      }
    }
    return (
      <div className="updateLocItem collapsibleBio">
        <button className="accordion" onClick={this.handleOpenClose}>{this.props.loc.title}</button>
        <div className="panel newbar">
          <div className="updateLocInput newbar">
            <input value={this.state.loc.title} onChange={this.handleEdit('title')} placeholder="Location Title" />
            <Textarea value={this.state.loc.content} onChange={this.handleEdit('content')} placeholder="Tour Content" />
            <div className="map">
              <div className="newLocMap">
                <GoogleMap
                  center={{ lat: parseFloat(this.props.loc.gps.lat), lng: parseFloat(this.props.loc.gps.long) }}
                  defaultZoom={this.props.zoom}
                  bootstrapURLKeys={{
                    key: 'AIzaSyDkwluTAgwsZKe2_u2cW2rvSe1dBVgz6zw',
                  }}
                  onClick={this.onMapClick}
                >
                  <NewLocPin lat={this.state.loc.gps.lat} lng={this.state.loc.gps.long} text="" />
                </GoogleMap>
              </div>
              <div className="newbar editLocBar">
                <label>Latitude</label>
                <input value={this.state.loc.gps.lat} onChange={this.handleGPSEdit('lat')} />
                <label>Longitude</label>
                <input value={this.state.loc.gps.long} onChange={this.handleGPSEdit('long')} />
                <button onClick={this.onEditLocClick}>{editLoc()}</button>
              </div>
            </div>
          </div>
          <div className="updateLocButtons">
            <button onClick={this.onUpdateClick}>Update</button>
            <button onClick={this.onDeleteClick}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  updateLoc,
  deleteLoc,
};


export default connect(null, mapDispatchToProps)(UpdateLocItem);
