import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchIntent, updateIntent } from '../../../actions/intentActions';
import Textarea from 'react-textarea-autosize';
import UpdateIntentItem from './update-intent-item';

class UpdateIntent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newIntent: {
        query: '',
        response: '',
      },
    };
    this.onNewIntentClick = this.onNewIntentClick.bind(this);
    this.onIntentClick = this.onIntentClick.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleOpenClose = this.handleOpenClose.bind(this);
  }

  componentWillMount() {
    this.props.fetchIntent();
  }

  onIntentClick(intent) {
    this.setState({ newIntent: { query: intent.query, response: intent.response } });
  }

  onNewIntentClick() {
    this.props.updateIntent(this.state.newIntent);
    this.setState({
      newIntent: {
        query: '',
        response: '',
      },
    });
  }

  handleEdit(field) {
    return (event) => {
      this.setState({
        newIntent: { ...this.state.newIntent, [field]: event.target.value },
      });
    };
  }

  handleOpenClose(e) {
    e.target.classList.toggle('active');
    e.target.nextElementSibling.classList.toggle('show');
  }

  render() {
    const intentItems = this.props.intent.map(intent => {
      return (<UpdateIntentItem intent={intent} onIntentClick={this.onIntentClick} />);
    });
    return (
      <div id="updateIntents">
        <div id="newIntent" className="collapsibleBio">
          <button className="accordion" onClick={this.handleOpenClose}>Update or Add Query Responses</button>
          <div className="panel newbar">
            <input value={this.state.newIntent.query} onChange={this.handleEdit('query')} placeholder="Query/Key Words" />
            <Textarea value={this.state.newIntent.response} onChange={this.handleEdit('response')} placeholder="Response" />
            <button onClick={this.onNewIntentClick}> Add/Update Query Response </button>
          </div>
        </div>
        <center>
          <table border>
            <tr className="tableHeading">
              <th className="query" >Query</th>
              <th>Response</th>
            </tr>
            {intentItems}
          </table>
        </center>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  intent: state.intents,
});

const mapDispatchToProps = {
  fetchIntent,
  updateIntent,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateIntent);
