import React, { Component } from 'react';

class CollapsibleBio extends Component {
  constructor(props) {
    super(props);

    this.state = { bio: { name: '', major: '', year: '', content: '' }, error: false, file: null };
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

    if (this.props.update) { // update bio
      this.props.update(result, this.state.file);
    } else {  // create new bio
      if (!this.state.bio.name || !this.state.bio.major || !this.state.bio.year || !this.state.bio.content) {
        this.setState({ error: true });
      } else {
        this.props.create(result, this.state.file);
        this.setState({ error: false });
      }
      return;
    }
  }
  handleDelete() {
    this.props.delete(this.props.bio._id);
  }
  render() {
    const header = this.props.bio.name ? this.props.bio.name : 'New';
    const error = this.state.error ? 'Fill out all fields before submitting!' : '';
    const imgURL = this.props.bio.image ? this.props.bio.image : 'http://www.patriotenergygroup.com/images2/tba.png';
    return (
      <div className="collapsible-bio">
        <button className="accordion" onClick={this.handleOpenClose}>{header}</button>
        <div className="panel">
          <div className="container">
            <div className="column-form image-column">
              <div> <img role="presentation" src={imgURL} /> </div>
              <div> <label> Upload </label> <input type="file" name="Upload" id="file-input" onChange={this.handleImage} /> </div>
            </div>
            <div className="column-form bigger">
              <div className="input"> Name: <textarea onChange={this.handleEdit('name')} defaultValue={this.props.bio.name} /> </div>
              <div className="input"> Year: <textarea onChange={this.handleEdit('year')} defaultValue={this.props.bio.year} /> </div>
              <div className="input"> Major: <textarea onChange={this.handleEdit('major')} defaultValue={this.props.bio.major} /> </div>
            </div>
            <div className="column-form bigger">
              <div> <label> Content: </label> <textarea onChange={this.handleEdit('content')} defaultValue={this.props.bio.content} /> </div>
            </div>
          </div>
          <div className="error"> {error}</div>
          <div> <button className="save"onClick={this.handleSave}>Save</button> <button className="save delete"onClick={this.handleDelete}> Delete </button> </div>
        </div>
      </div>
    );
  }
}
export default CollapsibleBio;
