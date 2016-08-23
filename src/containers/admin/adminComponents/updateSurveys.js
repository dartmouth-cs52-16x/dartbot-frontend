import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSurvey } from '../../../actions';
import Textarea from 'react-textarea-autosize';

class UpdateSurvey extends Component {

  constructor(props) {
    super(props);
    this.state = {
      survey: {
        question: '',
      },
      error: '',
    };
    this.onNewClick = this.onNewClick.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  onNewClick() {
    if (this.state.survey.question == '') {
      window.alert('Empty field not allowed');
    } else {
      this.props.createSurvey(this.state.survey);
      this.setState({ survey: { question: '' } });
    }
  }

  handleEdit(field) {
    return (event) => {
      this.setState({ survey: { ...this.state.survey, [field]: event.target.value } });
    };
  }


  render() {
    return (
      <div id="updateIntents">
        <div className="panel show newbar">
          <span>Survey questions are answered on a scale of 1 to 5: </span>
          <Textarea value={this.state.survey.question} onChange={this.handleEdit('question')} placeholder="Survey Question" />
          <button onClick={this.onNewClick}>Add Survey Question</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  createSurvey,
};

export default connect(null, mapDispatchToProps)(UpdateSurvey);
