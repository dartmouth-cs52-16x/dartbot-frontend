import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';

class UpdateLocItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loc: props.loc,
    };
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(field) {
    return (e) => {
      this.setState({
        loc: { ...this.state.loc, [field]: event.target.value },
      });
    };
  }

// Use goole api to select locations? (gps)  map.

  render() {
    return (
      <div className="updateLocItem">
        <div className="updateLocInput">
          <input value={this.state.loc.title} onChange={this.handleEdit('title')} placeholder="Location Title" />
          <input value={this.state.loc.gps.lat} onChange={this.handleEdit('gps.lat')} placeholder="GPS Latitude" />
          <input value={this.state.loc.gps.long} onChange={this.handleEdit('gps.long')} placehodler="GPS Longitude" />
          <Textarea value={this.state.loc.content} onChange={this.handleEdit('content')} placeholder="Tour Content" />
        </div>
        <div className="updateLocButtons">
          <button onClick={this.props.update(this.state.loc, this.state.loc.id)}>Update</button>
          <button onClick={this.props.delete(this.state.loc.id)}>Delete</button>
        </div>
      </div>
    );
  }
}

export default UpdateLocItem;
