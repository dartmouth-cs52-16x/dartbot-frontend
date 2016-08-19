import React, { Component } from 'react';

class CollapsibleBio extends Component {
  constructor(props) {
    super(props);

    this.state = { };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleOpenClose = this.handleOpenClose.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleOpenClose(e) {
    e.target.classList.toggle('active');
    e.target.nextElementSibling.classList.toggle('show');
    this.setState({ });
  }
  handleImage(e) {
    const file = e.target.files[0];
    if (file != null) {
      // const reader = new FileReader();

      // reader.onload = (upload) => {
      this.setState({
        file,
      });
      // };
      // reader.readAsDataURL(file);
    }
  }
  handleEdit(field) {
    return (e) => {
      this.setState({
        bio: { ...this.state.bio, [field]: e.target.value },
      });
    };
  }
  handleSave() {
    // create an updated bio object
    const result = {};
    for (const key of Object.keys(this.props.bio)) {
      if (this.state.bio[key]) result[key] = this.state.bio[key];
      else result[key] = this.props.bio[key];
    }

    if (this.props.update) { // create a new bio
      this.props.update(result, this.state.file, this.props.bio._id);
    } else {  // update the bio
      this.props.create(result, this.state.file);
      return;
    }
  }
  handleDelete() {
    this.props.delete(this.props.bio._id);
  }
  render() {
    const header = this.props.bio.name ? this.props.bio.name : 'New';
    return (
      <div className="collapsbile-bio">
        <button className="accordion" onClick={this.handleOpenClose}>{header}</button>
        <div className="panel">
          <div> <input type="file" id="file-input" onChange={this.handleImage} /> </div>
          <div> Name: <input type="text" onChange={this.handleEdit('name')} defaultValue={this.props.bio.name} /> </div>
          <div> Year: <input type="text" onChange={this.handleEdit('year')} defaultValue={this.props.bio.year} /> </div>
          <div> Major: <input type="text" onChange={this.handleEdit('major')} defaultValue={this.props.bio.major} /> </div>
          <div> Content: <input type="text" onChange={this.handleEdit('content')} defaultValue={this.props.bio.content} /> </div>
          <div> <button onClick={this.handleSave}>Save</button> <button onClick={this.handleDelete}> Delete </button> </div>
        </div>
      </div>
    );
  }
}
export default CollapsibleBio;
