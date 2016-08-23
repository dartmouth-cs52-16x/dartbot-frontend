import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';

class UpdateIntentItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intent: props.intent,
    };
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(field) {
    return (e) => {
      this.setState({
        loc: { ...this.state.intent, [field]: event.target.value },
      });
    };
  }

// Use goole api to select locations? (gps)  map.

  render() {
    return (
      <div className="updateIntentItem">
        <div className="updateIntentInput">
          <input value={this.state.intent.query} onChange={this.handleEdit('query')} placeholder="Query" />
          <Textarea value={this.state.intent.response} onChange={this.handleEdit('response')} placeholder="Response" />
        </div>
        <div className="updateIntentButtons">
          <button onClick={this.props.update(this.state.intent, this.state.intent.id)}>Update</button>
          <button onClick={this.props.delete(this.state.intent.id)}>Delete</button>
        </div>
      </div>
    );
  }
}

export default UpdateIntentItem;
