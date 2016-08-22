import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BarChart } from 'react-d3';

import { fetchLocData, fetchIntentData, fetchSurveyData } from '../../../actions';

class Analytics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locData: {},
      intentData: {},
      surveyData: {},
    };
    this.renderLocationGraph = this.renderLocationGraph.bind(this);
    this.renderIntentGraph = this.renderIntentGraph.bind(this);
  }

  componentWillMount() {
    this.props.fetchLocData();
    this.props.fetchIntentData();
    this.props.fetchSurveyData();
    this.setState({
      locData: this.props.locData,
      intentData: this.props.intentData,
      surveyData: this.props.surveyData,
    });
  }

  renderLocationGraph = () => {
    const values = this.state.intentData.map((loc) => {
      return {
        x: loc.title,
        y: loc.hits,
      };
    });
    console.log(values);
    const data = [{
      name: 'Location Data',
      values,
    }];
    console.log(data);
    return (
      <BarChart
        title="Location Hits"
        yAxisLabel="Hits"
        xAxisLabel="Location"
        height={500}
        data={data}
      />
    );
  }

  renderIntentGraph = () => {
    const values = this.state.intentData.map((intent) => {
      return {
        x: intent.query,
        y: intent.hits,
      };
    });
    const data = [{
      name: 'Intent Data',
      values,
    }];
    return (
      <BarChart
        title="Query Hits"
        yAxisLabel="Hits"
        xAxisLabel="Query"
        height={500}
        data={data}
      />
    );
  }

  render() {
    return (
      <div className="analytics">
        <h1>Analytics</h1>
        <div id="locGraph">
          {this.renderLocationGraph()}
        </div>
        <div id="intentGraph">
          {this.renderIntentGraph()}
        </div>
        <div id="surveyGraphs">
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  locData: state.analytics.locData,
  intentData: state.analytics.intentData,
  surveyData: state.analytics.surveyData,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLocData,
    fetchIntentData,
    fetchSurveyData,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Analytics);
