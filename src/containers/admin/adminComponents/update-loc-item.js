import React, { Component } from 'react';
import { connect } from 'react-redux';
import Textarea from 'react-textarea-autosize';
import { updateLoc, deleteLoc } from '../../../actions';
import GoogleMap from 'google-map-react';
import Pin from '../../../components/pin';

class UpdateLocItem extends Component {
  static defaultProps = {
    center: { lat: 43.70357989999999, lng: -72.28878229999998 },
    zoom: 17,
  };
  constructor(props) {
    super(props);
    this.state = {
      loc: props.loc,
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleOpenClose = this.handleOpenClose.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.onUpdateClick = this.onUpdateClick.bind(this);
  }

  onDeleteClick() {
    this.props.deleteLoc(this.state.loc.id);
  }

  onUpdateClick() {
    this.props.updateLoc(this.state.loc, this.state.loc.id);
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
    console.log(this.state);
    return (
      <div className="updateLocItem collapsibleBio">
        <button className="accordion" onClick={this.handleOpenClose}>{this.props.loc.title}</button>
        <div className="panel newbar">
          <div className="updateLocInput newbar">
            <input value={this.state.loc.title} onChange={this.handleEdit('title')} placeholder="Location Title" />
            <Textarea value={this.state.loc.content} onChange={this.handleEdit('content')} placeholder="Tour Content" />
            <center>
              <div className="newLocMap">
                <GoogleMap
                  defaultCenter={this.props.center}
                  center={{ lat: parseFloat(this.state.loc.gps.lat), lng: parseFloat(this.state.loc.gps.long) }}
                  defaultZoom={this.props.zoom}
                  bootstrapURLKeys={{
                    key: 'AIzaSyDkwluTAgwsZKe2_u2cW2rvSe1dBVgz6zw',
                  }}
                >
                  <Pin lat={this.state.loc.gps.lat} lng={this.state.loc.gps.long} text="" />
                </GoogleMap>
              </div>
            </center>
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
